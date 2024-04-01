/// <reference types="vite-plugin-svgr/client" />
import Arrow from "../../assets/svgs/arrow-circle-right.svg?react";
import { NavLink } from "react-router-dom";
import { getNews } from "../admin-news/services/queries";

function News() {
  const { data: NEWS } = getNews();
  return (
    <div className="bg-almost-blue min-h-[50vh]">
      <div className="container mx-auto p-5 space-y-5 text-white">
        <h1 className="text-4xl ">Новости</h1>
        <p className="text-3xl text-opacity-35">Узнайте о последних новостях</p>
        <div className="grid grid-cols-2 gap-5">
          {NEWS?.map((item, index) => (
            <NavLink
              to={`/news/${item?.id}`}
              className="relative border border-white rounded-lg p-3 max-w-[510px] "
              key={index}
            >
              <h3 className="text-4xl mb-10">{item?.header}</h3>
              <p className="text-2xl">{item?.description}</p>
              <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
