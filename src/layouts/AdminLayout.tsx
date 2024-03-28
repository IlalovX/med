import { adminNavLinks } from "../constans/data";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo_Institut.png";

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="py-5 w-[30%] text-2xl">
        <NavLink to="/" className="flex justify-center items-center mb-10">
          <img src={logo} alt="" />
        </NavLink>
        {adminNavLinks.map((link, i) => (
          <div
            className=" transition-colors hover:font-bold cursor-pointer text-almost-admin-grey hover:text-almost-blue p-3 hover:border-l-4 border-blue-600"
            key={i}
          >
            {link.label}
          </div>
        ))}
      </div>
      <div className="bg-almost-admin-milk w-full p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
