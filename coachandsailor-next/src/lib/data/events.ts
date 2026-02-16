import { createServerClient } from "@/lib/supabase/server";
import type { SailingEvent } from "@/types";

const FALLBACK_EVENTS: SailingEvent[] = [
    {
        id: "1", slug: "trofeo-princesa-sofia", name: "Trofeo Princesa Sofía",
        event_type: "olympic", date_label: "1 – 6 Abr 2024", season: "2024",
        location: "Palma de Mallorca, España", hub_slug: "palma",
        duration_days: 6, level: "Nivel olímpico", spots: 6, availability: "available",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCESj5RjeO1e7soVVF3iih9ZcDD5IyglCB0kGpbIXYgxOunL_JNwaZoS6zc8MGv39XgVgoRDolPoyfiitQanD6hhXj-RemqgsL82oDHcjAQJEjyWAxFz9F1Mxkl4ZgSI2_iOlCOeb6EKTUw4bbSbseYx-revUHKyfuvxEPiiCZe6Zu-VWgWkEhVCxu5G50MO0WKPu5Cqs6fw4n0JCsa16Fw-lkALdI4N6xsdCtOf0qTnxlh5BejFojh_wR941z9nSDW6X51USVwW40",
        created_at: "",
    },
    {
        id: "2", slug: "copa-del-rey-mapfre", name: "Copa del Rey MAPFRE",
        event_type: "major", date_label: "27 Jul – 3 Ago 2024", season: "2024",
        location: "Palma de Mallorca, España", hub_slug: "palma",
        duration_days: 8, level: "Alta competición", spots: 4, availability: "tech_support",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgWUN4D00J15kDLudQCIM5DJwE6bf-FuzLHbIFnK4aUY4eWA5M1Uh0vYgL28o64acwTESjRRD0IhLnLHpb4yRtsfCd0kvDl-xZHDnOETgaBjOZapleJmyVaGaWnnDKcDoqqTzxdDGSImNRloH7GQy3A9YDqD1Iur9SYs1MPa1ERoR91pdV6mdo1mBcXkpDzlMmYbVhMkCC1A19pjKJTT7AdQwQXdDGuGR4J6odsVnLeh86bDEePmuvEPm-JC0VU104E5EiK7YPBE4",
        created_at: "",
    },
    {
        id: "3", slug: "orc-world-championship", name: "ORC World Championship",
        event_type: "world", date_label: "20 – 27 Sep 2024", season: "2024",
        location: "Barcelona, España", hub_slug: "barcelona",
        duration_days: 8, level: "Campeonato mundial", spots: 2, availability: "few_spots",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs1YmzCLOeaB-6SPWNhL4bi2ZuVx94wnkF1oYByMjAhOBjcjpqOq87sD00b3gVVggT-pIEn06zP1-HAif4qo3OFGCUHPzyroas2GCUXdCrGahJN_gCRhb9l4ceS2s34SrbmgeacRCwuPjsLL6LNn36sxh_9BZLwKTdaUEBqxRJLRLzFUHH0jgBEJUcJHtSLdLUREq2or4ekjDNPujwpZl7mBGZ5-sxOb24UdGMUSIXcCo61uImpLIenakBHLKYB4NzYYhjvujPypM",
        created_at: "",
    },
    {
        id: "4", slug: "valencia-sailing-week", name: "Valencia Sailing Week",
        event_type: "major", date_label: "15 – 20 Oct 2024", season: "2024",
        location: "Valencia, España", hub_slug: "valencia",
        duration_days: 6, level: "Alta competición", spots: 8, availability: "available",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCESj5RjeO1e7soVVF3iih9ZcDD5IyglCB0kGpbIXYgxOunL_JNwaZoS6zc8MGv39XgVgoRDolPoyfiitQanD6hhXj-RemqgsL82oDHcjAQJEjyWAxFz9F1Mxkl4ZgSI2_iOlCOeb6EKTUw4bbSbseYx-revUHKyfuvxEPiiCZe6Zu-VWgWkEhVCxu5G50MO0WKPu5Cqs6fw4n0JCsa16Fw-lkALdI4N6xsdCtOf0qTnxlh5BejFojh_wR941z9nSDW6X51USVwW40",
        created_at: "",
    },
];

export async function getEvents(): Promise<SailingEvent[]> {
    const supabase = createServerClient();
    if (!supabase) return FALLBACK_EVENTS;

    const { data, error } = await supabase.from("events").select("*");
    if (error || !data) return FALLBACK_EVENTS;
    return data as SailingEvent[];
}
