import { DownOutlined, UpOutlined } from "@ant-design/icons";
import NavMenuItems from "../nav-menu-items/NavMenuItems";
import { useState } from "react";

function NavMenu({ items, onClose }: { items: any; onClose: any }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(items);

  return (
    <div
      className="mb-8 w-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <li className="flex justify-between items-center w-full ml-5 text-xl mb-3   cursor-pointer">
        <span>{items.label}</span>
        {!isOpen && <DownOutlined />}
        {isOpen && <UpOutlined />}
      </li>
      {isOpen && (
        <ul className="ml-10 ">
          {items.children?.map((child: any, index: number) => (
            <NavMenuItems key={index} child={child} onClose={onClose} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavMenu;
