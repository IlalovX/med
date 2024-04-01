import { Dropdown, MenuProps } from "antd";
import SvgLocal from "../../assets/svgs/footer/LocationGrey.svg?react";
import SvgCall from "../../assets/svgs/footer/call-calling.svg?react";
import SvgSms from "../../assets/svgs/footer/sms.svg?react";
import { MoreOutlined } from "@ant-design/icons";
import { getUserDetail } from "./services/queries";

const items: MenuProps["items"] = [
  {
    label: "Edit",
    key: "0",
    onClick: () => {
      console.log(false);
    },
  },
];
function AdminUsersDetail() {
  const { data } = getUserDetail();

  return (
    <div className="relative h-[500px] shadow-xl">
      <div className="h-[40%] bg-almost-blue rounded-t-lg"></div>
      <div className="h-[60%]   relative p-5 mt-16 rounded-b-lg">
        <h1 className="text-4xl font-bold mb-2">
          {data?.firstname} {data?.lastname}
        </h1>
        <div className="flex justify-between items-center">
          <div className="space-y-5">
            <h2 className="text-xl">{data?.degree}</h2>
            <p className="flex space-x-2 items-center">
              <SvgLocal className="w-[24px] h-[24px] text-gray-700" />
              <span className="text-xl ">{data?.city}</span>
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl">Phone</h2>
            <div className="text-2xl font-bold flex space-x-2 items-center ">
              <div className="w-[30px] h-[30px] bg-orange-400 rounded-[50%] flex items-center justify-center">
                <SvgCall className="w-[24px] h-[24px]" />
              </div>
              <span>{data?.phone}</span>
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-xl">Email</h2>
            <div className="text-2xl font-bold flex space-x-2 items-center">
              <div className="w-[30px] h-[30px] bg-orange-400 rounded-[50%] flex items-center justify-center">
                <SvgSms className="w-[24px] h-[24px]" />
              </div>
              <span>{data?.email}</span>
            </div>
          </div>
        </div>
        <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
          <MoreOutlined className="absolute top-[-40px] right-8 rotate-90 text-4xl" />
        </Dropdown>
      </div>
      <div className="w-[164px] h-[164px] rounded-[50%] absolute left-8 top-20 bg-white flex items-center justify-center">
        <img
          src={data?.photo}
          className="w-[144px] h-[144px] rounded-[50%]  left-8 top-20 bg-almost-admin-purple"
        />
      </div>
    </div>
  );
}

export default AdminUsersDetail;
