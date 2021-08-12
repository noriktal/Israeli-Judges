import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        activeClassName="chosen"
        className="link"
        to="/Home">בית
      </NavLink>
      <NavLink
        activeClassName="chosen"
        className="link"
        to="/About"
      >אודות
      </NavLink>
      <NavLink
        activeClassName="chosen"
        className="link"
        to="/Database"
      >מאגר מידע
      </NavLink>
      <NavLink
        activeClassName="chosen"
        className="link"
        to="/QueryPage"
      >חקרו את המאגר
      </NavLink>
      <NavLink
        activeClassName="chosen"
        className="link"
        to="/MainFindings"
      >ממצאים
      </NavLink>
      <NavLink
        activeClassName="chosen"
        className="link"
        to="/English"
      >ENGLISH
      </NavLink>
    </div>

  );
}

export default Navbar;
