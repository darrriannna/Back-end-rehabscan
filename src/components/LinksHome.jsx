import "../styles/links.css";

const services = [
    {
        title: "Hälsokontroller",
        text: "Analys av flera blodprover inklusive läkarutlåtande.",
        icon: "🧪",
        link: "/halsotester",
    },
    {
        title: "Magnetröntgen",
        text: "Se insidan av din kropp – helt strålningsfritt.",
        icon: "🎧",
        link: "/mr-undersokningar",
    },
    {
        title: "Ultraljud",
        text: "Ultraljud – tydliga bilder i realtid för snabbare diagnostik.",
        icon: "📡",
        link: "/ultraljud",
    },
];

export default function LinksHome() {
    return (
        <div className="health-links-container">
            {services.map((item, i) => (
                <a className="health-card-link" href={item.link} key={i}>
                    <div className="icon-link">{item.icon}</div>

                    <div className="text-area-link">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>

                    <div className="arrow-link">➜</div>
                </a>
            ))}
        </div>
    );
}
