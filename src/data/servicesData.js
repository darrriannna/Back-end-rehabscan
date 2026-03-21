export const services = [
    {
        id: 1,
        type: "mr",
        title: "MR Ländrygg",
        group: "Ländrygg",
        subtitle: "Magnetkameraundersökning av ländryggen",
        description: "MR ländrygg används för att utreda smärta, nervpåverkan, diskbråck eller andra förändringar i nedre delen av ryggen.",
        includes: [
            "En personlig hälsorapport",
            "Analys av radiolog",
            "Bedömning av specialistläkare"
        ],
        price: 4200,
        image: "/assets/landrygg.avif",
        whenRecommended: `
MR ländrygg rekommenderas vid långvarig eller nytillkommen ländryggssmärta, misstänkt nervrotspåverkan eller symtom som domningar, stickningar eller utstrålande smärta i benen. Undersökningen är också motiverad vid misstanke om diskbråck, ryggskada eller inflammatoriska förändringar.
`,
        detectable: `
Undersökningen kan påvisa diskbråck, nervkompression, spinal stenos, artros i facettleder, inflammation, frakturer, tumörer och andra strukturella förändringar i nedre delen av ryggraden.
`

    },
    {
        id: 2,
        type: "mr",
        title: "MR Höger Axel",
        group: "Axel",
        subtitle: "Magnetkameraundersökning av höger axel",
        description: "Ger detaljerade bilder för att upptäcka skador på senor, muskler och leder i höger axel.",
        includes: [
            "Personlig hälsorapport",
            "Radiologisk analys",
            "Specialistläkarens bedömning"
        ],
        price: 4100,
        image: "/assets/axel.avif",
        whenRecommended: `
MR höger axel rekommenderas vid smärta, rörelseinskränkning eller misstänkta mjukdelsskador, särskilt om ultraljud inte gett tydliga svar eller besvären kvarstår. Vanligt vid idrottsskador eller efter falltrauma.
`,
        detectable: `
Undersökningen kan visualisera rotatorcuffskador, inflammationer, instabilitet, senaavslitningar, broskskador, labrumskador och degenerativa förändringar i axelleden.
`


    },
    {
        id: 3,
        type: "mr",
        title: "MR Vänster Axel",
        group: "Axel",
        subtitle: "Magnetkameraundersökning av vänster axel",
        description: "Används för att utreda smärta, rörelseinskränkning och misstänkta skador i vänster axel.",
        includes: [
            "Hälsorapport",
            "Radiologgranskning",
            "Bedömning av specialist"
        ],
        price: 4100,
        image: "/assets/axel.avif",
        whenRecommended: `
MR vänster axel rekommenderas vid kvarstående axelsmärta, misstänkta sen- eller muskelskador, svårigheter att lyfta armen eller misstanke om ledinstabilitet. Även lämpligt vid långvariga belastningsrelaterade besvär.
`,
        detectable: `
MR kan upptäcka rotatorcuffrupturer, tendiniter, bursit, labrumskador, broskskador, instabilitet, impingement samt degenerativa förändringar i axelleden.
`,
    },
    {
        id: 4,
        type: "mr",
        title: "MR Bäcken/Höftleder",
        group: "Bäcken/Höftleder",
        subtitle: "Magnetkameraundersökning av bäcken och höfter",
        description: "MR bäcken och höfter används för att visualisera leder, mjukdelar och skelett i bäckenområdet.",
        includes: [
            "Hälsorapport",
            "Radiologisk analys",
            "Specialistutlåtande"
        ],
        price: 4100,
        image: "/assets/backen.avif",
        whenRecommended: `
MR bäcken och höftleder rekommenderas vid höftsmärta, misstänkt broskskada, artros, överbelastningsskador eller symtom som strålar mot ljumsken. Också indicerat vid misstänkt inflammation eller höftledsinstabilitet.
`,
        detectable: `
Undersökningen kan upptäcka broskskador, labrumrupturer, artros, stressfrakturer, senfästeinflammationer, mjukdelsskador, bursit, cystor, tumörer eller inflammatoriska förändringar i höftleder och bäcken.
`

    },

    {
        id: 5,
        type: "mr",
        title: "MR Vänster Knä",
        group: "Knä",
        subtitle: "Magnetkameraundersökning av vänster knä",
        description: "För att upptäcka meniskskador, ligamentskador och broskförändringar i knäleden.",
        includes: [
            "Hälsorapport",
            "Radiologisk granskning",
            "Specialistläkarens bedömning"
        ],
        price: 4100,
        image: "/assets/kna-vanster.avif",
        whenRecommended: `
MR vänster knä rekommenderas vid smärta, svullnad, instabilitet eller ”låsningar” i knät. Lämpligt efter idrottsskador, fall, vridningar eller vid misstanke om menisk- eller korsbandsskador.
`,
        detectable: `
Undersökningen påvisar meniskskador, korsbandsrupturer, broskskador, ligamentskador, ödem, inflammation, cystor och tidiga tecken på artros.
`,


    },

    {
        id: 6,
        type: "mr",
        title: "MR Helkropp",
        group: "Helkropp",
        subtitle: "Magnetkameraundersökning av hela kroppen",
        description: "En omfattande helkroppsundersökning för tidig upptäckt av sjukdomar, inflammationer och organförändringar.",
        includes: [
            "Fullständig hälsorapport",
            "Radiologens analys",
            "Specialistbedömning"
        ],
        price: 19200,
        image: "/assets/helkropp.avif",
        whenRecommended: `
MR helkropp rekommenderas vid önskemål om en omfattande hälsogenomgång, tidig upptäckt av sjukdomar eller för personer med ärftlig risk för cancer eller systemiska sjukdomar. Även lämplig vid diffusa symtom utan klar diagnos.
`,
        detectable: `
Undersökningen kan identifiera tumörer, cystor, inflammationsprocesser, skador, skelettförändringar, organavvikelser, degenerativa förändringar samt tidiga sjukdomstecken i hela kroppen.
`,

    },

    {
        id: 7,
        type: "mr",
        title: "MR Bröstrygg",
        group: "Bröstrygg",
        subtitle: "Magnetkameraundersökning av bröstryggen",
        description: "MR bröstrygg används vid utredning av ryggsmärtor, diskförändringar och nervpåverkan i bröstregionen.",
        includes: [
            "Hälsorapport",
            "Bildgranskning av radiolog",
            "Expertutlåtande"
        ],
        price: 4100,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR bröstrygg rekommenderas vid återkommande smärta i bröstryggen, misstänkt diskbråck, nervpåverkan, fraktur eller vid utredning av inflammatoriska förändringar och tumörsjukdomar.
`,
        detectable: `
MR bröstrygg kan påvisa diskbråck, spinal stenos, frakturer, artros, inflammation, tumörer, metastaser och andra strukturella förändringar i bröstryggen.
`,

    },

    {
        id: 8,
        type: "mr",
        title: "MR Höger Fot",
        group: "Fot",
        subtitle: "Magnetkameraundersökning av höger fot",
        description: "MR fot används för att kartlägga mjukdelsskador, ligamentproblem och stressfrakturer.",
        includes: [
            "Hälsorapport",
            "Radiologens analys",
            "Specialistläkarens bedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger fot rekommenderas vid långvarig fotsmärta, misstänkta stressfrakturer, ligamentsskador eller sentillstånd där röntgen eller ultraljud inte räcker. Även relevant vid idrottsskador och överbelastning.
`,
        detectable: `
Undersökningen visar stressfrakturer, ligamentskador, senrupturer, inflammationer, broskskador, cystor, ödem samt mjukdelsförändringar i foten.
`,

    },

    {
        id: 9,
        type: "mr",
        title: "MR Vänster Fot",
        group: "Fot",
        subtitle: "Magnetkameraundersökning av vänster fot",
        description: "Högupplösta bilder av fotens leder, senor och ligament för att upptäcka skador och överbelastning.",
        includes: [
            "Hälsorapport",
            "Radiologisk granskning",
            "Specialistutlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster fot rekommenderas vid ihållande smärta, belastningsbesvär, misstänkta mjukdelsskador eller vid utredning efter stukningar som inte läker som förväntat.
`,
        detectable: `
MR kan upptäcka ligamentrupturer, senskador, broskskador, stressfrakturer, kapselskador, inflammation, svullnad och andra strukturella förändringar i foten.
`,

    },

    {
        id: 10,
        type: "mr",
        title: "MR Höger Fotled",
        group: "Fotled",
        subtitle: "Magnetkameraundersökning av höger fotled",
        description: "Används vid utredning av ledbandsskador, broskförändringar och inflammation.",
        includes: [
            "Hälsorapport",
            "Radiologens analys",
            "Specialistbedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger fotled rekommenderas vid återkommande stukningar, instabilitet, svullnad, smärta eller misstänkta brosk- och ledbandsskador. Även lämplig vid idrottsskador och oklara smärttillstånd.
`,
        detectable: `
Undersökningen kan visa ledbandsskador, broskskador, inflammation, osteokondrala lesioner, synovit, cystor och mjukdelsskador i fotleden.
`,

    },

    {
        id: 11,
        type: "mr",
        title: "MR Vänster Fotled",
        group: "Fotled",
        subtitle: "Magnetkameraundersökning av vänster fotled",
        description: "Detaljerad avbildning av fotleden för att diagnostisera skador eller inflammationer.",
        includes: [
            "Hälsorapport",
            "Radiologisk granskning",
            "Specialistutlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster fotled rekommenderas vid smärta, stelhet, instabilitet eller misstänkta överbelastningsskador, särskilt om symtomen inte förbättras trots behandling.
`,
        detectable: `
MR upptäcker ligamentrupturer, broskskador, senproblem, inflammation, cystor, ödem och andra förändringar i fotleden.
`,

    },

    {
        id: 12,
        type: "mr",
        title: "MR Höger Hand",
        group: "Hand",
        subtitle: "Magnetkameraundersökning av höger hand",
        description: "MR hand används för att visualisera senor, leder och mjukdelar, ofta vid smärta eller misstänkt skada.",
        includes: [
            "Hälsorapport",
            "Bildanalys av radiolog",
            "Specialistbedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger hand rekommenderas vid misstänkta senskador, inflammationer, smärta efter trauma eller vid långvariga överbelastningsbesvär. Även lämplig vid karpala problem eller oklara neuropatiska symtom.
`,
        detectable: `
Undersökningen visar senrupturer, senskideinflammation, mjukdelsskador, ledförändringar, broskskador, cystor, svullnad, nervinklämning samt tidiga tecken på artros.
`,

    },

    {
        id: 13,
        type: "mr",
        title: "MR Vänster Hand",
        group: "Hand",
        subtitle: "Magnetkameraundersökning av vänster hand",
        description: "Högdetaljerad undersökning av handens strukturer för att upptäcka överbelastning eller skador.",
        includes: [
            "Hälsorapport",
            "Radiologgranskning",
            "Specialistutlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster hand rekommenderas vid smärta, stelhet, misstänkta sen- eller ledförändringar, samt efter trauma eller överbelastning. Passar även när ultraljud inte gett tydlig diagnos.
`,
        detectable: `
MR kan upptäcka senskador, tendinit, artrit, broskskador, ganglioncystor, ligamentrupturer, svullnad, inflammation och mjukdelsskador i handen.
`,

    },

    {
        id: 14,
        type: "mr",
        title: "MR Hälsena",
        group: "Hälsena",
        subtitle: "Magnetkameraundersökning av hälsenan",
        description: "Används vid utredning av hälseneinflammation, rupturer eller degenerativa förändringar.",
        includes: [
            "Hälsorapport",
            "Radiologens analys",
            "Bedömning av specialistläkare"
        ],
        price: 4100,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR hälsena rekommenderas vid misstänkt hälseneruptur, långvarig hälsenesmärta, svullnad, överbelastning eller när ultraljud inte kan ge fullständig information.
`,
        detectable: `
Undersökningen visar partiella och kompletta rupturer, inflammation (tendinopati), degenerativa förändringar, bursit, ödem och omgivande mjukdelsskador.
`,

    },

    {
        id: 15,
        type: "mr",
        title: "MR Höger Armbåge",
        group: "Armbåge",
        subtitle: "Magnetkameraundersökning av höger armbåge",
        description: "MR armbåge används för att diagnostisera senskador, inflammation, broskskador och andra armproblem.",
        includes: [
            "Hälsorapport",
            "Radiologisk bedömning",
            "Specialistens utlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger armbåge rekommenderas vid oklara armbågssmärtor, misstänkt tennisarmbåge, golfarmbåge, broskskador, ledbandsproblem eller smärta efter trauma.
`,
        detectable: `
MR kan påvisa senskador, broskskador, inflammationer, artros, ledbandsskador, nervinklämningar, vätskansamling och mjukdelsförändringar i armbågen.
`,

    },

    {
        id: 16,
        type: "mr",
        title: "MR Vänster Armbåge",
        group: "Armbåge",
        subtitle: "Magnetkameraundersökning av vänster armbåge",
        description: "Högupplösta bilder av armbågens leder och mjukdelar för att upptäcka skador eller inflammation.",
        includes: [
            "Hälsorapport",
            "Bildgranskning",
            "Specialistens bedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster armbåge rekommenderas vid smärta, stelhet, misstänkt senfästesinflammation eller strukturella problem i armbågen. Även vid idrottsskador och långvariga belastningsbesvär.
`,
        detectable: `
Undersökningen avslöjar senskador, ligamentrupturer, broskförändringar, ledvätska, inflammation, cystor, nervpåverkan och mjukdelsskador.
`,

    },

    {
        id: 17,
        type: "mr",
        title: "MR Höger Underben",
        group: "Underben",
        subtitle: "Magnetkameraundersökning av höger underben",
        description: "MR underben används för att diagnostisera muskelbristningar, stressfrakturer och mjukdelsskador.",
        includes: [
            "Hälsorapport",
            "Radiologisk analys",
            "Specialistgranskning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger underben rekommenderas vid misstänkta muskelbristningar, stressfrakturer, svullnad, smärta vid aktivitet eller oklara besvär i underbenet.
`,
        detectable: `
MR visar muskelfiberbristningar, senaavslitningar, stressfrakturer, inflammation, ödem, kärlförändringar och andra mjukdels- och skelettförändringar.
`,

    },

    {
        id: 18,
        type: "mr",
        title: "MR Vänster Underben",
        group: "Underben",
        subtitle: "Magnetkameraundersökning av vänster underben",
        description: "Visualiserar muskler, ben och mjukdelar för att upptäcka skador, inflammation eller överbelastning.",
        includes: [
            "Hälsorapport",
            "Radiologens bildanalys",
            "Specialistens utlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster underben rekommenderas vid återkommande smärta, misstänkta stressfrakturer, överbelastningsskador eller diffusa underbensbesvär som inte kunnat diagnosticeras med röntgen.
`,
        detectable: `
MR upptäcker muskelbristningar, stressfrakturer, senskador, inflammation, ödem, skelettförändringar och andra mjukdelsavvikelser.
`,

    },

    {
        id: 19,
        type: "mr",
        title: "MR Sacrum/Sacroiliacaleder",
        group: "Sacrum/Sacroiliacaleder",
        subtitle: "Magnetkameraundersökning av sakrum och SI-lederna",
        description: "Används ofta vid ryggsmärta, SI-ledsdysfunktion och inflammatoriska sjukdomar.",
        includes: [
            "Hälsorapport",
            "Radiologisk granskning",
            "Specialistbedömning"
        ],
        price: 4100,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR sacrum och SI-leder rekommenderas vid ryggsmärta som strålar mot skinka eller höft, misstänkt SI-ledsdysfunktion, inflammatoriska sjukdomar eller långvariga bäckensmärtor.
`,
        detectable: `
Undersökningen visar inflammation (sacroiliit), artros, stressfrakturer, ödem, skelettförändringar, tumörer samt avvikelser i SI-lederna och sakrum.
`,

    },

    {
        id: 22,
        type: "mr",
        title: "MR Nacke/Halsrygg",
        group: "Nacke/halsrygg",
        subtitle: "Magnetkameraundersökning av halsryggen",
        description: "MR halsrygg används för att upptäcka nervpåverkan, diskbråck och andra förändringar i nacken.",
        includes: [
            "Hälsorapport",
            "Radiologens analys",
            "Specialistens bedömning"
        ],
        price: 4100,
        image: "/assets/nacke.avif",
        whenRecommended: `
MR nacke/halsrygg rekommenderas vid nacksmärta, utstrålande smärta i armarna, domningar, svaghet, misstänkt diskbråck eller nervpåverkan. Även lämpligt vid whiplash eller kronisk stelhet.
`,
        detectable: `
Undersökningen påvisar diskbråck, nervkompression, spinal stenos, artros, inflammation, frakturer, tumörer och andra förändringar i halsryggen.
`,

    },

    {
        id: 23,
        type: "mr",
        title: "MR Helrygg",
        group: "Helrygg",
        subtitle: "Magnetkameraundersökning av hela ryggraden",
        description: "En omfattande undersökning av hals-, bröst- och ländrygg för att hitta diskbråck, nervpåverkan och andra förändringar.",
        includes: [
            "Fullständig hälsorapport",
            "Granskning av alla tre ryggsegment",
            "Radiologisk analys",
            "Specialistläkarens utlåtande"
        ],
        price: 11500,
        image: "/assets/helrygg.avif",
        whenRecommended: `
MR helrygg rekommenderas när man behöver en komplett bild av hela ryggraden, exempelvis vid långvarig värk, misstänkta nervpåverkningar, inflammatoriska tillstånd eller utbredning av sjukdomar.
`,
        detectable: `
Undersökningen kan identifiera diskbråck, spinal stenos, inflammatoriska förändringar, tumörer, nervrotspåverkan, frakturer, degeneration och strukturella avvikelser i hals-, bröst- och ländrygg.
`,

    },

    {
        id: 26,
        type: "mr",
        title: "MR Höger Knä",
        group: "Knä",
        subtitle: "Magnetkameraundersökning av höger knä",
        description: "MR knä används för att upptäcka meniskskador, korsbandsskador och broskförändringar.",
        includes: [
            "Hälsorapport",
            "Radiologens granskning",
            "Specialistutlåtande"
        ],
        price: 4100,
        image: "/assets/kna-hoger.avif",
        whenRecommended: `
MR höger knä rekommenderas vid smärta, svullnad, instabilitet eller misstänkta menisk- eller korsbandsskador. Även vid belastningsrelaterade besvär och efter idrottstrauma.
`,
        detectable: `
Undersökningen påvisar meniskskador, korsbandsrupturer, broskskador, inflammation, ödem, cystor, ligamentskador och tidiga artrosförändringar.
`,

    },

    {
        id: 29,
        type: "mr",
        title: "MR Höger Överarm",
        group: "Överarm",
        subtitle: "Magnetkameraundersökning av höger överarm",
        description: "Undersökning av muskler och mjukdelar i överarmen, vanligt vid misstänkt muskelbristning eller överbelastning.",
        includes: [
            "Hälsorapport",
            "Radiologisk analys",
            "Specialistbedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger överarm rekommenderas vid misstänkt muskelbristning, överbelastning, smärta vid lyft eller efter trauma. Passar vid idrottsskador och långvariga muskelsmärtor.
`,
        detectable: `
MR kan påvisa muskelrupturer, senvävnadsskador, inflammation, blödningar, mjukdelstumörer, ödem och andra strukturella förändringar i överarmen.
`,

    },

    {
        id: 30,
        type: "mr",
        title: "MR Vänster Överarm",
        group: "Överarm",
        subtitle: "Magnetkameraundersökning av vänster överarm",
        description: "Ger detaljerade bilder av mjukdelar och muskler i vänster överarm vid skador eller smärta.",
        includes: [
            "Hälsorapport",
            "Bildgranskning",
            "Specialistläkarens bedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster överarm rekommenderas vid muskel- eller mjukdelsskador, kvarstående smärta, misstänkta bristningar eller oklara besvär efter fysisk belastning.
`,
        detectable: `
Undersökningen avslöjar muskelbristningar, senskador, ödem, inflammation, mjukdelstumörer och andra patologiska förändringar i överarmen.
`,

    },

    {
        id: 31,
        type: "mr",
        title: "MR Höger Underarm",
        group: "Underarm",
        subtitle: "Magnetkameraundersökning av höger underarm",
        description: "För att upptäcka muskel-, senvävnads- eller ledskador i underarmen.",
        includes: [
            "Hälsorapport",
            "Radiologisk analys",
            "Specialistutlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger underarm rekommenderas vid misstänkta muskel- eller senvävnadsskador, smärta vid rotation eller grepp, nervpåverkan eller efter trauma.
`,
        detectable: `
MR visar muskel- och senskador, inflammation, nervinklämningar, ödem, cystor, frakturer och andra mjukdelsförändringar i underarmen.
`,

    },

    {
        id: 32,
        type: "mr",
        title: "MR Vänster Underarm",
        group: "Underarm",
        subtitle: "Magnetkameraundersökning av vänster underarm",
        description: "En MR-undersökning som analyserar muskler och mjukdelar i underarmen för att upptäcka skador.",
        includes: [
            "Hälsorapport",
            "Radiologisk analys",
            "Specialistbedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster underarm rekommenderas vid smärta, misstänkta muskel- eller senvävnadsskador, svaghet, överbelastning eller misstänkt stressfraktur.
`,
        detectable: `
Undersökningen påvisar muskelrupturer, senskador, inflammation, stressfrakturer, ödem, mjukdelstumörer och andra strukturella förändringar.
`,

    },

    {
        id: 33,
        type: "mr",
        title: "MR Höger Handled",
        group: "Handled",
        subtitle: "Magnetkameraundersökning av höger handled",
        description: "Används för att diagnosticera ligamentskador, broskförändringar och inflammationer i handleden.",
        includes: [
            "Hälsorapport",
            "Radiologens analys",
            "Specialistens utlåtande"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR höger handled rekommenderas vid smärta, instabilitet, misstänkta ligamentskador, karpaltunnelsymtom eller efter fallskador som ger kvarstående besvär.
`,
        detectable: `
MR kan upptäcka broskskador, ligamentrupturer, senskador, inflammation, ganglioncystor, nervinklämning och strukturella förändringar i handleden.
`,

    },

    {
        id: 34,
        type: "mr",
        title: "MR Vänster Handled",
        group: "Handled",
        subtitle: "Magnetkameraundersökning av vänster handled",
        description: "MR handled ger detaljerade bilder av mjukdelar, leder och ligament i handleden.",
        includes: [
            "Hälsorapport",
            "Radiologisk granskning",
            "Specialistbedömning"
        ],
        price: 3900,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR vänster handled rekommenderas vid långvarig smärta, misstänkta mjukdelsskador, överbelastning eller instabilitet i handleden.
`,
        detectable: `
Undersökningen avslöjar ligamentsskador, senskador, broskförändringar, inflammation, cystor, svullnad och andra strukturella avvikelser i handleden.
`,

    },

    {
        id: 35,
        type: "mr",
        title: "MR Buk",
        group: "Buk",
        subtitle: "Magnetkameraundersökning av buken",
        description: "MR buk ger detaljerade bilder av bukens organ som lever, njurar, mjälte och pankreas.",
        includes: [
            "Hälsorapport",
            "Radiologisk analys",
            "Bedömning av bukens organområden"
        ],
        price: 7200,
        image: "/assets/placeholder-service.png",

        whenRecommended: `
        MR buk rekommenderas vid oklara buksmärtor, misstänkt leversjukdom, cystor, tumörer, inflammatoriska tillstånd eller när man behöver detaljerad organvisualisering utan strålning.
        `,
        detectable: `
        Undersökningen ger tydliga bilder av lever, njurar, pankreas, mjälte, gallvägar, kärl, lymfkörtlar, cystor, tumörer, inflammationer och andra avvikelser i buken.
        `,

    },

    {
        id: 36,
        type: "mr",
        title: "MR Prostata",
        group: "Prostata",
        subtitle: "Magnetkameraundersökning av prostata",
        description: "MR prostata används vid utredning av prostatacancer, inflammation och strukturella förändringar.",
        includes: [
            "Hälsorapport",
            "Radiologens granskning",
            "Specialistbedömning av prostata"
        ],
        price: 7400,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
MR prostata rekommenderas vid utredning av prostatacancer, förhöjt PSA, misstänkta strukturella avvikelser eller inflammatoriska tillstånd. Används ofta före biopsi.
`,
        detectable: `
MR prostata upptäcker tumörer, inflammation, benign prostataförstoring (BPH), strukturella förändringar, kapselgenombrott, spridning och andra patologiska fynd.
`,

    },
    {
        id: 37,
        type: "mr",
        title: "MR Hjärna",
        group: "Hjärna",
        subtitle: "Magnetkameraundersökning av hjärnan",
        description: "MR hjärna används för att utreda hjärnans strukturer och identifiera skador, tumörer, inflammationer eller vaskulära förändringar.",
        includes: [
            "Hälsorapport",
            "Radiologens granskning",
            "Specialistbedömning av hjärnstrukturer"
        ],
        price: 6500,
        image: "/assets/placeholder-service.png",
        whenRecommended: `
    MR hjärna rekommenderas vid huvudvärk, neurologiska symtom, misstänkta tumörer, stroke, inflammationer, degenerativa sjukdomar eller vid uppföljning efter skador.
    `,
        detectable: `
    MR hjärna kan upptäcka tumörer, blödningar, stroke, inflammationer, demyeliniserande sjukdomar, degenerativa förändringar och andra strukturella avvikelser.
    `,
    },


    {
        id: 401,
        type: "mr",
        title: "MR Helkropp Plus",
        group: "Helkropp",
        subtitle: "MR + Hälsokontroll Stor",
        description: "Strålningsfri MR-helkroppsundersökning kombinerat med 52 blodmarkörer.",
        includes: [
            "MR Helkropp",
            "50+ blodanalyser",
            "Medicinsk specialistbedömning"
        ],
        price: 20900,
        image: "/assets/helkropp.avif",
        whenRecommended: `
MR helkropp rekommenderas vid önskemål om en omfattande hälsogenomgång, tidig upptäckt av sjukdomar eller för personer med ärftlig risk för cancer eller systemiska sjukdomar. Även lämplig vid diffusa symtom utan klar diagnos.
`,
        detectable: `
Undersökningen kan identifiera tumörer, cystor, inflammationsprocesser, skador, skelettförändringar, organavvikelser, degenerativa förändringar samt tidiga sjukdomstecken i hela kroppen.
`,
    },
    {
        id: 402,
        type: "mr",
        title: "MR Helkropp Pro",
        group: "Helkropp",
        subtitle: "MR Helkropp + Hälsokontroll Kvinna/Man +",
        description: "Vår mest omfattande helkroppskontroll med MR och 64 blodmarkörer",
        includes: [
            "MR Helkropp",
            "64 blodanalyser",
            "Medicinsk specialistbedömning"
        ],
        price: 22300,

        image: "/assets/helkropp.avif",
        whenRecommended: `
MR helkropp rekommenderas vid önskemål om en omfattande hälsogenomgång, tidig upptäckt av sjukdomar eller för personer med ärftlig risk för cancer eller systemiska sjukdomar. Även lämplig vid diffusa symtom utan klar diagnos.
`,
        detectable: `
Undersökningen kan identifiera tumörer, cystor, inflammationsprocesser, skador, skelettförändringar, organavvikelser, degenerativa förändringar samt tidiga sjukdomstecken i hela kroppen.
`,
    }


];
