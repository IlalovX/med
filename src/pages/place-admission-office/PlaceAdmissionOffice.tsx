import { NavLink } from "react-router-dom";
import Local from "../../assets/images/local.png";

import Call from "../../assets/svgs/footer/call-calling.svg?react";
import Send from "../../assets/svgs/sms.svg?react";
import Global from "../../assets/svgs/global-search.svg?react";

function PlaceAdmissionOffice() {
  return (
    <div className="bg-almost-red">
      <div className="container mx-auto p-5 space-y-5 text-white">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Адрес приемной комиссии
        </h1>
        <div className="flex flex-col lg:grid lg:grid-cols-[40%_50%] min-h-[500px] gap-10 mb-20">
          <div className="border border-black rounded-lg flex flex-col justify-center  text-white min-h-[350px] gap-5">
            <div className="grid grid-cols-2 gap-5 max-w-[20%] mx-auto">
              <Call />
              <div>
                <p>Телефон</p>
                <p>+998901234567</p>
              </div>
            </div>
            <div className="grid grid-cols-2  gap-5 max-w-[20%] mx-auto">
              <Global className="" />
              <div>
                <p>Адрес</p>
                <p>A.Dosnazarov 108</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 max-w-[20%] mx-auto">
              <Send className="" />
              <div>
                <p>Почта</p>
                <p>KMI@gmail.com</p>
              </div>
            </div>
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
