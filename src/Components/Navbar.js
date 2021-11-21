import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const [menuState, setMenuState] = useState("");

  function handleMenu(){
    setMenuState("open");
  }

  function handleCloseMenu(){
    setMenuState("");
  }


  return (
    <div id={styles.navbar} className={menuState === "open" ? styles.spread : ""}>
        <span 
        className ={`${styles.closeBtn} ${menuState === "open" ? styles.close : ""}`}
        onClick = {handleCloseMenu}
        >&#xf405;</span>
        <NavLink
          exact
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
                  : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/">בית
        </NavLink>
        <NavLink
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
                  : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/About"
        >אודות
        </NavLink>
        <NavLink
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
                  : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/Database"
        >מאגר מידע
        </NavLink>
        <NavLink
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
                  : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/QueryPage"
        >חקרו את המאגר
        </NavLink>
        <NavLink
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
                  : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/MainFindings"
        >ממצאים עיקריים
        </NavLink>
        <NavLink
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
          : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/ChangesForm"
        >עדכון פרטים
        </NavLink>
        <NavLink
          className={navData => navData.isActive ? `${styles.link} ${styles.chosen} ${menuState === "open" ? styles.show : ""}`
          : `${styles.link} ${menuState === "open" ? styles.show : ""}`}
          to="/English"
        >ENGLISH
        </NavLink>
      
      <a 
        href="#"
        className={`${styles.menuIcon} ${menuState === "open" ? styles.open : ""}`} 
        onClick={handleMenu}
        >&#xf394;</a>
    </div>

  );
}

export default Navbar;
