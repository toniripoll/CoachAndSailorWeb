import { createServerClient } from "@/lib/supabase/server";
import type { Hub } from "@/types";

const FALLBACK_HUBS: Hub[] = [
    {
        id: "1", slug: "palma", name: "Palma de Mallorca",
        description: "Base central para regatas en la bahía de Palma.",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sBRFxc6Y3Jmo4plrhKtq3u8IX1FcBMZfpjuTuPHz8Hth1hL5BzwnO2G6VhfKODPwJa6WmquSQWLg3WsLXVNXQSoT2KgP1Zf8AKitalHWXf5NH1b2DG8YgzTWDTyQhPZPj6L5fawVLc8dDHBDF9hU_LapIQz3TGPiRZkpSIFuvVRlQw_EmTBZK8UA-Ypwf_h4uKXyy8QEjbPDlnxk-DlXunjTDRL8kHWliXe56n1zpkShZtYQ8tZX7SO4ZlSkqEIA9o3d5hOSfgE",
        rib_count: 12, status: "available", is_main_base: true,
        map_position: { top: "52%", left: "62%" }, created_at: "",
    },
    {
        id: "2", slug: "barcelona", name: "Barcelona",
        description: "Cobertura completa para Port Olímpic y zonas cercanas.",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3OTXVFTaepkOqm0PUkrrhWMs_LMqTGj9961dzg6C7FJklGy2pmS1K76g1egXg_hGSk9Q4Lz6JTMDbLtw2tdeJ9elxJ0nUEktiSo8rwMDdPU7eotFORIKLlok4jAn-RBpv7vzcGBwOBwa6v0q2ubR8OkiPU4_a0_nbOLWxrFilZk3qPCg5Xo7B-Brnhwt7-NG54mCzteUn0tVcIysIVrS-3Nq9XFUi8fq0ZsTDtOM7kViq4rqyJpdU072XXQh6wqYuhDFoErGyWUo",
        rib_count: 8, status: "high_demand", is_main_base: false,
        map_position: { top: "28%", left: "48%" }, created_at: "",
    },
    {
        id: "3", slug: "valencia", name: "Valencia",
        description: "Perfecto para eventos de vela ligera y entrenamientos de invierno.",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPyPsQ0pfG6eQvjB6o9d818EgZgY1e5mtNQAim_eGp5nRmzLpGU3VWz_oYLShAc4Y6DPqqC0whM_GLf34Uo35jL0wqjWOcivI4iFbKuVmIIqIZVVb9vmsxKqNZQVDsllWJGbkk0gli_zKdk4feubfe-WTBxhxe8hvnqERedjER5zMRIBdF8KWwdRtzKGrxryATQGDKQK694Gpit7ip_3O0HbDhXfWxjgHzSOczAcjrLUXyizq_wiRogHgHKX3q4LxFcWkcFp04trE",
        rib_count: 5, status: "available", is_main_base: false,
        map_position: { top: "42%", left: "38%" }, created_at: "",
    },
    {
        id: "4", slug: "ibiza", name: "Ibiza",
        description: "Hub estacional para regatas y travesías en las Pitiüsas.",
        image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
        rib_count: 4, status: "seasonal", is_main_base: false,
        map_position: { top: "55%", left: "53%" }, created_at: "",
    },
];

export async function getHubs(): Promise<Hub[]> {
    const supabase = createServerClient();
    if (!supabase) return FALLBACK_HUBS;

    const { data, error } = await supabase.from("hubs").select("*");
    if (error || !data) return FALLBACK_HUBS;
    return data as Hub[];
}
