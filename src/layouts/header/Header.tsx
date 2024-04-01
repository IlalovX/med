import { NavLink } from "react-router-dom";
import { Drawer, Dropdown, Space } from "antd";
import { MenuOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import SvgQarFlag from "../../assets/svgs/flags/Karakalpakstan-flagpalette.svg?react";
import UzFlag from "../../assets/images/Flag.png";
import SvgRusFlag from "../../assets/svgs/flags/RusFlag.svg";
import SvgUsFlag from "../../assets/svgs/flags/UsFlag.svg";
import SvgUzSymbol from "../../assets/svgs/gerbs/UzGerb.svg?react";
import SvgSolid from "../../assets/svgs/fa-solid_music.svg?react";
import SvgSearch from "../../assets/svgs/menu/search-normal.svg?react";
import SvgHemis from "../../assets/svgs/menu/teacher.svg?react";
import SvgMap from "../../assets/svgs/menu/map.svg?react";
import SvgGlobal from "../../assets/svgs/menu/global.svg?react";
import SvgLogin from "../../assets/svgs/menu/login.svg?react";
import SvgLoginWhite from "../../assets/svgs/loginWhite.svg?react";
import Logo from "../../assets/images/logo_Institut.png";

import { LANGUAGES, navMenuItems } from "../../constans/data";

interface AbbrType {
  title: string;
  abbr: string;
}

function Header() {
  const { t, i18n } = useTranslation("common");
  const [abbrLanguage, setAbbrLanguage] = useState<AbbrType | undefined>({
    title: "russia",
    abbr: "ru",
  });

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setAbbrLanguage(LANGUAGES.find((item: AbbrType) => item?.abbr === lng));
  };

  const languagesItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex space-x-2 items-center"
          onClick={() => changeLanguage("ru")}
        >
          <img src={SvgRusFlag} alt="" className="h-[19px] w-[24px]" />
          <span>Русский</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex space-x-2 items-center"
          onClick={() => changeLanguage("kaa")}
        >
          <SvgQarFlag className="h-[19px] w-[24px]" />
          <span>Каракалпаксикий</span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="flex space-x-2 items-center"
          onClick={() => changeLanguage("en")}
        >
          <img src={SvgUsFlag} alt="" className="h-[19px] w-[24px]" />
          <span>Английский</span>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="flex space-x-2 items-center"
          onClick={() => changeLanguage("uz")}
        >
          <img src={UzFlag} alt="" className="h-[19px] w-[24px]" />
          <span>Узбекский</span>
        </div>
      ),
    },
  ];

  return (
    <div className=" bg-almost-blue text-white">
      <section className="container mx-auto flex justify-between h-14 p-5">
        <div className="flex space-x-5 items-center">
          <div className="flex items-center space-x-2">
            <NavLink to="/symbols/uz/emblem">
              <SvgUzSymbol className="max-h-[24px] max-w-[24px]" />
            </NavLink>
            <NavLink to="/symbols/uz/flag">
              <img src={UzFlag} alt="" className="max-h-[24px] max-w-[45px]" />
            </NavLink>
            <NavLink to="/symbols/uz/anthem">
              <SvgSolid className="max-h-[24px] max-w-[24px]" />
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <NavLink to="/symbols/kaa/emblem">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Emblem_of_Karakalpakstan.svg"
                className="max-h-[24px] max-w-[24px]"
              />
            </NavLink>
            <NavLink to="/symbols/kaa/flag">
              <SvgQarFlag className="max-h-[24px] max-w-[45px]" />
            </NavLink>
            <NavLink to="/symbols/kaa/anthem">
              <SvgSolid className="max-h-[24px] max-w-[24px]" />
            </NavLink>
          </div>
        </div>
        <div className="flex text-xl lg:hidden sm:text-3xl ">
          <MenuOutlined className="cursor-pointer" onClick={showDrawer} />
          <Drawer
            onClose={onClose}
            open={open}
            getContainer={false}
            className="!bg-almost-blue !text-white "
          >
            <NavLink
              to="/auth/login"
              className="flex justify-between items-center text-2xl"
            >
              <span>Войти</span>
              <SvgLoginWhite />
            </NavLink>

            {navMenuItems.map((item: any, index: number) => (
              <div className=" group" key={index}>
                <li className="text-xl mb-2">
                  <span>{item.title}</span>
                </li>
                <div className="hidden group-hover:block">
                  {item.items?.map((el: any, index: number) => {
                    return (
                      <div className="mb-8 group w-full" key={index}>
                        <li className="flex justify-between items-center w-full ml-5 text-xl mb-3  ">
                          <span>{el.label}</span>
                          <DownOutlined className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 " />
                          <UpOutlined className="transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" />
                        </li>
                        <ul className="ml-10  hidden  group-hover:block ">
                          {el.children?.map((child: any, index: number) => (
                            <li className="text-xl mb-2 " key={index}>
                              {child.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </Drawer>
        </div>
      </section>
      <section className="hidden lg:block  w-full  bg-white text-black py-2 text-xl p-5">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <div className="flex space-x-6">
            <NavLink to="/search">
              <SvgSearch />
            </NavLink>
            <NavLink to="https://hemis.uz/" className="flex space-x-1 ">
              <SvgHemis />
              <span>Hemis</span>
            </NavLink>
            <NavLink to="/sitemap" className="flex space-x-1 ">
              <SvgMap />
              <span>Карта сайта</span>
            </NavLink>
            <Dropdown
              menu={{ items: languagesItems }}
              overlayClassName="your-overlay-class"
              trigger={["click"]}
            >
              <div onClick={(e) => e.preventDefault()}>
                <Space className="flex space-x-1 cursor-pointer">
                  <SvgGlobal />
                  <span>{t(abbrLanguage?.title || "")}</span>
                </Space>
              </div>
            </Dropdown>
            <NavLink to="/contacts">Контакты</NavLink>
            <NavLink to="/auth/login" className="flex space-x-1 items-center">
              <span>Войти</span>
              <SvgLogin />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="hidden lg:flex container mx-auto  justify-between items-center p-5">
        {navMenuItems.map((item, index) => (
          <Dropdown menu={{ items: item.items }} key={index}>
            <div onClick={(e) => e.preventDefault()} className="cursor-pointer">
              <Space className="text-2xl">{item.title}</Space>
            </div>
          </Dropdown>
        ))}
      </section>
    </div>
  );
}

export default Header;
