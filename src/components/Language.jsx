import { Select } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function SelectLanguage() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("eng");
  const changeLanguage = (lang) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="w-[80px] pb-2">
      <Select
        onChange={(e) => changeLanguage(e.target.value)}
        value={lang}
        id="countries"
      >
        <option value="eng" defaultChecked>
          Eng
        </option>
        <option value="rus">Rus</option>
        <option value="uzb">Uzb</option>
      </Select>
    </div>
  );
}
