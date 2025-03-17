import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Drivers", path: "/drivers" },
  { title: "Vehicles", path: "/vehicles" },
  { title: "About", path: "/about" },
];

const Sidebar = () => {
  return (
    <nav className="side-menu fixed left-0 top-0 h-screen w-64 z-10">
      <ul>
        {menuItems.map(({ title, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
