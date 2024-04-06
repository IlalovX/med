/// <reference types="vite-plugin-svgr/client" />
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../../../assets/svgs/arrow-circle-right-black.svg?react";

function AdminFaculty() {
  const { id } = useParams();

  return (
    <div>
      <div className="container  mx-auto text-black space-y-10 p-5">
        <h1 className="text-2xl sm:text-4xl mb-10">
          Лечебный факультет № {id}
        </h1>
        <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-10">
          <NavLink
            to={`/admin/faculties/qualification_medical_faculty/${id}`}
            className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Классификация</span>

            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/faculties/history_medical_faculty/${id}`}
            className="w-full relative border border-black rounded-lg p-5  min-h-40 sm:min-h-52"
          >
            <span className="text-4xl">История</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/faculties/structure_medical_faculty/${id}`}
            className="w-full relative border border-black rounded-lg p-5  min-h-40 sm:min-h-52"
          >
            <span className="text-4xl">Структура</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/faculties/council_medical_faculty/${id}`}
            className=" relative border border-black rounded-lg p-5  min-h-40 sm:min-h-52"
          >
            <span className="text-4xl">Состав ученого совета</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/departments`}
            className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Кафедры</span>
            <Arrow className="w-[37px] h-[37px] absolute bottom-5-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/faculties/methodological_medical_faculty/${id}`}
            className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Научно-исследовательские работы</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/faculties/research_work_medical_faculty/${id}`}
            className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Учебно-методическая работа </span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
          <NavLink
            to={`/admin/faculties/student_scientific_society_medical_faculty/${id}`}
            className="w-full relative border border-black rounded-lg p-5 min-h-40 sm:min-h-24 sm:min-h-52"
          >
            <span className="text-4xl">Студенческое научное общество</span>
            <Arrow className="w-[20px] sm:w-[37px] h-[20px]  sm:h-[37px] absolute bottom-5 right-5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminFaculty;
