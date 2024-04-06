/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import Arrow from "../../../assets/svgs/arrow-circle-right.svg?react";

function CatalogSciences() {
  return (
    <div className="bg-almost-blue text-white">
      <div className="container mx-auto p-5 space-y-5">
        <h1 className="text-2xl sm:text-4xl font-bold">Каталог наук</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">Лечебный факультет</span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">
              Педиатрический факультет{" "}
            </span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">
              Стоматологической факультет
            </span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">
              Медико биологический факультет
            </span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">Фармация факультет</span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">Народная медицина</span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">
              Управление здравоохранением
            </span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px] " />
          </NavLink>
          <NavLink
            to="/catalog_sciences"
            className="relative border border-white rounded-lg p-3 max-h-[200px] min-h-[130px]"
          >
            <span className="text-2xl sm:text-4xl ">
              Высшая сестринская работа
            </span>
            <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CatalogSciences;
