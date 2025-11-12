import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";
import rontgen from "../data/rontgen.json";
import blodprov from "../data/blodprov.json";

// fix leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// simple offline city coords
const cityCoords = {
    Stockholm: [59.334591, 18.06324],
    Göteborg: [57.70887, 11.97456],
    Malmö: [55.605, 13.0038],
    Umeå: [63.8258, 20.263],
    Karlstad: [59.402, 13.5116],
    Sundsvall: [62.3908, 17.3069],
    Jönköping: [57.7826, 14.162],
    Mölndal: [57.659, 11.9302],
    Nyköping: [58.7548, 17.0062],
    Eskilstuna: [59.3666, 16.5073],
    Uppsala: [59.8586, 17.6389],
    Västerås: [59.6099, 16.5448],
    Örebro: [59.2753, 15.2134],
    Gävle: [60.6746, 17.141],
    Falun: [60.607, 15.6216],
    Kalmar: [56.6634, 16.3566],
    Norrköping: [58.5877, 16.1923],
    Södertälje: [59.1955, 17.6255],
    Solna: [59.3666, 18.002],
    Täby: [59.4455, 18.0686],
    Helsingborg: [56.0465, 12.6945],
    Huddinge: [59.2368, 17.9479],
    Älvsjö: [59.2869, 18.0056],
    Bromma: [59.35, 17.9167],
};

const fallback = [60.1282, 18.6435];

function FlyTo({ position }) {
    const map = useMap();
    useEffect(() => {
        if (!position) return;
        map.flyTo(position, 12, { duration: 1 });
    }, [position]);
    return null;
}

export default function MapSection() {
    const rontgenList = rontgen.map((c) => ({ ...c, type: "rontgen" }));
    const blodprovList = blodprov.map((c) => ({ ...c, type: "blodprov" }));
    const allClinics = [...rontgenList, ...blodprovList];

    const [showRontgen, setShowRontgen] = useState(true);
    const [showBlodprov, setShowBlodprov] = useState(true);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(allClinics);
    const [selected, setSelected] = useState(null);
    const [openCity, setOpenCity] = useState(null);

    useEffect(() => {
        const q = search.trim().toLowerCase();
        const newFiltered = allClinics.filter((c) => {
            if (!showRontgen && c.type === "rontgen") return false;
            if (!showBlodprov && c.type === "blodprov") return false;
            if (!q) return true;
            return (
                c.name.toLowerCase().includes(q) ||
                (c.city && c.city.toLowerCase().includes(q)) ||
                (c.address && c.address.toLowerCase().includes(q))
            );
        });
        setFiltered(newFiltered);
    }, [search, showRontgen, showBlodprov]);

    const groupedByCity = useMemo(() => {
        return filtered.reduce((acc, c) => {
            const city = c.city || "Okänd stad";
            if (!acc[city]) acc[city] = [];
            acc[city].push(c);
            return acc;
        }, {});
    }, [filtered]);

    // build map markers
    const markers = useMemo(() => {
        const byCity = {};
        filtered.forEach((c) => {
            const city = c.city || "Unknown";
            if (!byCity[city]) byCity[city] = [];
            byCity[city].push(c);
        });

        const result = [];
        Object.entries(byCity).forEach(([city, list]) => {
            const base = cityCoords[city] || fallback;
            list.forEach((c, i) => {
                const jitter = 0.01;
                const angle = (i * 47) % 360;
                const rad = (angle * Math.PI) / 180;
                const lat = base[0] + Math.cos(rad) * jitter * 0.2 * i;
                const lng = base[1] + Math.sin(rad) * jitter * 0.2 * i;
                result.push({ ...c, lat, lng });
            });
        });
        return result;
    }, [filtered]);

    const selectedPosition = selected
        ? [selected.lat ?? cityCoords[selected.city]?.[0] ?? fallback[0],
        selected.lng ?? cityCoords[selected.city]?.[1] ?? fallback[1]]
        : null;

    return (
        <div className="map-wrapper">
            <h2 className="map-big-title">Mottagningar för hälsokontroller</h2>
            <div className="app-root">
                <div className="left-panel">
                    <h2 className="title">Sök mottagningar</h2>

                    <div className="controls">
                        <div className="checkboxes">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showRontgen}
                                    onChange={() => setShowRontgen((s) => !s)}
                                />
                                Röntgenmottagningar
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showBlodprov}
                                    onChange={() => setShowBlodprov((s) => !s)}
                                />
                                Blodprovmottagningar
                            </label>
                        </div>

                        <div className="search">
                            <input
                                placeholder="Sök efter stad eller klinik..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="list-container">
                        {Object.keys(groupedByCity).length === 0 ? (
                            <p className="no-results">Inga mottagningar hittades.</p>
                        ) : (
                            <ul className="city-list">
                                {Object.entries(groupedByCity).map(([city, clinics]) => (
                                    <li key={city} className="city-item">
                                        <div className="city-header">
                                            <strong>{city}</strong>
                                            <button
                                                className="toggle-btn"
                                                onClick={() =>
                                                    setOpenCity(openCity === city ? null : city)
                                                }
                                            >
                                                {openCity === city
                                                    ? `▲ ${clinics.length} alternativ`
                                                    : `▼ ${clinics.length} alternativ`}
                                            </button>
                                        </div>

                                        {openCity === city && (
                                            <ul className="clinic-sublist">
                                                {clinics.map((c, i) => (
                                                    <li
                                                        key={c.name + i}
                                                        className={`clinic-item ${selected?.name === c.name ? "selected" : ""
                                                            }`}
                                                        onClick={() => setSelected(c)}
                                                    >
                                                        <div className="clinic-main">
                                                            <div className="clinic-name">{c.name}</div>
                                                            <div className="clinic-type">
                                                                {c.type === "rontgen"
                                                                    ? "Röntgen"
                                                                    : "Blodprov"}
                                                            </div>
                                                        </div>
                                                        <div className="clinic-address">{c.address}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="right-panel">
                    <MapContainer
                        center={[59.334591, 18.06324]}
                        zoom={6}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='© OpenStreetMap contributors'
                        />
                        {markers.map((m, idx) => (
                            <Marker
                                key={m.name + idx}
                                position={[m.lat, m.lng]}
                                eventHandlers={{
                                    click: () => setSelected(m),
                                }}
                            >
                                <Popup>
                                    <strong>{m.name}</strong>
                                    <div>{m.address}</div>
                                    <div style={{ fontSize: "12px", marginTop: "6px" }}>
                                        {m.city} —{" "}
                                        {m.type === "rontgen" ? "Röntgen" : "Blodprov"}
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        {selectedPosition && <FlyTo position={selectedPosition} />}
                    </MapContainer>
                </div>
            </div></div>
    );
}
