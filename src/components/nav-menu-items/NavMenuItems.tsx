import { NavLink } from "react-router-dom";

function NavMenuItems({ child, onClose }: { child: any; onClose: any }) {
  console.log(child);

  return (
    <NavLink
      to={`/${child.label.props.to}`}
      className="text-xl mb-2 text-white block"
      onClick={onClose}
    >
      {child.label.props.children}
    </NavLink>
  );
}

export default NavMenuItems;
