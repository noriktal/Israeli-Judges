import styles from "./Header.module.css";
import JudgeSearch from "./JudgeSearch";



const Header = () => {

    return (
        <header>

            <div className={styles.headerContent}>

                <h1 className={styles.h1}> מיהם שופטי ישראל?</h1>

                <div className={styles.headerContentInner}>

                    <div className={styles.headerResearch}>
                        <h2 className={styles.h2}> "שופטי ישראל בנתונים" מציג ממצאי מחקר על הפרופיל הסוציולוגי של שופטי ישראל בשנים מאז 1948 ועד היום:</h2>
                        <button type="button" className={styles.button} id={styles.btnResearch}><a className={styles.a} href="#">לממצאי המחקר העיקריים</a></button>
                    </div>

                    <div className={styles.headerDB}>
                        <h2 className={styles.h2}>"שופטי ישראל בנתונים" מעמיד לרשות הציבור וקהילת המחקר מאגר נתונים ביוגרפיים-חברתיים של שופטי ישראל. ניתן לחפש במאגר פרטים על שופט\ת מסוימ\ת או לנתח את הנתונים לפי חתכים שונים: </h2>
                        <div className={styles.btnGroup}>
                            <JudgeSearch 
                            format="card"
                            btnColor="white"
                            />
                            <button type="button" className={styles.button} id={styles.btnDB}><a className={styles.a} href="#">אתגרו את המאגר</a></button> 
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}

export default Header;