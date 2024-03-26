import { Dropdown, MenuProps } from "antd";
import SvgLocal from "../../assets/svgs/footer/LocationGrey.svg?react";
import SvgCall from "../../assets/svgs/footer/call-calling.svg?react";
import SvgSms from "../../assets/svgs/footer/sms.svg?react";
import { MoreOutlined } from "@ant-design/icons";

function UserDetail() {
  const items: MenuProps["items"] = [
    {
      label: "Edit",
      key: "0",
      onClick: () => {
        console.log(false);
      },
    },
  ];
  return (
    <div className="flex flex-col space-y-5 p-5">
      <div className="relative grid grid-rows-[40%_30%]">
        <div className=" bg-almost-blue rounded-t-lg"></div>
        <div className="  rounded-b-lg relative p-5 ">
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
            <MoreOutlined className="absolute top-[10px] right-8 rotate-90 text-4xl" />
          </Dropdown>
        </div>
        <div className="p-5 space-y-5 ">
          <h2 className="text-2xl  font-bold">About:</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <h2 className="text-2xl font-bold">Education:</h2>
          <ul className="space-y-5">
            <li className="list-disc font-bold text-xl mb-1">
              History Major, University Akademi Historia
            </li>
            <span className="text-gray-400 text-xl">2013-2017</span>
            <li className="list-disc font-bold text-xl mb-1">
              Master of History, University Akademi Historia
            </li>
            <span className="text-gray-400 text-xl">2017-2020</span>
          </ul>
        </div>

        <div className="w-[164px] h-[164px] rounded-[50%] absolute left-10 top-10 bg-white flex items-center justify-center">
          <div className="w-[144px] h-[144px] rounded-[50%]  left-10 top-14 bg-almost-admin-purple"></div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
