import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import ruCommon from "./locales/ru/common.json";
import kaaCommon from "./locales/kaa/common.json";
import uzCommon from "./locales/uz/common.json";

import enAbout from "./locales/en/about.json";
import ruAbout from "./locales/ru/about.json";
import uzAbout from "./locales/uz/about.json";
import kaaAbout from "./locales/kaa/about.json";

import enHome from "./locales/en/home.json";
import ruHome from "./locales/ru/home.json";
import uzHome from "./locales/uz/home.json";
import kaaHome from "./locales/kaa/home.json";

import enEducation from "./locales/en/education.json";
import ruEducation from "./locales/ru/education.json";
import uzEducation from "./locales/uz/education.json";
import kaaEducation from "./locales/kaa/education.json";

const resources = {
  en: {
    common: enCommon,
    about: enAbout,
    home: enHome,
    education: enEducation,
  },
  ru: {
    common: ruCommon,
    about: ruAbout,
    home: ruHome,
    education: ruEducation,
  },
  uz: {
    common: uzCommon,
    about: uzAbout,
    home: uzHome,
    education: uzEducation,
  },
  kaa: {
    common: kaaCommon,
    about: kaaAbout,
    home: kaaHome,
    education: kaaEducation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
});

export default i18n;
