import styles from "./NotFound.module.css";
import home from "../../Images/home.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className={styles.notFoundDiv}>
            <div className={styles.content}>
                <h1 className={styles.h1}>404</h1>
                <h1 className={styles.h1} >נראה שטעיתם בניווט</h1>
                <h2 className={styles.h2} >מוזמנים לחזור הביתה</h2>
                <NavLink to="/">
                    <img className="home" src={home} />
                </NavLink >

            </div>
        </div>
     );
}
 
export default NotFound;