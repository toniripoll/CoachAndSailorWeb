import { createServerClient } from "@/lib/supabase/server";
import type { Boat } from "@/types";

/* ── Fallback data (used when Supabase is not configured) ── */
const FALLBACK_BOATS: Boat[] = [
    {
        id: "1", slug: "vorteq-5-2m", name: "Vorteq 5.2m", category: "coaching",
        tagline: "Ágil y compacta para coaching diario",
        description: "Perfecta para entrenamientos diarios y seguimiento cercano de atletas.",
        length_m: 5.2, capacity: 6, max_speed_kn: 38, engine: "70 HP",
        price_from: "€180/día",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnMUjVDQlsSh5HNyVkQ7-_XT-DOgCNBrLfxBdj0fqjz1nBK1cSJlZ-FP_KMGxWaYQm4H7Z7PJwU7c-L7aAqmsFV0-_1cP_SJSjl9qmqyIqVt9mYFfXrYGP59lM9Nk3hgJLRFNLkFW1K8k8q4MNJvfWqT0fvKSCdLVPGvxS_0K4fqgZC3Y95TcrZAVWjWxWDKSXKwqkAh1H9_zT3Zor9MZM2PN5o4M6KlbHJ5tXJB2hnQwVEMpb1gvHdoWJaxIUjJMhfDMqZXBv8",
        gallery: [], specs: { eslora: "5.2 m", manga: "2.1 m", peso: "420 kg", motor: "Yamaha 70 HP" },
        is_featured: false, sort_order: 1, created_at: "",
    },
    {
        id: "2", slug: "tornado-coach-6m", name: "Tornado Coach 6.0m", category: "coaching",
        tagline: "Ideal para seguimiento de flotas y jornadas largas",
        description: "Motor potente, mínima estela. Ideal para seguimiento de flotas y jornadas largas.",
        length_m: 6.0, capacity: 8, max_speed_kn: 42, engine: "115 HP",
        price_from: "€200/día",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs",
        gallery: [], specs: { eslora: "6.0 m", manga: "2.4 m", peso: "580 kg", motor: "Yamaha 115 HP" },
        is_featured: true, sort_order: 2, created_at: "",
    },
    {
        id: "3", slug: "ava-6-3m", name: "AVA 6.3m", category: "support",
        tagline: "Alto rendimiento para soporte de regatas",
        description: "Velocidad y estabilidad para soporte técnico en regatas.",
        length_m: 6.3, capacity: 8, max_speed_kn: 48, engine: "150 HP",
        price_from: "€250/día",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8TXaTz9F9vhvLNOD-Z2dAbKx63R1kXqCb9bD2Fiu3bKPsPmLSzZKDy3jyb5VmhTqoFJXA-S_oPjfpLwYzR5jy_TZ2-6n3nACEfr7DQxGFCMTYuvluIuMIVeD1OTPLyUEKLk1tgjT5gkVA5t5fPpgLjbzJFEI2H_LbCdJO6Y5V0bMqLqK2-3ggqCYFAoEj_Y6FCgXE3hTqFMEz4F3bQ6Vf9YXLqDwABnrZCaW9BFWBXK5fSRNxLpLcm-XK3OGAb9djrjR6EkFpg",
        gallery: [], specs: { eslora: "6.3 m", manga: "2.5 m", peso: "650 kg", motor: "Suzuki 150 HP" },
        is_featured: false, sort_order: 3, created_at: "",
    },
    {
        id: "4", slug: "vsr-6-5m", name: "VSR 6.5m", category: "support",
        tagline: "Plataforma premium para soporte de grandes flotas",
        description: "Plataforma premium para soporte de grandes flotas y eventos internacionales.",
        length_m: 6.5, capacity: 10, max_speed_kn: 50, engine: "200 HP",
        price_from: "€300/día",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuASvBIyab4P6El96-LwnokyJ5H9wX-ROQB6KxJAYVPefX-56NSG4qB1wYFxegIveiaemyJxBRG8FrgZJTnhuD2P0WEuXTgHxSTuCy4BUu1dac62-_2IsMeuClHtkej1jYz4tU9j7WdIanK_bhUaYTRVOuAIGiKTpFcq5493x43QC1VBkJd91QZ8mOWyAJE1SyP0Bc4xOpu1nY1Z6cENITTZktrCvGTPFiasOuAhyht-kPdbR_Ty1LOjGHMqmqkaDyIBm11WTFfQgak",
        gallery: [], specs: { eslora: "6.5 m", manga: "2.6 m", peso: "720 kg", motor: "Suzuki 200 HP" },
        is_featured: false, sort_order: 4, created_at: "",
    },
    {
        id: "5", slug: "470-ziegelmayer", name: "470 Ziegelmayer", category: "470",
        tagline: "El 470 de referencia para entrenar y competir",
        description: "Embarcación de clase olímpica para entrenamiento y competición al más alto nivel.",
        length_m: 4.7, capacity: 2, max_speed_kn: 0, engine: "Vela",
        price_from: "Consultar",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7TFXOZ8kR1b8TKYKCe2LTPj0lOBnnShljVAuDfLwYH2AqUpnKNVyysrFIRB_lIT3lrQ_8FYNuELc2fcyHGeAfpMkbUCI4C4nR3hKDTOVbckrvAOIvjECRxvlCn1pSHf9kV6NzunRqlWajwwf_-8MUHAgga9jWyDjNONNAtUqe3bY8DJ9tpgrJC7Qxslunwi1sJS8lhKf1ygm_6YGQzvbyVrBT6poIA_IH4W-NXOut696UAHbww5bC-2_hrfTFNFrPogdxhx8LDE",
        gallery: [], specs: { eslora: "4.70 m", manga: "1.69 m", peso_casco: "120 kg", superficie_velica: "12.7 m²" },
        is_featured: false, sort_order: 5, created_at: "",
    },
];

export async function getBoats(): Promise<Boat[]> {
    const supabase = createServerClient();
    if (!supabase) return FALLBACK_BOATS;

    const { data, error } = await supabase
        .from("boats")
        .select("*")
        .order("sort_order");

    if (error || !data) return FALLBACK_BOATS;
    return data as Boat[];
}

export async function getBoatBySlug(slug: string): Promise<Boat | null> {
    const supabase = createServerClient();
    if (!supabase) return FALLBACK_BOATS.find((b) => b.slug === slug) ?? null;

    const { data, error } = await supabase
        .from("boats")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !data) return FALLBACK_BOATS.find((b) => b.slug === slug) ?? null;
    return data as Boat;
}

export async function getFeaturedBoat(): Promise<Boat | null> {
    const supabase = createServerClient();
    if (!supabase) return FALLBACK_BOATS.find((b) => b.is_featured) ?? null;

    const { data, error } = await supabase
        .from("boats")
        .select("*")
        .eq("is_featured", true)
        .single();

    if (error || !data) return FALLBACK_BOATS.find((b) => b.is_featured) ?? null;
    return data as Boat;
}

export async function getBoatsByCategory(category: string): Promise<Boat[]> {
    const supabase = createServerClient();
    if (!supabase) return FALLBACK_BOATS.filter((b) => b.category === category);

    const { data, error } = await supabase
        .from("boats")
        .select("*")
        .eq("category", category)
        .order("sort_order");

    if (error || !data) return FALLBACK_BOATS.filter((b) => b.category === category);
    return data as Boat[];
}
