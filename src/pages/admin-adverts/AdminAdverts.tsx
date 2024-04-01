import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAdvert } from "./services/queries";

function AdminAdverts() {
  const { t } = useTranslation("home");
  const { data } = getAdvert();

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
      <div className="text-xs flex items-center space-x-4 sm:text-3xl"></div>
      <div className="grid grid-cols-2 gap-5">
        {data?.map((item, index) => (
          <NavLink
            to={`/admin/adverts/${item.id}`}
            className="relative border border-black hover:border-blue-500 rounded-lg p-3 "
            key={index}
          >
            <h3 className="text-2xl sm:text-4xl mb-10">
              {t(`home:${item?.header}`)}
            </h3>
            <p className="text-xl sm:text-2xl">{item.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default AdminAdverts;
