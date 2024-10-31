import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Til fayllarini import qilish
import uz from "./languages/uz.json";
import ru from "./languages/ru.json";
import en from "./languages/eng.json";

i18n.use(initReactI18next).init({
  resources: {
    uzb: { translation: uz },
    rus: { translation: ru },
    eng: { translation: en },
  },
  lng: "eng",
  fallbackLng: "eng",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
