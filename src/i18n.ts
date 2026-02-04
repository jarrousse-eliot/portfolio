import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import commonEn from "./locales/en/common.json";
import tagsEn from "./locales/en/tags.json";
import portfolioEn from "./locales/en/portfolio.json";
import thermonovaEn from "./locales/en/thermonova.json";

const RESOURCES = {
    en: { common: commonEn, tags: tagsEn, portfolio: portfolioEn, thermonova: thermonovaEn }, 
};

const DETECTION_OPTIONS = {
    order: ["localStorage", "navigator"], 
    caches: ["localStorage"],
};

export const defaultNS = "common";

i18n
    .use(LanguageDector)
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        detection: DETECTION_OPTIONS, 
        resources: RESOURCES, 
        defaultNS, 
        fallbackLng: "en", 
        interpolation: { escapeValue:false }
    });


export default i18n;
