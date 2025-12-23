import i18n from "i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";
import LanguageDector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import commonEn from "./locales/en/common.json";
import tagsEn from "./locales/en/tags.json";
import portfolioEn from "./locales/en/portfolio.json";

const RESOURCES = {
    en: { common: commonEn, tags: tagsEn, portfolio: portfolioEn}, 
};

const DETECTION_OPTIONS = {
    order: ["localStorage", "navigator"], 
    caches: ["localStorage"],
};

export const defaultNS = "common";

i18n
    .use(LanguageDetector)
    .use(intervalPlural)
    .use(initReactI18next)
    .init({
        detection: DETECTION_OPTIONS, 
        resources: RESOURCES, 
        defaultNS, 
        fallbackLng: "en", 
        interpolation: { escapeValue:false }
    });


export default i18n;
