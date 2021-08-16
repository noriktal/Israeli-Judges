import styles from "./Header.module.css"; 
import { useSelector, useDispatch } from "react-redux";

const Header = () => {


    return (
        <header>

            <div className={styles.headerContent}>

                <h1 className={styles.h1}> מיהם שופטי ישראל?</h1>

                <div className={styles.headerContentInner}>

                    <div className={styles.headerResearch}>
                        <h2 className={styles.h2}> "שופטי ישראל בנתונים" מציג ממצאי מחקר על הפרופיל הסוציולוגי של שופטי ישראל בשנים 2016-1948:</h2>
                        <button type="button" className={styles.button} id={styles.btnResearch}><a className={styles.a} href="#">לממצאי המחקר העיקריים</a></button>
                    </div>

                    <div className={styles.headerDB}>
                        <h2 className={styles.h2}>"שופטי ישראל בנתונים" מעמיד לרשות הציבור וקהילת המחקר מאגר נתונים ביוגרפיים-חברתיים של שופטי ישראל. ניתן לחפש במאגר פרטים על שופט\ת מסוימ\ת או לנתח את הנתונים לפי חתכים שונים: </h2>
                        <div className={styles.btnGroup}>
                            <form action="#" className={styles.headerSearchbox}>
                                <input type="search" id={styles.headerSearch} name="headersearch" placeholder="חפשו שופט\ת" />
                                <input type="submit" className={styles.search} value="&#xf2f5;" />
                            </form>
                            <button type="button" className={styles.button} id={styles.btnDB}><a className={styles.a}href="#">אתגרו את המאגר</a></button>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}

export default Header;