-- Create feedback_forms table
CREATE TABLE IF NOT EXISTS feedback_forms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    is_common BOOLEAN DEFAULT true,
    is_personalized BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Create personalized_users table
CREATE TABLE IF NOT EXISTS personalized_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_id UUID REFERENCES feedback_forms(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    custom_outro TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(form_id, slug)
);

-- Create feedback_responses table
CREATE TABLE IF NOT EXISTS feedback_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_id UUID REFERENCES feedback_forms(id) ON DELETE CASCADE,
    user_slug TEXT, -- Links to personalized_users(slug)
    work_again TEXT CHECK (work_again IN ('Hell yes', 'Maybe', 'Nah')),
    three_words TEXT,
    improvement TEXT,
    advice TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Create design_explorations table
CREATE TABLE IF NOT EXISTS design_explorations (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    link TEXT,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE feedback_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE personalized_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE design_explorations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (submission)
CREATE POLICY "Enable insert for all" ON feedback_responses FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read for all" ON feedback_forms FOR SELECT USING (true);
CREATE POLICY "Enable read for all" ON personalized_users FOR SELECT USING (true);
CREATE POLICY "Enable select for all" ON design_explorations FOR SELECT USING (true);
CREATE POLICY "Enable insert for all" ON design_explorations FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all" ON design_explorations FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Enable delete for all" ON design_explorations FOR DELETE USING (true);

-- Create policies for admin access (TODO: simplify for now by allowing all selects if anon key)
CREATE POLICY "Enable select for all" ON feedback_responses FOR SELECT USING (true);
