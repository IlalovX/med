import { NavLink } from "react-router-dom";

function ClassSchedule() {
  return (
    <div className="bg-almost-blue text-white">
      <div className="container mx-auto p-5 space-y-5">
        <h1 className="text-2xl sm:text-4xl">Расписание занятий</h1>
        <h2 className="text-xl sm:text-2xl">Лечебный факультет 1</h2>
        <div className=" gap-5 grid grid-cols-2 sm:grid-cols-4">
          <NavLink
            to="/class_schedule/med_1/1"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            1 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_1/2"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            2 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_1/3"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            3 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_1/4"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            4 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_1/5"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            5 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_1/6"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            6 курс
          </NavLink>
        </div>

        <h2 className="text-xl sm:text-2xl">Лечебный факультет 2</h2>
        <div className=" gap-5 grid grid-cols-2 sm:grid-cols-4">
          <NavLink
            to="/class_schedule/med_2/1"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            1 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_2/2"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            2 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_2/3"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            3 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_2/4"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            4 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_2/5"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            5 курс
          </NavLink>
          <NavLink
            to="/class_schedule/med_2/6"
            className="border border-white rounded-lg flex items-center justify-center min-h-[150px] max-w-[200px] w-full"
          >
            6 курс
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ClassSchedule;
