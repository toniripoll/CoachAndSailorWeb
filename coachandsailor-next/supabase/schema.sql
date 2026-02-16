-- ═══════════════════════════════════════
-- Coach&Sailor — Supabase Schema
-- ═══════════════════════════════════════

-- Boats
CREATE TABLE IF NOT EXISTS boats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('coaching', 'support', '470')),
  tagline TEXT,
  description TEXT,
  length_m NUMERIC(3,1),
  capacity INT,
  max_speed_kn INT,
  engine TEXT,
  price_from TEXT,
  image_url TEXT,
  gallery JSONB DEFAULT '[]',
  specs JSONB DEFAULT '{}',
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Hubs (locations)
CREATE TABLE IF NOT EXISTS hubs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  rib_count INT,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'high_demand', 'seasonal')),
  is_main_base BOOLEAN DEFAULT FALSE,
  map_position JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Events
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  event_type TEXT CHECK (event_type IN ('olympic', 'major', 'world')),
  date_label TEXT,
  season TEXT,
  location TEXT,
  hub_slug TEXT REFERENCES hubs(slug),
  duration_days INT,
  level TEXT,
  spots INT,
  availability TEXT DEFAULT 'available' CHECK (availability IN ('available', 'few_spots', 'tech_support')),
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ═══════════════════════════════════════
-- RLS — Public read-only
-- ═══════════════════════════════════════
ALTER TABLE boats ENABLE ROW LEVEL SECURITY;
ALTER TABLE hubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read boats" ON boats FOR SELECT USING (true);
CREATE POLICY "Public read hubs" ON hubs FOR SELECT USING (true);
CREATE POLICY "Public read events" ON events FOR SELECT USING (true);
