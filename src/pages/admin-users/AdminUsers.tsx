import { Dropdown, Input, MenuProps, Select } from "antd";
import {
  MailOutlined,
  MoreOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
function AdminUsers() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const items: MenuProps["items"] = [
    {
      label: "Edit",
      key: "0",
      onClick: () => {
        console.log(false);
      },
    },
    {
      label: "Delete",
      key: "1",
      onClick: () => {
        console.log(true);
      },
    },
  ];
  return (
    <div>
      <header className="flex justify-between p-10">
        <Input
          prefix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Search here..."
          className="w-56"
        />
        <div className="flex justify-between space-x-8">
          <Select
            className="rounded-xl border-blue-600"
            defaultValue="newest"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              { value: "newest", label: "Newest" },
              { value: "lastest", label: "Lastest" },
            ]}
          />
          <NavLink
            to="/admin/users/add"
            className="flex items-center justify-center bg-blue-600  border-2 border-blue-600 h-[30px] px-5 rounded-lg text-white font-semibold text-xl"
          >
            + Teachers
          </NavLink>
        </div>
      </header>
      <main className="p-10">
        <div className="grid grid-cols-4">
          <div className="shadow-lg space-y-5 relative text-center p-5 max-w-[250px]">
            <div className="w-[90px] h-[90px] mx-auto bg-slate-500"></div>
            <NavLink to="/admin/users/1" className="block font-bold text-xl">
              Dimitres Viga
            </NavLink>
            <span className="block">Mathematics</span>
            <div className="flex items-center justify-center space-x-5">
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <PhoneOutlined className="text-white" />
              </button>
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <MailOutlined className="text-white" />
              </button>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className="absolute top-[10px] right-[10px] w-4 h-4" />
            </Dropdown>
          </div>
          <div className="shadow-lg space-y-5 relative text-center p-5 max-w-[250px]">
            <div className="w-[90px] h-[90px] mx-auto bg-slate-500"></div>
            <NavLink to="/admin/users/1" className="block font-bold text-xl">
              Dimitres Viga
            </NavLink>
            <span className="block">Mathematics</span>
            <div className="flex items-center justify-center space-x-5">
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <PhoneOutlined className="text-white" />
              </button>
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <MailOutlined className="text-white" />
              </button>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className="absolute top-[10px] right-[10px] w-4 h-4" />
            </Dropdown>
          </div>
          <div className="shadow-lg space-y-5 relative text-center p-5 max-w-[250px]">
            <div className="w-[90px] h-[90px] mx-auto bg-slate-500"></div>
            <NavLink to="/admin/users/1" className="block font-bold text-xl">
              Dimitres Viga
            </NavLink>
            <span className="block">Mathematics</span>
            <div className="flex items-center justify-center space-x-5">
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <PhoneOutlined className="text-white" />
              </button>
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <MailOutlined className="text-white" />
              </button>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className="absolute top-[10px] right-[10px] w-4 h-4" />
            </Dropdown>
          </div>
          <div className="shadow-lg space-y-5 relative text-center p-5 max-w-[250px]">
            <div className="w-[90px] h-[90px] mx-auto bg-slate-500"></div>
            <NavLink to="/admin/users/1" className="block font-bold text-xl">
              Dimitres Viga
            </NavLink>
            <span className="block">Mathematics</span>
            <div className="flex items-center justify-center space-x-5">
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <PhoneOutlined className="text-white" />
              </button>
              <button className="w-8 h-8 rounded-[50%] bg-blue-600">
                <MailOutlined className="text-white" />
              </button>
            </div>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className="absolute top-[10px] right-[10px] w-4 h-4" />
            </Dropdown>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminUsers;
