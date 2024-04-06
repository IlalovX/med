/// <reference types="vite-plugin-svgr/client" />
import { NavLink, useParams } from "react-router-dom";

import Arrow from "../../../assets/svgs/arrow-circle-right-black.svg?react";

function AdminAboutDepartment() {
  const { department } = useParams();
  return (
    <div>
      <div className="container mx-auto p-5 text-black space-y-10">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Кафедра акушерства и гинекологии
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <NavLink
            to={`/admin/history_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  min-h-[120px] max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">История</span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/admin/structure_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">Структура</span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/admin/spiritual_and_enlightening_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Духовно-просветительская работа
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/admin/methodological_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Учебно-методическая работа
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/admin/research_work_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Научно-исследовательские работы
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/admin/student_scientific_society_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">Научный кружок</span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
          <NavLink
            to={`/admin/international_partnership_department_medical_faculty/${department}`}
            className="relative border border-black rounded-lg p-5  h-52 max-w-[500px]"
          >
            <span className="text-2xl sm:text-4xl">
              Международное сотрудничество
            </span>
            <Arrow className="w-[20xp] h-[20px] sm:w-[37px] sm:h-[37px] absolute bottom-5 right-5 " />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AdminAboutDepartment;
