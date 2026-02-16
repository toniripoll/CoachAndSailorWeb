export interface BoatData {
    slug: string;
    name: string;
    tagline: string;
    category: string;
    categoryBadge: string;
    heroImage: string;
    locations: string[];
    locationString: string;
    pricePerDay: string;
    heroKpis: { icon: string; label: string; value: string }[];
    idealFor: string[];
    description: string;
    specs: { icon: string; label: string; value: string }[];
    techDetails: { icon: string; label: string; value: string }[];
    safetyGear: { icon: string; text: string }[];
    gallery: string[];
    includes: string[];
}

const BOATS: BoatData[] = [
    {
        slug: "vorteq-5-2m",
        name: "Vorteq 5.2m",
        tagline: "Compacta y ágil para coaching cercano",
        category: "Coaching",
        categoryBadge: "Ideal for Close Coaching",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCm6HGrRiIv7gAikvGOmXLSC0GZkan-75Fh3Cfj3bNJyZF4huMnCC6K22cNPhHb87udoQdIo1GqnQsh2WoOp2eGHksBHpOo0R2N3cnz2u2zLxFXGZQLucOo7nQsS8Wr38kLRPwPiyRu7XX9mSSPQjKw8DxBrFu5DLpBHyOaSCaJmbFPkiLyuBHXM7kFNjSCuqzBIFB5Xg0SOynEyE7lpQI5HlMMwaIuhiJ2L1PRc585Gp6ClBlEMFknE0ZJo-FrPPHPjBGSWtPExSc",
        locations: ["Palma", "Barcelona"],
        locationString: "Disponible en Palma y Barcelona",
        pricePerDay: "€170",
        heroKpis: [
            { icon: "speed", label: "Motor", value: "50 HP" },
            { icon: "straighten", label: "Eslora", value: "5.2 m" },
            { icon: "group", label: "Capacidad", value: "6 Pax" },
        ],
        idealFor: [
            "Coaching cercano de parejas (470, ILCA)",
            "Sesiones cortas y maniobrables",
            "Operación en aguas planas y costeras",
        ],
        description:
            "La Vorteq 5.2m es la elección perfecta para coaches que necesitan proximidad y agilidad. Su tamaño compacto la hace ideal para seguimiento cercano de parejas de 470 e ILCA, mientras que su casco estable permite sesiones prolongadas incluso en condiciones variables.",
        specs: [
            { icon: "speed", label: "Motor", value: "50 HP" },
            { icon: "straighten", label: "Eslora", value: "5.2 m" },
            { icon: "group", label: "Capacidad", value: "6 Pax" },
            { icon: "local_gas_station", label: "Combustible", value: "20L" },
            { icon: "water", label: "Casco", value: "Semi-V" },
            { icon: "engineering", label: "Motor marca", value: "Tohatsu" },
        ],
        techDetails: [
            { icon: "directions_boat", label: "Modelo", value: "Vorteq 520" },
            { icon: "layers", label: "Tipo de casco", value: "Semi-V Fiberglass" },
            { icon: "settings", label: "Motor", value: "Tohatsu 4-Stroke" },
            { icon: "link", label: "Remolque", value: "Galvanizado" },
        ],
        safetyGear: [
            { icon: "radio", text: "Radio VHF marina" },
            { icon: "medical_services", text: "Botiquín de primeros auxilios" },
            { icon: "anchor", text: "Ancla y cadena" },
            { icon: "shield", text: "Protector de hélice" },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCm6HGrRiIv7gAikvGOmXLSC0GZkan-75Fh3Cfj3bNJyZF4huMnCC6K22cNPhHb87udoQdIo1GqnQsh2WoOp2eGHksBHpOo0R2N3cnz2u2zLxFXGZQLucOo7nQsS8Wr38kLRPwPiyRu7XX9mSSPQjKw8DxBrFu5DLpBHyOaSCaJmbFPkiLyuBHXM7kFNjSCuqzBIFB5Xg0SOynEyE7lpQI5HlMMwaIuhiJ2L1PRc585Gp6ClBlEMFknE0ZJo-FrPPHPjBGSWtPExSc",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ917GoJBW-VekSi1fnmfMxvs9JKj7lOYPoTDDYLv365mmDOk7rr9JfQSz8aqSVQDw_Ww7O1cz-9zdi1h67vbO4oa9Od3kteUy1FXXxAum6IlxYFroVTb4Ra9GEFSzfxc1ZxWWi4cfrCT_UXzbUa_Ywj_oBLdhTFbL_BhiG11dzfWaXnknvai6sdgE2k_jP1FTgl-8w1bP0DSj8Fqeg1t3KFwzn3Wfpa1M3fA0gATDpK-wCgCsmeirAnAZoIVQcaTU9ke9h4AXWaw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
        ],
        includes: ["Combustible incluido", "Equipo de seguridad incluido", "Entrega en puerto o rampa"],
    },
    {
        slug: "tornado-coach-6m",
        name: "Tornado Coach 6.0m",
        tagline: "Motor potente, mínima estela",
        category: "Coaching",
        categoryBadge: "Most Popular for Coaches",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs",
        locations: ["Palma", "Barcelona", "Valencia"],
        locationString: "Disponible en Palma, Barcelona y Valencia",
        pricePerDay: "€200",
        heroKpis: [
            { icon: "speed", label: "Motor", value: "90 HP" },
            { icon: "straighten", label: "Eslora", value: "6.0 m" },
            { icon: "group", label: "Capacidad", value: "8 Pax" },
        ],
        idealFor: [
            "Seguimiento de flotas grandes (Optimist, ILCA, 49er)",
            "Jornadas largas de coaching",
            "Operación en mar formado y condiciones variables",
        ],
        description:
            "La Tornado Coach 6.0m es la neumática más popular entre coaches profesionales. Su motor de 90 HP permite alcanzar cualquier zona del campo de regatas rápidamente, mientras que su diseño de mínima estela protege a las flotas de embarcaciones pequeñas. Ideal para jornadas largas gracias a su gran capacidad de combustible.",
        specs: [
            { icon: "speed", label: "Motor", value: "90 HP" },
            { icon: "straighten", label: "Eslora", value: "6.0 m" },
            { icon: "group", label: "Capacidad", value: "8 Pax" },
            { icon: "local_gas_station", label: "Combustible", value: "40L + Reserva" },
            { icon: "water", label: "Casco", value: "Deep V" },
            { icon: "engineering", label: "Motor marca", value: "Yamaha" },
        ],
        techDetails: [
            { icon: "directions_boat", label: "Modelo", value: "Tornado 600" },
            { icon: "layers", label: "Tipo de casco", value: "Deep V Fiberglass" },
            { icon: "settings", label: "Motor", value: "Yamaha 4-Stroke" },
            { icon: "link", label: "Poste de remolque", value: "Acero inoxidable" },
        ],
        safetyGear: [
            { icon: "radio", text: "Radio VHF marina" },
            { icon: "medical_services", text: "Botiquín de primeros auxilios" },
            { icon: "anchor", text: "Ancla y cadena" },
            { icon: "shield", text: "Protector de hélice" },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBpYXBNrygjGNeOaDA83DzdrYP9s8oc8lcq1U_O42wJ7-T4qIqayrUglp6l2GNNMGnyMxlIFoseaq9FswR3IRwhLBK3FOFL5j262R8PpFtgRcU6y1SxrVoV7B_JfITfm1NlbVVWkXnoJwwl7CITrKRbXj2CdjxicoxazoFnoPrbxAt8cRMohsnssfFMxOd_qqyr8B_oz-LOySmE5rCqL1syCOVsFzC3b5AS92NGuqDFuC2O_fRLfXMAsvJ4kM979V8FDH92EFucmCs",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9rsDiITUAKkmNh6Mh63N9VyEFDBn_pQPrfGwhz0XDtW1sUKOOHJ6bZyqB99-8jn2LcAZFezt4WgaeOxHejvIhfNVA7BHzYWWQmjfeU4UfpoIW_DMkce1wGtjlQ8XYdxhD6GNkVMC7p8f1BvIAd58hWpxdOxMsDZn25N2EvQ-2k-pmGKwv36qRA85sMqNe-AXgxmpTLFCMFHWKm57qN0RGBEDo3WN1tK212vqmdMQd3iQCjEzPZ-9wBJ7zqceDKWqmVUcvxVeNI4",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ917GoJBW-VekSi1fnmfMxvs9JKj7lOYPoTDDYLv365mmDOk7rr9JfQSz8aqSVQDw_Ww7O1cz-9zdi1h67vbO4oa9Od3kteUy1FXXxAum6IlxYFroVTb4Ra9GEFSzfxc1ZxWWi4cfrCT_UXzbUa_Ywj_oBLdhTFbL_BhiG11dzfWaXnknvai6sdgE2k_jP1FTgl-8w1bP0DSj8Fqeg1t3KFwzn3Wfpa1M3fA0gATDpK-wCgCsmeirAnAZoIVQcaTU9ke9h4AXWaw",
        ],
        includes: ["Combustible incluido", "Equipo de seguridad incluido", "Entrega en puerto o rampa"],
    },
    {
        slug: "ava-6-3m",
        name: "AVA 6.3m",
        tagline: "Versatilidad y robustez para soporte técnico",
        category: "Support",
        categoryBadge: "Best for Technical Support",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC2WYsF15sIN7Z7_HUF0kpeUBCiRGR5lwM9yI_8uNOEP4vj883unYw0BZKLf_NIe4eplf9fB-2EbNEAijpF26ti5WA0EeIyzg-zOmgNoJvXCSsfpq3wwxZZR4eHirzyYKVgMv2EZT-vdTXLnzsgx-efcvl4n8rbYk7rGubVgFlgg4UCdBRdlTpRR8aI9Wa2xdl863Maif0ShGeHvuf1eAdgFZ1G9K7yHc31mGI_THzrx_51I8aMYa741ZKVqwynQXNQb5JSV3J1css",
        locations: ["Palma", "Valencia"],
        locationString: "Disponible en Palma y Valencia",
        pricePerDay: "€220",
        heroKpis: [
            { icon: "speed", label: "Motor", value: "100 HP" },
            { icon: "straighten", label: "Eslora", value: "6.3 m" },
            { icon: "group", label: "Capacidad", value: "10 Pax" },
        ],
        idealFor: [
            "Soporte técnico y logístico en regatas",
            "Transporte de material y personal",
            "Operación como bote de seguridad",
        ],
        description:
            "La AVA 6.3m destaca por su gran capacidad y estabilidad. Con espacio para 10 personas y una cubierta amplia, es la elección ideal para equipos que necesitan transportar material, ofrecer soporte técnico durante las regatas o actuar como bote de seguridad. Su motor de 100 HP garantiza respuesta rápida en cualquier situación.",
        specs: [
            { icon: "speed", label: "Motor", value: "100 HP" },
            { icon: "straighten", label: "Eslora", value: "6.3 m" },
            { icon: "group", label: "Capacidad", value: "10 Pax" },
            { icon: "local_gas_station", label: "Combustible", value: "50L" },
            { icon: "water", label: "Casco", value: "V Profunda" },
            { icon: "engineering", label: "Motor marca", value: "Suzuki" },
        ],
        techDetails: [
            { icon: "directions_boat", label: "Modelo", value: "AVA 630 Pro" },
            { icon: "layers", label: "Tipo de casco", value: "V Profunda Hypalon" },
            { icon: "settings", label: "Motor", value: "Suzuki 4-Stroke" },
            { icon: "link", label: "Remolque", value: "Aluminio reforzado" },
        ],
        safetyGear: [
            { icon: "radio", text: "Radio VHF marina" },
            { icon: "medical_services", text: "Botiquín de primeros auxilios" },
            { icon: "anchor", text: "Ancla y cadena" },
            { icon: "shield", text: "Protector de hélice" },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC2WYsF15sIN7Z7_HUF0kpeUBCiRGR5lwM9yI_8uNOEP4vj883unYw0BZKLf_NIe4eplf9fB-2EbNEAijpF26ti5WA0EeIyzg-zOmgNoJvXCSsfpq3wwxZZR4eHirzyYKVgMv2EZT-vdTXLnzsgx-efcvl4n8rbYk7rGubVgFlgg4UCdBRdlTpRR8aI9Wa2xdl863Maif0ShGeHvuf1eAdgFZ1G9K7yHc31mGI_THzrx_51I8aMYa741ZKVqwynQXNQb5JSV3J1css",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9rsDiITUAKkmNh6Mh63N9VyEFDBn_pQPrfGwhz0XDtW1sUKOOHJ6bZyqB99-8jn2LcAZFezt4WgaeOxHejvIhfNVA7BHzYWWQmjfeU4UfpoIW_DMkce1wGtjlQ8XYdxhD6GNkVMC7p8f1BvIAd58hWpxdOxMsDZn25N2EvQ-2k-pmGKwv36qRA85sMqNe-AXgxmpTLFCMFHWKm57qN0RGBEDo3WN1tK212vqmdMQd3iQCjEzPZ-9wBJ7zqceDKWqmVUcvxVeNI4",
        ],
        includes: ["Combustible incluido", "Equipo de seguridad incluido", "Entrega en puerto o rampa"],
    },
    {
        slug: "vsr-6-5m",
        name: "VSR 6.5m",
        tagline: "Máxima velocidad para desplazamientos rápidos",
        category: "High-Speed",
        categoryBadge: "Fastest in Fleet",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7TFXOZ8kR1b8TKYKCe2LTPj0lOBnnShljVAuDfLwYH2AqUpnKNVyysrFIRB_lIT3lrQ_8FYNuELc2fcyHGeAfpMkbUCI4C4nR3hKDTOVbckrvAOIvjECRxvlCn1pSHf9kV6NzunRqlWajwwf_-8MUHAgga9jWyDjNONNAtUqe3bY8DJ9tpgrJC7Qxslunwi1sJS8lhKf1ygm_6YGQzvbyVrBT6poIA_IH4W-NXOut696UAHbww5bC-2_hrfTFNFrPogdxhx8LDE",
        locations: ["Palma", "Barcelona"],
        locationString: "Disponible en Palma y Barcelona",
        pricePerDay: "€240",
        heroKpis: [
            { icon: "speed", label: "Motor", value: "115 HP" },
            { icon: "straighten", label: "Eslora", value: "6.5 m" },
            { icon: "group", label: "Capacidad", value: "8 Pax" },
        ],
        idealFor: [
            "Desplazamientos rápidos entre zonas de regata",
            "Seguimiento dinámico de flotas rápidas (49er, Nacra 17)",
            "Soporte de seguridad en alta velocidad",
        ],
        description:
            "La VSR 6.5m es la neumática más rápida de nuestra flota. Equipada con un motor de 115 HP, es capaz de cubrir grandes distancias en poco tiempo, ideal para coaches que necesitan cambiar rápidamente entre zonas del campo de regatas o seguir flotas de alto rendimiento como 49er y Nacra 17.",
        specs: [
            { icon: "speed", label: "Motor", value: "115 HP" },
            { icon: "straighten", label: "Eslora", value: "6.5 m" },
            { icon: "group", label: "Capacidad", value: "8 Pax" },
            { icon: "local_gas_station", label: "Combustible", value: "45L + Reserva" },
            { icon: "water", label: "Casco", value: "Deep V" },
            { icon: "engineering", label: "Motor marca", value: "Yamaha" },
        ],
        techDetails: [
            { icon: "directions_boat", label: "Modelo", value: "VSR 6.5 Pro" },
            { icon: "layers", label: "Tipo de casco", value: "Deep V Fiberglass" },
            { icon: "settings", label: "Motor", value: "Yamaha 4-Stroke" },
            { icon: "link", label: "Poste de remolque", value: "Acero inoxidable" },
        ],
        safetyGear: [
            { icon: "radio", text: "Radio VHF marina" },
            { icon: "medical_services", text: "Botiquín de primeros auxilios" },
            { icon: "anchor", text: "Ancla y cadena" },
            { icon: "shield", text: "Protector de hélice" },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7TFXOZ8kR1b8TKYKCe2LTPj0lOBnnShljVAuDfLwYH2AqUpnKNVyysrFIRB_lIT3lrQ_8FYNuELc2fcyHGeAfpMkbUCI4C4nR3hKDTOVbckrvAOIvjECRxvlCn1pSHf9kV6NzunRqlWajwwf_-8MUHAgga9jWyDjNONNAtUqe3bY8DJ9tpgrJC7Qxslunwi1sJS8lhKf1ygm_6YGQzvbyVrBT6poIA_IH4W-NXOut696UAHbww5bC-2_hrfTFNFrPogdxhx8LDE",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ917GoJBW-VekSi1fnmfMxvs9JKj7lOYPoTDDYLv365mmDOk7rr9JfQSz8aqSVQDw_Ww7O1cz-9zdi1h67vbO4oa9Od3kteUy1FXXxAum6IlxYFroVTb4Ra9GEFSzfxc1ZxWWi4cfrCT_UXzbUa_Ywj_oBLdhTFbL_BhiG11dzfWaXnknvai6sdgE2k_jP1FTgl-8w1bP0DSj8Fqeg1t3KFwzn3Wfpa1M3fA0gATDpK-wCgCsmeirAnAZoIVQcaTU9ke9h4AXWaw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
        ],
        includes: ["Combustible incluido", "Equipo de seguridad incluido", "Entrega en puerto o rampa"],
    },
    {
        slug: "470-ziegelmayer",
        name: "470 Ziegelmayer (2020)",
        tagline: "Velero de clase olímpica en estado impecable",
        category: "Velero",
        categoryBadge: "Olympic Class Sailboat",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
        locations: ["Palma"],
        locationString: "Disponible en Palma de Mallorca",
        pricePerDay: "Consultar",
        heroKpis: [
            { icon: "sailing", label: "Clase", value: "470" },
            { icon: "straighten", label: "Eslora", value: "4.7 m" },
            { icon: "group", label: "Tripulación", value: "2 Pax" },
        ],
        idealFor: [
            "Entrenamientos de alto nivel en clase 470",
            "Preparación para regatas olímpicas",
            "Navegación competitiva en condiciones exigentes",
        ],
        description:
            "El 470 Ziegelmayer (2020) es un velero de clase olímpica fabricado por uno de los astilleros de referencia mundial. En estado impecable gracias a un mantenimiento profesional continuo, es ideal para regatistas que buscan el máximo rendimiento tanto en entrenamientos como en competiciones de alto nivel.",
        specs: [
            { icon: "sailing", label: "Clase", value: "470" },
            { icon: "straighten", label: "Eslora", value: "4.7 m" },
            { icon: "group", label: "Tripulación", value: "2 Pax" },
            { icon: "calendar_today", label: "Año", value: "2020" },
            { icon: "verified", label: "Estado", value: "Impecable" },
            { icon: "inventory_2", label: "Equipo", value: "Completo" },
        ],
        techDetails: [
            { icon: "sailing", label: "Fabricante", value: "Ziegelmayer" },
            { icon: "layers", label: "Casco", value: "Fibra de vidrio" },
            { icon: "inventory_2", label: "Velas", value: "Mayor, foque y spinnaker" },
            { icon: "settings", label: "Trapecio", value: "Doble trapecio completo" },
        ],
        safetyGear: [
            { icon: "shield", text: "Chalecos salvavidas" },
            { icon: "medical_services", text: "Kit de reparación de emergencia" },
            { icon: "visibility", text: "Espejo de señalización" },
            { icon: "water", text: "Achicador y esponja" },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1bAuUJkFSFJ3EGpahb4oC6bQwYq5lOIHchj-tcdbGtIqa8uozAgUGWB8kCUC4idE1uCPG0Bk0EuXkMB4apZWIpCeeTJPkdNmdP5EiVw9oxUou1RhHaE6zYiu1ALj-zlWm8DGQ7j4veMTQNbGxthIqq57FcWP2ErBJOuVKNZicgIqr_Oet98Ej8bh51Da6eWc604y7LP7SJnaB3ad26FqiW0kTAAUMiEvfZ-2wL4qWOOUaJ9Gb7xAM4v9a1Y57QB5_11sYiAUtJY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sBRFxc6Y3Jmo4plrhKtq3u8IX1FcBMZfpjuTuPHz8Hth1hL5BzwnO2G6VhfKODPwJa6WmquSQWLg3WsLXVNXQSoT2KgP1Zf8AKitalHWXf5NH1b2DG8YgzTWDTyQhPZPj6L5fawVLc8dDHBDF9hU_LapIQz3TGPiRZkpSIFuvVRlQw_EmTBZK8UA-Ypwf_h4uKXyy8QEjbPDlnxk-DlXunjTDRL8kHWliXe56n1zpkShZtYQ8tZX7SO4ZlSkqEIA9o3d5hOSfgE",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDPyPsQ0pfG6eQvjB6o9d818EgZgY1e5mtNQAim_eGp5nRmzLpGU3VWz_oYLShAc4Y6DPqqC0whM_GLf34Uo35jL0wqjWOcivI4iFbKuVmIIqIZVVb9vmsxKqNZQVDsllWJGbkk0gli_zKdk4feubfe-WTBxhxe8hvnqERedjER5zMRIBdF8KWwdRtzKGrxryATQGDKQK694Gpit7ip_3O0HbDhXfWxjgHzSOczAcjrLUXyizq_wiRogHgHKX3q4LxFcWkcFp04trE",
        ],
        includes: ["Velas completas incluidas", "Trapecio y arneses", "Equipo de seguridad básico"],
    },
];

export function getBoatBySlug(slug: string): BoatData | undefined {
    return BOATS.find((b) => b.slug === slug);
}

export function getAllBoatSlugs(): string[] {
    return BOATS.map((b) => b.slug);
}

export default BOATS;
