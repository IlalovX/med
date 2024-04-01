/// <reference types="vite-plugin-svgr/client" />
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../../assets/svgs/arrow-circle-right.svg?react";

function AboutMedicalFaculty() {
  const { id } = useParams();

  return (
    <div className="bg-almost-blue p-5">
      <div className="container  mx-auto text-white space-y-10">
        <h1 className="text-2xl sm:text-4xl mb-10">
          Лечебный факультет № {id}
        </h1>
        <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-10">
          <NavLink
            to={`/qualification_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Классификация</span>

            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/history_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5  min-h-40 sm:min-h-52"
          >
            <span className="text-4xl">История</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/structure_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5  min-h-40 sm:min-h-52"
          >
            <span className="text-4xl">Структура</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/council_medical_faculty/${id}`}
            className=" relative border border-white rounded-lg p-5  min-h-40 sm:min-h-52"
          >
            <span className="text-4xl">Состав ученого совета</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/departments_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Кафедры</span>
            <Arrow className="w-[37px] h-[37px] absolute bottom-5-5 right-5" />
          </NavLink>
          <NavLink
            to={`/methodological_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Научно-исследовательские работы</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/research_work_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Учебно-методическая работа </span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/student_scientific_society_medical_faculty/${id}`}
            className="w-full relative border border-white rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Студенческое научное общество</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutMedicalFaculty;
