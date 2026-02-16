/* ═══════════════════════════════════════
   Coach&Sailor — Domain Types
   ═══════════════════════════════════════ */

export interface Boat {
    id: string;
    slug: string;
    name: string;
    category: "coaching" | "support" | "470";
    tagline?: string;
    description?: string;
    length_m: number;
    capacity: number;
    max_speed_kn: number;
    engine?: string;
    price_from?: string;
    image_url: string;
    gallery: string[];
    specs: Record<string, string>;
    is_featured: boolean;
    sort_order: number;
    created_at: string;
}

export interface Hub {
    id: string;
    slug: string;
    name: string;
    description?: string;
    image_url: string;
    rib_count: number;
    status: "available" | "high_demand" | "seasonal";
    is_main_base: boolean;
    map_position: { top: string; left: string };
    created_at: string;
}

export interface SailingEvent {
    id: string;
    slug: string;
    name: string;
    event_type: "olympic" | "major" | "world";
    date_label: string;
    season: string;
    location: string;
    hub_slug: string;
    duration_days: number;
    level: string;
    spots: number;
    availability: "available" | "few_spots" | "tech_support";
    image_url: string;
    created_at: string;
}
