import { MoreOutlined } from "@ant-design/icons";
import Map from "../../assets/images/local.png";
import SvgLocal from "../../assets/svgs/footer/LocationGrey.svg?react";
import SvgCall from "../../assets/svgs/footer/call-calling.svg?react";
import SvgSms from "../../assets/svgs/footer/sms.svg?react";
import { Dropdown, MenuProps } from "antd";
import { NavLink } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Edit",
    key: "0",
    onClick: () => {
      console.log(false);
    },
  },
];

function Admin() {
  return (
    <>
      <div className="relative h-[500px] shadow-xl">
        <div className="h-[40%] bg-almost-blue rounded-t-lg"></div>
        <div className="h-[60%]   relative p-5 mt-16 rounded-b-lg">
          <h1 className="text-4xl font-bold mb-2">Admin</h1>
          <div className="flex justify-between items-center">
            <div className="space-y-5">
              <h2 className="text-xl">Admin</h2>
              <p className="flex space-x-2 items-center">
                <SvgLocal className="w-[24px] h-[24px] text-gray-700" />
                <span className="text-xl ">Nukus,Karakalpakstan</span>
              </p>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl">Phone</h2>
              <div className="text-2xl font-bold flex space-x-2 items-center ">
                <div className="w-[30px] h-[30px] bg-orange-400 rounded-[50%] flex items-center justify-center">
                  <SvgCall className="w-[24px] h-[24px]" />
                </div>
                <span>+99891 123 45 67</span>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-xl">Email</h2>
              <div className="text-2xl font-bold flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] bg-orange-400 rounded-[50%] flex items-center justify-center">
                  <SvgSms className="w-[24px] h-[24px]" />
                </div>
                <span>kmi@mail.com</span>
              </div>
            </div>
          </div>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <MoreOutlined className="absolute top-[-40px] right-8 rotate-90 text-4xl" />
          </Dropdown>
        </div>
        <div className="w-[164px] h-[164px] rounded-[50%] absolute left-8 top-20 bg-white flex items-center justify-center">
          <div className="w-[144px] h-[144px] rounded-[50%]  left-8 top-20 bg-almost-admin-purple"></div>
        </div>
      </div>
      <NavLink to="https://yandex.uz/maps/org/208027049709/?ll=59.618553%2C42.471601&z=16.65">
        <img src={Map} className="w-full h-[800px] mt-10" />
      </NavLink>
    </>
  );
}

export default Admin;
