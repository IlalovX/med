import { NavLink } from "react-router-dom";
import { ADVERTS, FILTERS_TYPE } from "../../constans/data";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function AdminAdverts() {
  const { t } = useTranslation("home");
  const [advertActiveFilter, setAdvertActiveFilter] = useState("institute");
  const [advertFilterArray, setAdvertFilterArray] = useState(
    ADVERTS.filter((item) => item.type === advertActiveFilter)
  );

  const handleChangeFilter = (filter: string) => {
    setAdvertActiveFilter(filter);
    setAdvertFilterArray(ADVERTS.filter((item) => item.type === filter));
  };

  return (
    <div className="container mx-auto p-5 space-y-5 text-black">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl ">Объявление</h1>
        <NavLink
          to="/admin/adverts/add"
          className="bg-almost-blue text-white p-2 rounded-lg text-xl font-bold"
        >
          + Adverts
        </NavLink>
      </div>
      <div className="text-xs flex items-center space-x-4 sm:text-3xl">
        {FILTERS_TYPE.map((item, index) => (
          <p
            onClick={() => handleChangeFilter(item)}
            className={
              item === advertActiveFilter
                ? "text-almost-blue cursor-pointer"
                : "text-gray-500 cursor-pointer"
            }
            key={index}
          >
            {t(item)}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5">
        {advertFilterArray.map((item, index) => (
          <NavLink
            to={`/admin/adverts/${index}`}
            className="relative border border-black hover:border-blue-500 rounded-lg p-3 "
            key={index}
          >
            <h3 className="text-2xl sm:text-4xl mb-10">
              {t(`home:${item.title}`)}
            </h3>
            <p className="text-xl sm:text-2xl">{item.value}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default AdminAdverts;
