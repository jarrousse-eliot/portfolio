import type { FunctionComponent } from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Navbar: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="navBar">
        <nav className="desktop-nav">
        <div className="desktop-nav__container">
            <NavLink to="/" className="desktop-nav__brand">{t("name")}</NavLink>
            <ul className="desktop-nav__list">
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending desktop-nav__link" : isActive ? "active desktop-nav__link" : "desktop-nav__link"
                }>{t("nav.home")}</NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) =>
                    isPending ? "pending desktop-nav__link" : isActive ? "active desktop-nav__link" : "desktop-nav__link"
                }>{t("nav.about")}</NavLink>
                <NavLink to="/projects" className={({ isActive, isPending }) =>
                    isPending ? "pending desktop-nav__link" : isActive ? "active desktop-nav__link" : "desktop-nav__link"
                }>{t("nav.projects")}</NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) =>
                    isPending ? "pending desktop-nav__link" : isActive ? "active desktop-nav__link" : "desktop-nav__link"
                }>{t("nav.contact")}</NavLink>
            </ul>
        </div>
        </nav>
        <nav className="mobile-tab-nav" aria-label="Main mobile navigation">
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending tab-link" : isActive ? "active tab-link" : "tab-link"
        }>
            <i className="fa-regular fa-house"></i>
            <span className="tab-link__label">{t("nav.home")}</span>
        </NavLink>
        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending tab-link" : isActive ? "active tab-link" : "tab-link"
        }>
            <i className="fa-regular fa-address-card"></i>
            <span className="tab-link__label">{t("nav.about")}</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive, isPending }) =>
            isPending ? "pending tab-link" : isActive ? "active tab-link" : "tab-link"
        }>
            <i className="fa-solid fa-folder-open"></i>
            <span className="tab-link__label">{t("nav.projects")}</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending tab-link" : isActive ? "active tab-link" : "tab-link"
        }>
            <i className="fa-solid fa-phone"></i>
            <span className="tab-link__label">{t("nav.contact")}</span>
        </NavLink>
        </nav>
        </div>
    );
};


export default Navbar;
