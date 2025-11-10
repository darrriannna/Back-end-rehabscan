import React, { useState } from 'react';
import '../styles/map.css';

const MapSection = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (city) => {
        setOpenDropdown(openDropdown === city ? null : city);
    };

    return (
        <div className='map-section-container'>
            <h2 className='map-section-text-h'>Hitta kliniken nära ditt hem</h2>
            <div className="map-section">

                <div className="text-content">

                    <ul className='list-map-container'>
                        <li className='list-map'>
                            Stockholm

                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Unilabs Klara Strand Röntgen</p>
                                    <p className='clinic-adress'>Blekholmstorget 30, 111 64 Stockholm</p>
                                </li>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Sabbatsberg Röntgen</p>
                                    <p className='clinic-adress'>Olivecronas väg 1, 113 24 Stockholm</p>
                                </li>
                            </ul>
                        </li>
                        <li className='list-map'>Göteborg

                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Backa Röntgen</p>
                                    <p className='clinic-adress'>Backavägen 3, 417 30 Göteborg</p>
                                </li>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Unilabs Haga Röntgen</p>
                                    <p className='clinic-adress'>Haga Östergata 12, 413 01 Göteborg</p>
                                </li>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Mölndal vid GoCo</p>
                                    <p className='clinic-adress'>Entreprenörsstråket 6, 431 53 Mölndal</p>
                                </li>
                            </ul>
                        </li>
                        <li className='list-map'>Malmö
                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Malmö Entré Röntgen</p>
                                    <p className='clinic-adress'>Fredsgatan 12, 212 12 Malmö</p>
                                </li>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Unilabs Malmö Arena Röntgen</p>
                                    <p className='clinic-adress'>Hyllie Stationsväg, 216 23 Malmö</p>
                                </li></ul></li>
                        <li className='list-map'>Umeå
                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Umeå Röntgen</p>
                                    <p className='clinic-adress'>Renmarkstorget 12, 903 26 Umeå</p>
                                </li></ul></li>
                        <li className='list-map'>Karlstad
                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Karlstad Röntgen</p>
                                    <p className='clinic-adress'>Löfbergs Arena, Norra Infarten 79, 654 65 Karlstad</p>
                                </li></ul></li>
                        <li className='list-map'>Sundsvall
                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Sundsvall Röntgen</p>
                                    <p className='clinic-adress'>Institutvägen 2, 856 43 Sundsvall</p>
                                </li></ul></li>
                        <li className='list-map'>Jönköping
                            <ul className='list-of-clinics'>
                                <li className='clinic-details'>
                                    <p className='clinic-name'>Jönköping Röntgen</p>
                                    <p className='clinic-adress'>Batterigatan 11, 553 05 Jönköping</p>
                                </li></ul></li>
                    </ul>
                </div>
                <div className="map-container">
                    <img src="./assets/Map.gif" alt="Magnetröntgen utan remiss över hela Sverige hos RehabScan" className="map-image" />
                </div>
            </div></div>
    );
};

export default MapSection;
