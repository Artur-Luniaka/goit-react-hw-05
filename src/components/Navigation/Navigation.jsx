import s from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { TbMovie } from "react-icons/tb";

const linkClass = ({ isActive }) => {
  return clsx(s.nav_link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header>
      <nav className={s.wrapper}>
        <NavLink className={linkClass} to="/">
          <IoHome />
          Home
        </NavLink>
        <NavLink className={linkClass} to="/movies">
          <TbMovie />
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
