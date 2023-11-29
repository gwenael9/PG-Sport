import Link from "next/link";
import { useState } from "react";

export default function Nav() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleExpandBtnClick = () => {
        setIsCollapsed(!isCollapsed);

        // ajout du style 'collapsed' au body
        document.body.classList.toggle('collapsed');
    };


    return (
        <nav className="sidebar">

            <div className="sidebar-top-wrapper">
                <div className="sidebar-top">
                    <a href="#" className="logo__wrapper">
                        <span className="hide">Guep</span>
                    </a>
                </div>
                <div className={`expand-btn ${isCollapsed ? 'collapsed' : ''}`} onClick={handleExpandBtnClick}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="search__wrapper">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z" stroke="#697089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input type="search" placeholder="Recherche" />
            </div>

            <div className="sidebar-links">
                <h2>Menu</h2>
                <ul>
                    <li>
                        <a href="/seances" title="seances" className="tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4h6v8h-6z" />
                                <path d="M4 16h6v4h-6z" />
                                <path d="M14 12h6v8h-6z" />
                                <path d="M14 4h6v4h-6z" />
                            </svg>
                            <span className="link hide">Seances</span>
                            <span className="tooltip__content">Seances</span>
                        </a>
                    </li>
                    <li>
                        <a href="/suivi" title="suivi" className="tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4h6v8h-6z" />
                                <path d="M4 16h6v4h-6z" />
                                <path d="M14 12h6v8h-6z" />
                                <path d="M14 4h6v4h-6z" />
                            </svg>
                            <span className="link hide">Suivi</span>
                            <span className="tooltip__content">Suivi</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-links bottom-links">
                <h2>Paramètres</h2>
                <ul>
                    <li>
                        <a href="/parametre" title="parametre" className="tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z">
                                </path>
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            </svg>
                            <span className="link hide">Paramètres</span>
                            <span className="tooltip__content">Paramètres</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="divider"></div>

            <div className="sidebar__profile">
                <div className="avatar__wrapper">
                    <img className="avatar" src="" alt="avatar" />
                    <div className="online__status"></div>
                </div>
                <section className="avatar__name hide">
                    <div className="user-name">Gwen</div>
                    <div className="email">gwenael.mail.com</div>
                </section>
                <a href="/logout" className="logout">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M9 12h12l-3 -3"></path>
                        <path d="M18 15l3 -3"></path>
                    </svg>
                </a>
            </div>
        </nav>

    )
}