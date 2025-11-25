export const healthTests = [
    {
        id: 201,
        type: "test",
        title: "Hälsokontroll Stor",
        subtitle: "Allmän och omfattande hälsokontroll",
        markers: 52,
        bullets: [
            "Vår mest populära allround-kontroll.",
            "Analys av 52 centrala hälsomarkörer.",
            "Ger en bred genomgång av organfunktion, blodstatus och livsstilsrelaterade risker."
        ],
        oldPrice: "2 195",
        newPrice: "1 750",
        bg: "#e9fce9",
        image: "/assets/halsotest.png",
        icon: "+"
    },
    {
        id: 202,
        type: "test",
        title: "Hälsokontroll – Kvinna",
        subtitle: "Hälsokontroll anpassad för kvinnor",
        markers: 49,
        bullets: [
            "Utformad för kvinnors fysiologi och hormonella balans.",
            "49 markörer som ger en tydlig helhetsbild över din hälsa.",
            "Fokus på hormonstatus, vitaminer, ämnesomsättning och blodmarkörer."
        ],
        oldPrice: "1 850",
        newPrice: "1 595",
        bg: "#f7eefe",
        image: "/assets/halsotest.png",
        icon: "♀"
    },
    {
        id: 203,
        type: "test",
        title: "Hälsokontroll – Man",
        subtitle: "Hälsokontroll anpassad för män",
        markers: 46,
        bullets: [
            "Specifikt anpassad för mäns behov.",
            "46 markörer som analyserar hjärta, blod, hormoner och organfunktion.",
            "Ger en klarare bild av testosteron, näringsstatus och livsstilspåverkan."
        ],
        oldPrice: "1 850",
        newPrice: "1 595",
        bg: "#f5efe7",
        image: "/assets/halsotest.png",
        icon: "♂"
    },
    {
        id: 204,
        type: "test",
        title: "Hälsokontroll – Man Plus",
        subtitle: "Fördjupad hälsokontroll för män",
        markers: 64,
        bullets: [
            "Avancerad provtagning anpassad för män.",
            "64 markörer med extra fokus på hjärta, hormoner och prostatamarkörer.",
            "Ger en mycket detaljerad bild av din hälsa och livsstilsrelaterade risker."
        ],
        oldPrice: "3 895",
        newPrice: "3 195",
        bg: "#e9fce9",
        image: "/assets/halsotest.png",
        icon: "♂"
    },
    {
        id: 205,
        type: "test",
        title: "Hälsokontroll – Kvinna Plus",
        subtitle: "Fördjupad hälsokontroll för kvinnor",
        markers: 64,
        bullets: [
            "Utformad för kvinnor som vill få en extra grundlig analys.",
            "64 markörer med fokus på hormonell balans, näringsstatus och organfunktion.",
            "Ger en djupgående och detaljerad helhetsbild över din hälsa."
        ],
        oldPrice: "3 895",
        newPrice: "3 195",
        bg: "#f7eefe",
        image: "/assets/halsotest.png",
        icon: "♀"
    }
];

export const markerGroups = {
    // 201 – Hälsokontroll Stor (Man & Kvinna – shared general test)
    201: {
        "Blodsocker": ["HbA1c", "Glukos"],
        "Blodstatus": [
            "Erc(W)-RDV", "Erytrocyter EPK", "Hematokrit", "Hemaglobinmassa",
            "Hemoglobin", "MCV", "Monocyter", "Trombocyter"
        ],
        "Hjärta & Kärl": [
            "HDL-kolesterol", "Kolesterol(total)", "LDL", "Triglycerider"
        ],
        "Hormoner": ["Testosteron"],
        "Inflammation": ["Högkänslig CRP"],
        "Järn": ["Ferritin", "Järn"],
        "Lever": ["ALAT", "ALP", "ASAT", "Albumin", "Bilirubin(BIB)", "GT, gamma"],
        "Muskler & Leder": ["Kreatinkinas, S-CK", "Laktatdehydrogena (S-LD)"],
        "Mage & Tarm": ["Pankreasamylas"],
        "Njurar": [
            "Cystatin C", "Kalium", "Kreatinin", "Natrium",
            "Urat", "Urea (UEA)", "eGFR Cystatin C"
        ],
        "Sköldkörtel": ["T4 Fritt", "TSH"],
        "Vitaminer & Mineraler": [
            "Kobalamin", "D-vitamin", "Folat (folsyra)", "Fosfat",
            "Kalcium", "Magnesium"
        ]
    },

    // 202 – Hälsokontroll Kvinna
    202: {
        "Blodsocker": ["HbA1c", "Glukos"],
        "Blodstatus": [
            "Erc(W)-RDV", "Erytrocyter EPK", "Hematokrit", "Hemaglobinmassa",
            "Hemoglobin", "MCV", "Monocyter", "Trombocyter"
        ],
        "Hjärta & Kärl": [
            "HDL-kolesterol", "Kolesterol(total)", "LDL", "Triglycerider"
        ],
        "Hormoner": ["Östradiol", "Lutropin (LH)", "Progesteron"],
        "Inflammation": ["Högkänslig CRP"],
        "Järn": ["Ferritin", "Järn"],
        "Lever": ["ALAT", "ALP", "ASAT", "Albumin", "Bilirubin(BIB)", "GT", "gamma"],
        "Muskler & Leder": ["Kreatinkinas", "S-CK", "Laktatdehydrogena (S-LD)"],
        "Njurar": [
            "Cystatin C", "Kalium", "Klorid", "Kreatinin", "Natrium",
            "Urat", "Urea (UEA)", "eGFR Cystatin C"
        ],
        "Sköldkörtel": ["T3 Fritt", "T4 Fritt", "TSH"],
        "Vitaminer & Mineraler": [
            "Kobalamin", "D-vitamin", "Folat (folsyra)", "Fosfat",
            "Kalcium", "Magnesium"
        ]
    },

    // 203 – Hälsokontroll Man
    203: {
        "Blodsocker": ["HbA1c", "Glukos"],
        "Blodstatus": [
            "Erc(W)-RDV", "Erytrocyter EPK", "Hematokrit", "Hemaglobinmassa",
            "Hemoglobin", "MCV", "Monocyter", "Trombocyter"
        ],
        "Hjärta & Kärl": [
            "HDL-kolesterol", "Kolesterol(total)", "LDL", "Triglycerider"
        ],
        "Hormoner": ["Testosteron"],
        "Inflammation": ["Högkänslig CRP"],
        "Järn": ["Ferritin", "Järn"],
        "Lever": ["ALAT", "ALP", "ASAT", "Albumin", "Bilirubin(BIB)", "GT", "gamma"],
        "Muskler & Leder": ["Kreatinkinas", "S-CK", "Laktatdehydrogena (S-LD)"],
        "Mage & Tarm": ["Pankreasamylas"],
        "Njurar": [
            "Cystatin C", "Kalium", "Kreatinin", "Natrium",
            "Urat", "Urea (UEA)", "eGFR Cystatin C"
        ],
        "Sköldkörtel": ["T4 Fritt", "TSH"],
        "Vitaminer & Mineraler": [
            "Kobalamin", "D-vitamin", "Folat (folsyra)", "Fosfat",
            "Kalcium", "Magnesium"
        ]
    },

    // 204 – Hälsokontroll Man Plus
    204: {
        "Blodsocker": ["HbA1c", "Glukos", "Peptid"],
        "Blodstatus": [
            "Erc(W)-RDV", "Erytrocyter EPK", "Hematokrit", "Hemaglobinmassa",
            "Hemoglobin", "MCV", "Monocyter", "Trombocyter"
        ],
        "Hjärta & Kärl": [
            "Apo A1", "Apo B", "Apo B/Apo A1", "HDL-kolesterol",
            "Kolesterol (total)", "LDL", "Ldl/hdl", "Triglycerider", "Lipoprotein (a)"
        ],
        "Hormoner": ["Kortisol", "Fritt testosteron", "LH", "SHBG", "Testosteron"],
        "Inflammation": ["Högkänslig CRP"],
        "Järn": ["Ferritin", "Järn", "Transferrin"],
        "Lever": ["ALAT", "ALP", "ASAT", "Albumin", "Bilirubin", "GT", "Gamma"],
        "Muskler & Leder": ["Kreatinkinas", "S-CK", "Laktatdehydrogenas (S-LD)"],
        "Mage & Tarm": ["Pankreasamylas"],
        "Prostata": ["PSA fritt/tot", "PSA"],
        "Njurar": [
            "Cystatin C", "Kalium", "Klorid", "Kreatinin",
            "Natrium", "Urat", "Urea (UEA)", "eGFR Cystatin C"
        ],
        "Sköldkörtel": ["T3 Fritt", "T4 Fritt", "TSH"],
        "Vitaminer & Mineraler": [
            "Kobalamin", "D-vitamin", "Folat",
            "Fosfat", "Kalcium", "Magnesium", "Zink"
        ]
    },

    // 205 – Hälsokontroll Kvinna Plus
    205: {
        "Blodsocker": ["HbA1c", "Glukos", "Peptid"],
        "Blodstatus": [
            "Erc(W)-RDV", "Erytrocyter EPK", "Hematokrit", "Hemaglobinmassa",
            "Hemoglobin", "MCV", "Monocyter", "Trombocyter"
        ],
        "Hjärta & Kärl": [
            "Apo A1", "Apo B", "Apo B/Apo A1", "HDL-kolesterol",
            "Kolesterol (total)", "LDL", "Ldl/hdl", "Triglycerider", "Lipoprotein (a)"
        ],
        "Hormoner": [
            "Kortisol", "Östradiol", "Follitropin", "Lutropin (LH)",
            "Progesteron", "Testosteron", "Prolaktin"
        ],
        "Inflammation": ["Högkänslig CRP"],
        "Järn": ["Ferritin", "Järn", "Transferrin"],
        "Lever": ["ALAT", "ALP", "ASAT", "Albumin", "Bilirubin(BIB)", "GT", "gamma"],
        "Muskler & Leder": ["Kreatinkinas", "S-CK", "Laktatdehydrogena (S-LD)"],
        "Mage & Tarm": ["Pankreasamylas"],
        "Njurar": [
            "Cystatin C", "Kalium", "Klorid", "Kreatinin", "Natrium",
            "Urat", "Urea (UEA)", "eGFR Cystatin C"
        ],
        "Sköldkörtel": ["T3 Fritt", "T4 Fritt", "TSH"],
        "Vitaminer & Mineraler": [
            "Kobalamin", "D-vitamin", "Folat (folsyra)",
            "Fosfat", "Kalcium", "Magnesium", "Zink"
        ]
    }
};
