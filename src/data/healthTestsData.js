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
        discount: 10,
        oldPrice: "2 295",
        newPrice: "2 065",
        bg: "#eef3f7",
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
        discount: 10,
        oldPrice: "2 195",
        newPrice: "1 975",
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
        discount: 10,
        oldPrice: "2 195",
        newPrice: "1 975",
        bg: "#eef5ff",
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
        discount: 10,
        oldPrice: "3 895",
        newPrice: "3 500",
        bg: "#eef5ff",
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
        discount: 10,
        oldPrice: "3 895",
        newPrice: "3 500",
        bg: "#f7eefe",
        image: "/assets/halsotest.png",
        icon: "♀"
    },
    {
        id: 206,
        type: "test",
        title: "Testosteron +",
        subtitle: "+ Hormoner och näringstatus som påverkar Testosteron ",
        markers: 10,
        bullets: [
            "Fördjupad analys av testosteron och styrande hormoner.",
            "Identifierar hormonell obalans kopplad till energi, libido och välmående.",
            "Inkluderar viktiga näringsämnen som påverkar testosteronnivåer."
        ],
        oldPrice: "1 950",
        newPrice: "1 769",
        bg: "#eef5ff",
        image: "/assets/testosteron.png",
        icon: "♂"
    },
    {
        id: 207,
        type: "test",
        title: "Hormonbalans – Kvinna",
        subtitle: "Analys av kvinnliga hormoner och hormonell balans",
        markers: 11,
        bullets: [
            "Fördjupad analys av kvinnliga hormoner kopplade till menscykel och fertilitet.",
            "Identifierar hormonell obalans vid PMS, oregelbunden mens och klimakteriebesvär.",
            "Inkluderar viktiga näringsämnen som påverkar hormonbalans och välmående."
        ],
        discount: 10,
        oldPrice: "1 645",
        newPrice: "1 479",
        bg: "#fdf0f7",
        image: "/assets/estrogen.png",
        icon: "♀"
    },
    {
        id: 208,
        type: "test",
        title: "Järnstatus & Trötthet",
        subtitle: "Analys av järnstatus och vanliga orsaker till trötthet",
        markers: 10,
        bullets: [
            "Identifierar järnbrist och tidiga tecken på anemi.",
            "Lämpligt vid trötthet, yrsel och nedsatt ork.",
            "Inkluderar kompletterande markörer som påverkar energinivåer."
        ],
        discount: 10,
        oldPrice: "1 295",
        newPrice: "1 165",
        bg: "#f7eefe",
        image: "/assets/jarn.png",
        icon: "🩸"
    },

    {
        id: 209,
        type: "test",
        title: "Stress +",
        subtitle: "Fördjupad analys av stress, mental balans och återhämtning",
        markers: 12,
        bullets: [
            "Analyserar biologiska markörer kopplade till stress och utmattning.",
            "Identifierar näringsbrister som kan påverka mental balans.",
            "Ger en fördjupad förståelse för kroppens stress- och återhämtningsförmåga."
        ],
        discount: 10,
        oldPrice: "1 595",
        newPrice: "1 435",
        bg: "#eef3f7",
        image: "/assets/stress.png",
        icon: "🧠"
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
    },
    206: {
        "Hormoner": [
            "Testosteron",
            "Fritt testosteron",
            "SHBG",
            "Lutropin (LH)",
            "Follitropin (FSH)",
            "Prolaktin",
            "Kortisol"
        ],
        "Vitaminer & Mineraler": [
            "D-vitamin",
            "Zink",
            "Magnesium"
        ]
    },
    207: {
        "Hormoner": [
            "Östradiol",
            "Progesteron",
            "Lutropin (LH)",
            "Follitropin (FSH)",
            "Prolaktin",
            "Testosteron",
            "SHBG"
        ],
        "Vitaminer & Mineraler": [
            "D-vitamin",
            "Magnesium",
            "Kobalamin",
            "Folat (folsyra)"
        ]
    },
    208: {
        "Järn": [
            "Ferritin",
            "Järn",
            "Transferrin",
            "Transferrinmättnad"
        ],
        "Blodstatus": [
            "Hemoglobin",
            "MCV"
        ],
        "Inflammation": [
            "Högkänslig CRP"
        ],
        "Sköldkörtel": [
            "TSH"
        ],
        "Vitaminer & Mineraler": [
            "Kobalamin",
            "Folat (folsyra)"
        ]
    },
    209: {
        "Stress & Hormoner": [
            "Kortisol"
        ],
        "Inflammation": [
            "Högkänslig CRP"
        ],
        "Sköldkörtel": [
            "TSH",
            "T4 Fritt"
        ],
        "Blodsocker": [
            "HbA1c",
            "Glukos"
        ],
        "Vitaminer & Mineraler": [
            "D-vitamin",
            "Kobalamin",
            "Folat (folsyra)",
            "Magnesium"
        ],
        "Järn": [
            "Ferritin"
        ]
    }




};
