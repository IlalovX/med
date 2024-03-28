/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import Arrow from "../../assets/svgs/arrow-circle-right.svg?react";
import { ADVERT, FILTERS_TYPE } from "../../constans/data";
import { useState } from "react";

function Adverts() {
  const [advertActiveFilter, setAdvertActiveFilter] = useState("institute");
  const [advertFilterArray, setAdvertFilterArray] = useState(
    ADVERT.filter((item) => item.type === advertActiveFilter)
  );

  const handleChangeFilter = (filter: string) => {
    setAdvertActiveFilter(filter);
    setAdvertFilterArray(ADVERT.filter((item) => item.type === filter));
  };
  return (
    <section className="bg-almost-blue p-5 ">
      <div className="container mx-auto text-white flex flex-col space-y-10">
        <div>
          <h1 className="text-3xl mb-2">Объявления</h1>
          <h2 className="text-2xl mb-10">Узнайте о последних новостях</h2>
        </div>
        <div className="text-xs flex items-center space-x-4 sm:text-3xl">
          {FILTERS_TYPE.map((item, index) => (
            <p
              onClick={() => handleChangeFilter(item)}
              className={
                item === advertActiveFilter
                  ? "text-white cursor-pointer"
                  : "text-gray-500 cursor-pointer"
              }
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5">
          {advertFilterArray.map((item, index) => (
            <NavLink
              to="/adverts/1"
              className="relative border border-white rounded-lg p-3 "
              key={index}
            >
              <h3 className="text-4xl mb-10">{item.title}</h3>
              <p className="text-2xl">{item.value}</p>
              <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Adverts;
