import type { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar: FunctionComponent = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        handleClose();
    };

    const languages = [
        { code: "en", name: "English" },
        { code: "fr", name: "Français" },
        { code: "de", name: "Deutsch" },
    ];

    const navItems = [
        { path: "/", label: "nav.home", icon: "fa-house" },
        { path: "/about", label: "nav.about", icon: "fa-address-card" },
        { path: "/projects", label: "nav.projects", icon: "fa-folder-open" },
        { path: "/contact", label: "nav.contact", icon: "fa-phone" },
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language)?.name || "Language";

    return (
        <div className="navBar">
            <nav className="desktop-nav">
                <div className="desktop-nav__container">
                    <NavLink to="/" className="desktop-nav__brand">
                        {t("name")}
                    </NavLink>
                    <ul className="desktop-nav__list">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending desktop-nav__link"
                                            : isActive
                                            ? "active desktop-nav__link"
                                            : "desktop-nav__link"
                                    }
                                >
                                    {t(item.label)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Button
                        onClick={handleClick}
                        variant="outlined"
                        id="language-button"
                        aria-controls={open ? "language-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        {currentLanguage}
                    </Button>
                    <Menu
                        id="language-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "language-button",
                        }}
                    >
                        {languages.map((lang) => (
                            <MenuItem
                                key={lang.code}
                                onClick={() => handleChangeLanguage(lang.code)}
                                selected={i18n.language === lang.code}
                            >
                                {lang.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </nav>

            <nav className="mobile-tab-nav" aria-label="Main mobile navigation">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending tab-link" : isActive ? "active tab-link" : "tab-link"
                        }
                    >
                        <i className={`fa-solid ${item.icon}`} />
                        <span className="tab-link__label">{t(item.label)}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
