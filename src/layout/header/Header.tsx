/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

import SvgQarFlag from "../../assets/svgs/flags/QarFlag.svg?react";
import SvgUzFlag from "../../assets/svgs/flags/UzFlag.svg?react";
import SvgRusFlag from "../../assets/svgs/flags/RusFlag.svg";
import SvgUsFlag from "../../assets/svgs/flags/UsFlag.svg";
import SvgQarSymbol from "../../assets/svgs/gerbs/QarGerb.svg?react";
import SvgUzSymbol from "../../assets/svgs/gerbs/Gerb.svg?react";
import SvgSolid from "../../assets/svgs/fa-solid_music.svg?react";
import SvgSearch from "../../assets/svgs/menu/search-normal.svg?react";
import SvgHemis from "../../assets/svgs/menu/teacher.svg?react";
import SvgMap from "../../assets/svgs/menu/map.svg?react";
import SvgGlobal from "../../assets/svgs/menu/global.svg?react";
import SvgLogin from "../../assets/svgs/menu/login.svg?react";
import Logo from "../../assets/images/logo_Institut.png";

import { navMenuItems } from "../../constans/data";

const languagesItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex space-x-2 items-center">
        <img src={SvgRusFlag} alt="" className="h-[19px] w-[24px]" />
        <span>Русский</span>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex space-x-2 items-center">
        <SvgQarFlag className="h-[19px] w-[24px]" />
        <span>Каракалпаксикий</span>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex space-x-2 items-center">
        <img src={SvgUsFlag} alt="" className="h-[19px] w-[24px]" />
        <span>Английский</span>
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div className="flex space-x-2 items-center">
        <SvgUzFlag className="h-[19px] w-[24px]" />
        <span>Узбекский</span>
      </div>
    ),
  },
];

function Header() {
  return (
    <div className=" bg-almost-blue   text-white ">
      <section className="container mx-auto flex space-x-2 items-center h-14">
        <NavLink to="/symbols/kaa/emblem">
          <SvgQarSymbol className="h-[24px] w-[24px]" />
        </NavLink>
        <NavLink to="/symbols/kaa/flag">
          <SvgQarFlag className="h-[24px] w-[45px]" />
        </NavLink>
        <NavLink to="/symbols/kaa/anthem">
          <SvgSolid className="h-[24px] w-[24px]" />
        </NavLink>
        <NavLink to="/symbols/uz/emblem">
          <SvgUzSymbol className="h-[24px] w-[24px]" />
        </NavLink>
        <NavLink to="/symbols/uz/flag">
          <SvgUzFlag className="h-[24px] w-[45px]" />
        </NavLink>
        <NavLink to="/symbols/uz/anthem">
          <SvgSolid className="h-[24px] w-[24px]" />
        </NavLink>
      </section>
      <section className="  w-full  bg-white text-black py-2 text-xl">
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
            <Dropdown menu={{ items: languagesItems }}>
              <div onClick={(e) => e.preventDefault()}>
                <Space className="flex space-x-1 cursor-pointer">
                  <SvgGlobal />
                  <span>Язык</span>
                </Space>
              </div>
            </Dropdown>
            <NavLink to="/contacts">Контакты</NavLink>
            <NavLink to="/auth/login" className="flex space-x-1">
              <span>Войти</span>
              <SvgLogin />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-between items-center h-12">
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
