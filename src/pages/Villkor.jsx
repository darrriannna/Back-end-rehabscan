import React from "react";
import "../styles/main.css";
import "../styles/villkor.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Restrictions = () => {
    return (
        <div className="body">
            <Navbar />
            <div className="integrity-policy">
                <div className="container-policy">
                    <h3 className="title">Förberedelser</h3>
                    <p className="intro">
                        Du kan inte undersökas i magnetkamera om du har metallsplitter i någon del av kroppen,
                        pacemaker, insulinpump eller annan elektronisk utrustning inopererad. Däremot går det att
                        genomföra undersökningen om du har icke-magnetisk metall, såsom höft- eller knäledsprotes
                        eller tandfyllning.
                    </p>

                    <section>
                        <h5>Vårt Medicinska Team & Remisshantering</h5>
                        <p>
                            Rehabscan Sverige samarbetar med legitimerade läkare och erfarna medicinska konsulter
                            som arbetar för att ge dig snabba, säkra och professionella resultat. All medicinsk
                            bedömning, remisshantering och patientkommunikation utförs av människor – aldrig av AI
                            eller automatiserade system.
                        </p>
                        <p>
                            Vid undersökning med MR eller ultraljud skriver och skickar våra läkare alltid remiss
                            och kontaktar dig direkt. Eftersom denna handläggning alltid kräver professionell
                            medicinsk arbetsinsats tillkommer en remissavgift.
                        </p>
                        <p>
                            Om du väljer att avboka efter att läkaren redan har skickat remissen, återbetalas inte
                            remissavgiften. Vi värnar om våra medarbetare och deras tid – därför kan vi inte låta
                            dem arbeta kostnadsfritt när ett ärende redan påbörjats.
                        </p>
                        <p>
                            Vid avbokning av personliga skäl efter att din undersökningstid redan är bokad (gäller
                            ej ombokning) kan vi återbetala kostnaden minus bankavgifter och remisskostnader.
                        </p>
                    </section>

                    <section>
                        <h5>Uppföljning</h5>
                        <p>
                            Efter att du har genomgått din undersökning granskas dina röntgenbilder av en
                            röntgenspecialist. Därefter får du ditt röntgensvar via post. Uteblivet besök eller
                            avbokning senare än 24 timmar innan inbokad tid debiteras fullt och återbetalas ej.
                        </p>
                    </section>

                    <section>
                        <h5>Ångerrätt och transaktionsavgift</h5>
                        <p>
                            Vid utnyttjande av ångerrätt återbetalas hela beloppet med avdrag för bankens
                            transaktionsavgift. En avgift på 4% av det totala beloppet dras för att täcka kostnader
                            för hantering av betalningen.
                        </p>
                    </section>

                    <section>
                        <h5>Innebär det någon risk att undersökas med magnetkamera (MR)?</h5>
                        <p>
                            Nej, MR-undersökning är helt ofarlig och ger ingen strålning till skillnad från
                            datortomografi (DT) och traditionell röntgen. Tekniken använder magnetfält och radiovågor,
                            vilket gör det möjligt att undersöka kroppen utan risk för strålskador. Det går därför bra
                            att genomgå MR flera gånger utan risk.
                        </p>
                    </section>

                    <section>
                        <h5>Hur bokas min undersökning in efter beställning?</h5>
                        <p>
                            Efter att du har gjort din beställning kontaktar vi kliniken, som sedan bokar in din tid
                            vid första tillgängliga undersökning. Vid frågor är du välkommen att kontakta oss på
                            info@rehabscan.se eller ringa oss på 010-201 22 31. Uteblivet besök eller avbokning senare
                            än 24 timmar innan inbokad tid debiteras fullt och återbetalas ej.
                        </p>
                    </section>

                    <section>
                        <h5>Vem har tillgång till mina resultat?</h5>
                        <p>
                            Vi följer samma lagar och regler för sekretess som vårdcentraler och sjukhus. Rehabscan
                            Sverige lyder under patientdatalagen och hälso- och sjukvårdslagen, samt står under tillsyn
                            av Inspektionen för vård och omsorg (IVO). All data och alla undersökningsresultat hanteras
                            enligt dessa regelverk.
                        </p>
                    </section>
                    <section>

                        <h5>Uteblivet besök</h5>
                        <p>
                            Om du bokat en tid för provtagning eller undersökning hos någon av våra anslutna vårdgivare och inte
                            infinner dig, utan att ha avbokat enligt vårdgivarens gällande regler, äger Rehabscan Sverige rätt att
                            debitera full avgift för det uteblivna besöket.
                        </p>
                        <p>
                            Observera att varje vårdgivare eller provtagningsenhet tillämpar egna avbokningsregler. Du ansvarar
                            själv för att ta del av dessa vid bokningstillfället.
                        </p>
                    </section>

                    <section>
                        <h5> Betalning och avgifter</h5>
                        <p><strong>Att låna kostar pengar!</strong><br />
                            Om du inte betalar tillbaka en skuld i tid riskerar du en betalningsanmärkning. Det kan bland annat
                            göra det svårare att hyra bostad, teckna abonnemang eller få nya lån. För stöd kan du vända dig till
                            budget- och skuldrådgivningen i din kommun. Kontaktuppgifter finns på konsumentverket.se.
                        </p>
                        <p>
                            För presentkort, hälsotester och hälsokontroller med provtagning hos anslutna närlaboratorier sker
                            betalning online via Rehabscan Sveriges betaltjänst <strong>Klarna Checkout</strong>. För varje
                            beställning och provtagningstillfälle tillkommer en administrativ provtagningsavgift, oavsett antal
                            beställda hälsomarkörer.
                        </p>
                        <p>
                            Via Klarna Bank AB (publ), Sveavägen 46, 111 34 Stockholm, erbjuds följande betalningsalternativ:
                        </p>
                        <ul>
                            <li><strong>Banköverföring</strong> – betalning sker genom direktdebitering av ditt konto vid beställning.</li>
                            <li><strong>Betala Direkt (autogiro)</strong> – automatiskt uttag från ditt bankkonto inom 2 bankdagar.</li>
                            <li><strong>Betala inom 30 dagar</strong> – villkor finns tillgängliga via Klarna.</li>
                            <li><strong>Konto</strong> – dela upp betalningen via Klarnas kontokredit enligt gällande villkor.</li>
                        </ul>
                        <p>
                            De betalningsalternativ som för närvarande erbjuds via Klarna Checkout är direktbanksbetalning,
                            kortbetalning, Swish, delbetalning och faktura. Där faktura är möjligt ligger detta val förinställt.
                            Vid fakturabetalning gäller Klarnas vid var tid gällande fakturavillkor. För närvarande erbjuds 30 dagars
                            kredit. Vid utebliven betalning tillkommer en påminnelseavgift:
                        </p>
                        <ul>
                            <li>29 kr för belopp under 60 kr</li>
                            <li>60 kr för belopp på 60 kr eller mer</li>
                        </ul>
                        <p>
                            Dessutom tillkommer dröjsmålsränta om 24 % plus aktuell referensränta fastställd av Riksbanken.
                        </p>
                        <p>
                            Klarna Checkout är kostnadsfri att använda, men det kan tillkomma avgifter beroende på valt
                            betalningsalternativ. För fullständig information hänvisas till respektive betalningsvillkor.
                            Klarna förbehåller sig rätten att lägga till eller ta bort betalningsalternativ, vilket innebär att
                            tillgängliga val kan variera över tid.
                        </p>
                        <p>
                            Mer information om Klarna finns på Klarna.se, där samtliga villkor också återfinns.
                        </p>
                    </section>
                </div> </div>
            <Footer />
        </div>
    );
};

export default Restrictions;
