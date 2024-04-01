/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from "react-router-dom";
import { getNews } from "./services/queries";
import { Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useDeleteNew } from "./services/mutation";

function AdminNews() {
  const { data } = getNews();
  console.log(data);

  return (
    <div className="container mx-auto p-5 space-y-5 text-black">
      <div className="flex justify-between">
        <h1 className="text-4xl ">Новости</h1>
        <NavLink
          to="/admin/news/add"
          className="bg-almost-blue text-white p-2 rounded-lg text-xl font-bold"
        >
          + News
        </NavLink>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {data?.map((item, index) => (
          <div className="relative border border-black rounded-lg p-3">
            <NavLink
              to={`/admin/news/${index}`}
              className=" hover:border-blue-500  max-w-[510px] "
              key={index}
            >
              <h3 className="text-4xl mb-10">{item?.header}</h3>
              <p className="text-2xl">{item?.description}</p>
            </NavLink>
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
                      useDeleteNew().mutateAsync({ id: item?.id });
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
        {/* {NEWS.map((item, index) => (
          <div className="relative border border-black rounded-lg p-3">
            <NavLink
              to={`/admin/news/${index}`}
              className=" hover:border-blue-500  max-w-[510px] "
              key={index}
            >
              <h3 className="text-4xl mb-10">{item.title}</h3>
              <p className="text-2xl">{item.value}</p>
            </NavLink>
            <Dropdown
              menu={{
                items: [
                  {
                    label: (
                      <NavLink to={`/admin/users/edit/${item.id}`}>
                        Edit
                      </NavLink>
                    ),
                    key: "0",
                  },
                  {
                    label: "Delete",
                    key: "1",
                    onClick: () => {
                      useDeleteNew().mutateAsync({ id: item.id });
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
        ))} */}
      </div>
    </div>
  );
}

export default AdminNews;
