import i18next from "i18next";
import loginSv from "./translations/sv/login.json";
import loginEn from "./translations/en/login.json";

export enum TranslationTypes {
  LOGIN = "login",
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: "sv", // Base language
  resources: {
    en: {
      [TranslationTypes.LOGIN]: loginEn,
    },
    sv: {
      login: loginSv,
    },
  },
  supportedLngs: ["sv", "en"],
});

export default i18next;
