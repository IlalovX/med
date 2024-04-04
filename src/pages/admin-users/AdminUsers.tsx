import { Dropdown, Input, Select } from "antd";
import {
  MailOutlined,
  MoreOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { getUsers } from "./services/queries";
import { useDeleteUser } from "./services/mutations";

function AdminUsers() {
  const { data }: { data: any } = getUsers();
  const deleteUser = useDeleteUser();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container mx-auto p-5 space-y-10">
      <h1 className="text-2xl font- bold sm:text-4xl">Пользователи</h1>
      <div className="flex justify-between items-center">
        <Input
          prefix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Search here..."
          className="w-60"
        />
        <div className="flex justify-between items-center space-x-10">
          <Select
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
            className="bg-almost-blue text-white px-2 rounded-lg text-xl font-bold"
          >
            + Teachers
          </NavLink>
        </div>
      </div>
      <main className="grid grid-cols-4 gap-5">
        {data?.map((item: any) => (
          <div className="shadow-lg flex flex-col items-center justify-center p-5 space-y-5 relative bg-white">
            <div className="w-24 h-24 rounded-[50%] bg-almost-admin-purple"></div>
            <NavLink to="/admin/users/1" className="text-2xl font-bold">
              {item.firstName} {item.lastName}
            </NavLink>
            <span className="text-almost-admin-grey ">{item.degree}</span>
            <div className="flex space-x-5">
              <button className="w-7 h-7 bg-almost-admin-blue rounded-[50%] text-white flex items-center justify-center">
                <PhoneOutlined />
              </button>
              <button className="w-7 h-7 bg-almost-admin-blue rounded-[50%] text-white flex items-center justify-center">
                <MailOutlined />
              </button>
            </div>
            <Dropdown
              menu={{
                items: [
                  {
                    label: (
                      <NavLink to={`/admin/users/edit/${item?.id}`}>
                        Edit
                      </NavLink>
                    ),
                    key: "0",
                  },
                  {
                    label: "Delete",
                    key: "1",
                    onClick: () => {
                      deleteUser.mutateAsync({ id: item?.id });
                    },
                  },
                ],
              }}
              trigger={["click"]}
              placement="bottomRight"
            >
              <MoreOutlined className="rotate-90 absolute right-5 top-1 text-2xl" />
            </Dropdown>
          </div>
        ))}
      </main>
    </div>
  );
}

export default AdminUsers;
