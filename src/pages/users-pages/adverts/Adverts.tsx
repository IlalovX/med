/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import Arrow from "../../../assets/svgs/arrow-circle-right.svg?react";
import { getAdvert } from "../../admin-pages/admin-adverts/services/queries";

function Adverts() {
  const { data: ADVERTS } = getAdvert();

  return (
    <section className="bg-almost-blue p-5  min-h-[50vh]">
      <div className="container mx-auto text-white flex flex-col space-y-10">
        <div>
          <h1 className="text-2xl sm:text-3xl mb-2">Объявления</h1>
          <h2 className="text-xl sm:text-2xl mb-6 sm:mb-10">
            Узнайте о последних новостях
          </h2>
        </div>
        <div className="text-xs flex items-center space-x-4 sm:text-3xl"></div>
        <div className="grid grid-cols-2 gap-5">
          {ADVERTS?.map((item, index) => (
            <NavLink
              to={`/adverts/${item.id}`}
              className="relative border border-white rounded-lg p-3 "
              key={index}
            >
              <h3 className="text-2xl sm:text-4xl mb-10">{item?.header}</h3>
              <p className="text-xl sm:text-2xl">{item?.description}</p>
              <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Adverts;
