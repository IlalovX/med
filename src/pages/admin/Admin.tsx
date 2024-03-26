/// <reference types="vite-plugin-svgr/client" />

import { NavLink, Outlet, useLocation } from "react-router-dom";

import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ProfileOutlined,
  MoreOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Menu, MenuProps } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Logo from "../../assets/images/logo_Institut.png";
import Map from "../../assets/images/local.png";
import SvgLocal from "../../assets/svgs/footer/LocationGrey.svg?react";
import SvgCall from "../../assets/svgs/footer/call-calling.svg?react";
import SvgSms from "../../assets/svgs/footer/sms.svg?react";

const Admin = () => {
  const items: MenuProps["items"] = [
    {
      label: "Edit",
      key: "0",
      onClick: () => {
        console.log(false);
      },
    },
  ];
  const links = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <NavLink to="/admin">Dashboard</NavLink>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <NavLink to="/admin/users">Users</NavLink>,
    },
    {
      key: "3",
      icon: <ReconciliationOutlined />,
      label: <NavLink to="/admin/news">Новости</NavLink>,
    },
    {
      key: "4",
      icon: <ProfileOutlined />,
      label: <NavLink to="/admin/adverts">Объявления</NavLink>,
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      label: <NavLink to="/admin/settings">Настройки</NavLink>,
    },
    {
      key: "6",
      icon: <SettingOutlined />,
      label: <NavLink to="/admin/faculties">Факультеты</NavLink>,
    },
    {
      key: "7",
      icon: <SettingOutlined />,
      label: <NavLink to="/admin/docs">Документы</NavLink>,
    },
    {
      key: "8",
      icon: <SettingOutlined />,
      label: <NavLink to="/admin/menus">Меню</NavLink>,
    },
    {
      key: "9",
      icon: <SettingOutlined />,
      label: <NavLink to="/admin/pages">Страница</NavLink>,
    },
  ];

  const location = useLocation();

  const selectedLink = links.find(
    (link) => link.label.props.to === location.pathname
  );

  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={false}
          style={{ backgroundColor: "white" }}
        >
          <Header className="bg-white">
            <NavLink to="/">
              <img src={Logo} />
            </NavLink>
          </Header>
          <Menu
            mode="inline"
            selectedKeys={[selectedLink?.key ? selectedLink.key : ""]}
            items={links}
            style={{ backgroundColor: "white" }}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: "10px 15px",
              background: "white",
              minHeight: "100vh",
            }}
          >
            <div>
              {location.pathname === "/admin" && (
                <div className="flex flex-col space-y-10 p-5">
                  <div className="relative h-[500px] shadow-xl">
                    <div className="h-[40%] bg-almost-blue rounded-t-lg"></div>
                    <div className="h-[60%]  rounded-b-lg relative p-5 mt-16">
                      <h1 className="text-4xl font-bold mb-2">Admin</h1>
                      <div className="flex justify-between items-center">
                        <div className="space-y-5">
                          <h2 className="text-xl">Admin</h2>
                          <p className="flex space-x-2 items-center">
                            <SvgLocal className="w-[24px] h-[24px] text-gray-700" />
                            <span className="text-xl ">
                              Nukus,Karakalpakstan
                            </span>
                          </p>
                        </div>
                        <div className="space-y-5">
                          <h2 className="text-xl">Phone</h2>
                          <p className="text-2xl font-bold flex space-x-2 items-center ">
                            <div className="w-[30px] h-[30px] bg-orange-400 rounded-[50%] flex items-center justify-center">
                              <SvgCall className="w-[24px] h-[24px]" />
                            </div>
                            <span>+99891 123 45 67</span>
                          </p>
                        </div>
                        <div className="space-y-5">
                          <h2 className="text-xl">Email</h2>
                          <p className="text-2xl font-bold flex space-x-2 items-center">
                            <div className="w-[30px] h-[30px] bg-orange-400 rounded-[50%] flex items-center justify-center">
                              <SvgSms className="w-[24px] h-[24px]" />
                            </div>

                            <span>kmi@mail.com</span>
                          </p>
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
                  <div>
                    <NavLink to="https://yandex.uz/maps/org/208027049709/?ll=59.618553%2C42.471601&z=16.65">
                      <img src={Map} className="w-full h-[800px]" />
                    </NavLink>
                  </div>
                </div>
              )}
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
