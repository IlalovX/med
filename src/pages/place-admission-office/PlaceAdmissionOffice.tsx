import { NavLink } from "react-router-dom";
import Local from "../../assets/images/local.png";
function PlaceAdmissionOffice() {
  return (
    <div className="bg-almost-red">
      <div className="container mx-auto p-5 space-y-5 text-white">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Адрес приемной комиссии
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-[40%_50%] min-h-[500px] gap-10 mb-20">
          <div className="border border-black rounded-lg flex flex-col justify-evenly text-center text-white min-h-[350px]">
            <p>phone</p>
            <p>location</p>
            <p>gmail</p>
          </div>
          <NavLink
            to="https://yandex.uz/maps/org/208027049709/?ll=59.618553%2C42.471601&z=16.65"
            target="_blank"
          >
            <img src={Local} className="w-full h-full min-h-[350px]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PlaceAdmissionOffice;
