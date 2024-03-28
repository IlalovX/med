/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import { Drawer, Dropdown, Space } from "antd";
import { MenuOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
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
import SvgLoginWhite from "../../assets/svgs/loginWhite.svg?react";
import Logo from "../../assets/images/logo_Institut.png";

import { navMenuItems } from "../../constans/data";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=" bg-almost-blue text-white">
      <section className="container mx-auto flex justify-between h-14 p-5">
        <div className="flex space-x-2 items-center">
          <NavLink to="/symbols/kaa/emblem">
            <SvgQarSymbol className="max-h-[24px] max-w-[24px]" />
          </NavLink>
          <NavLink to="/symbols/kaa/flag">
            <SvgQarFlag className="max-h-[24px] max-w-[45px]" />
          </NavLink>
          <NavLink to="/symbols/kaa/anthem">
            <SvgSolid className="max-h-[24px] max-w-[24px]" />
          </NavLink>
          <NavLink to="/symbols/uz/emblem">
            <SvgUzSymbol className="max-h-[24px] max-w-[24px]" />
          </NavLink>
          <NavLink to="/symbols/uz/flag">
            <SvgUzFlag className="max-h-[24px] max-w-[45px]" />
          </NavLink>
          <NavLink to="/symbols/uz/anthem">
            <SvgSolid className="max-h-[24px] max-w-[24px]" />
          </NavLink>
        </div>
        <div className="flex text-xl lg:hidden sm:text-3xl ">
          <MenuOutlined className="cursor-pointer" onClick={showDrawer} />
          <Drawer
            onClose={onClose}
            open={open}
            closable={false}
            getContainer={false}
            className="!bg-almost-blue !text-white "
          >
            <NavLink
              to="/auth/login"
              className="flex justify-between items-center text-3xl"
            >
              <span>Войти</span>
              <SvgLoginWhite />
            </NavLink>

            {navMenuItems.map((item: any, index: number) => (
              <div className=" group" key={index}>
                <li className="text-3xl mb-2">
                  <span>{item.title}</span>
                </li>
                <div className="hidden group-hover:block">
                  {item.items?.map((el: any, index: number) => {
                    return (
                      <div className="mb-8 group w-full" key={index}>
                        <li className="flex justify-between items-center w-full ml-5 text-2xl mb-3  ">
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
            <Dropdown menu={{ items: languagesItems }}>
              <div onClick={(e) => e.preventDefault()}>
                <Space className="flex space-x-1 cursor-pointer">
                  <SvgGlobal />
                  <span>Язык</span>
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
