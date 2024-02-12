import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="mt-5 d-flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? " btn btn-primary" : "btn btn-light "}`
          }
        >
          Compound Interest
        </NavLink>
        <NavLink
          to="/simple-interest"
          className={({ isActive }) =>
            `${isActive ? " btn btn-primary" : "btn btn-light "}`
          }
        >
          Simple Interest
        </NavLink>
        <NavLink
          to="/daily-compound"
          className={({ isActive }) =>
            `${isActive ? " btn btn-primary" : "btn btn-light "}`
          }
        >
          Daily Compound
        </NavLink>
        <NavLink
          to="/forex-compound"
          className={({ isActive }) =>
            `${isActive ? " btn btn-primary" : "btn btn-light "}`
          }
        >
          Forex Compound
        </NavLink>
      </div>
    </>
  );
}

export default Header;
