import type { FunctionComponent } from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Navbar: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <nav className="navBar">
            <h1>{t("name")}</h1>
            <div>
                <NavLink to="/">{t("nav.home")}</NavLink>
                <NavLink to="/about">{t("nav.about")}</NavLink>
                <NavLink to="/projects">{t("nav.projects")}</NavLink>
                <NavLink to="/contact">{t("nav.contact")}</NavLink>
            </div>
        </nav>
    );
};


export default Navbar;
