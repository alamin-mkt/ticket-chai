-- ==============================================================================
-- Ticketchai B2B Travel Portal — Complete Supabase Database Schema
-- Run this script in the Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Agencies Table (Registered Travel Agencies)
CREATE TABLE IF NOT EXISTS public.agencies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_name TEXT NOT NULL,
    trade_license TEXT NOT NULL UNIQUE,
    contact_person TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'suspended')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Profiles Table (Linked to Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    agency_id UUID REFERENCES public.agencies(id) ON DELETE SET NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL DEFAULT 'agent_admin' CHECK (role IN ('super_admin', 'agent_admin', 'ticketing_staff', 'accountant')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Wallets Table (One wallet per agency)
CREATE TABLE IF NOT EXISTS public.wallets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_id UUID NOT NULL REFERENCES public.agencies(id) ON DELETE CASCADE UNIQUE,
    balance NUMERIC(14, 2) NOT NULL DEFAULT 0.00 CHECK (balance >= 0),
    credit_limit NUMERIC(14, 2) NOT NULL DEFAULT 0.00 CHECK (credit_limit >= 0),
    currency TEXT NOT NULL DEFAULT 'BDT',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Wallet Transactions Ledger Table (Double-entry transaction audit)
CREATE TABLE IF NOT EXISTS public.wallet_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    wallet_id UUID NOT NULL REFERENCES public.wallets(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('deposit', 'ticket_issue', 'ticket_refund', 'commission_rebate', 'adjustment')),
    amount NUMERIC(14, 2) NOT NULL,
    balance_after NUMERIC(14, 2) NOT NULL,
    reference_pnr TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Contact Inquiries Table (From /contact page)
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    agency_name TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Trigger to automatically provision a Wallet when an Agency is registered
CREATE OR REPLACE FUNCTION public.handle_new_agency_wallet()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.wallets (agency_id, balance, credit_limit, currency)
    VALUES (NEW.id, 0.00, 0.00, 'BDT');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trigger_new_agency_wallet ON public.agencies;
CREATE TRIGGER trigger_new_agency_wallet
AFTER INSERT ON public.agencies
FOR EACH ROW EXECUTE FUNCTION public.handle_new_agency_wallet();

-- 8. Row Level Security (RLS) Configuration
ALTER TABLE public.agencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallet_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public insertion for agency registration and contact inquiries
CREATE POLICY "Allow public agency registration" ON public.agencies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public contact inquiries" ON public.contact_inquiries FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read their own agency data
CREATE POLICY "Users can read own agency" ON public.agencies FOR SELECT TO authenticated
USING (id IN (SELECT agency_id FROM public.profiles WHERE profiles.id = auth.uid()));

CREATE POLICY "Users can read own profile" ON public.profiles FOR SELECT TO authenticated
USING (id = auth.uid());

CREATE POLICY "Users can read own wallet" ON public.wallets FOR SELECT TO authenticated
USING (agency_id IN (SELECT agency_id FROM public.profiles WHERE profiles.id = auth.uid()));

CREATE POLICY "Users can read own transactions" ON public.wallet_transactions FOR SELECT TO authenticated
USING (wallet_id IN (
    SELECT w.id FROM public.wallets w
    JOIN public.profiles p ON p.agency_id = w.agency_id
    WHERE p.id = auth.uid()
));
