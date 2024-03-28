import Local from "../../assets/images/local.png";
import { NavLink } from "react-router-dom";

function Contacts() {
  return (
    <div className="bg-almost-red p-10 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl mb-10">Наши контакты</h1>
        <div className="grid grid-cols-[40%_50%] h-[500px] gap-10 mb-20">
          <div className="border border-black rounded-lg flex flex-col justify-evenly text-center ">
            <p>phone</p>
            <p>location</p>
            <p>gmail</p>
          </div>
          <NavLink
            to="https://yandex.uz/maps/org/208027049709/?ll=59.618553%2C42.471601&z=16.65"
            target="_blank"
          >
            <img src={Local} className="w-full h-full" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
