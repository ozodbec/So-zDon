import { DarkThemeToggle, Navbar, Tooltip } from "flowbite-react";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import { Link } from "react-router-dom";
import { SelectLanguage } from "./Language";
import { useTranslation } from "react-i18next";
import Profil from "./Profil";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.registerSlice);
  const { t } = useTranslation();
  return (
    <Navbar fluid rounded className="border-b">
      <Navbar.Brand>
        <Link
          to={"/"}
          className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white"
        >
          So'zDon
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          to={"/createArticle"}
          className="flex justify-center items-center dark:text-white gap-2"
        >
          <MdOutlineCreateNewFolder className="w-[25px] h-[25px] " />{" "}
          <span>{t("Create")}</span>
        </Link>
      
        <DarkThemeToggle />
        {user && <Profil />}
        <SelectLanguage />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
