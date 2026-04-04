import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import commonEn from "./locales/en/common.json";
import tagsEn from "./locales/en/tags.json";
import projectsEn from "./locales/en/projects.json";

import commonFr from "./locales/fr/common.json";
import tagsFr from "./locales/fr/tags.json";
import projectsFr from "./locales/fr/projects.json";

import commonDe from "./locales/de/common.json";
import tagsDe from "./locales/de/tags.json";
import projectsDe from "./locales/de/projects.json";

const RESOURCES = {
    en: { common: commonEn, tags: tagsEn, projects: projectsEn },
    fr: { common: commonFr, tags: tagsFr, projects: projectsFr },
    de: { common: commonDe, tags: tagsDe, projects: projectsDe },
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
