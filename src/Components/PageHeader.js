import JudgeSearch from "./JudgeSearch"
import styles from "./PageHeader.module.css"

function PageHeader() {


    return(
        <div className={styles.headerWrapper}>
            <div className={styles.innerWrapper}>
            <h1 className={styles.pageTitle}>  מאגר מידע על שופטים בישראל בשנים 1956-2021</h1>
            <h2 className={styles.secondaryTitle}>בעמוד זה ניתן לבחון את המאגר כולו או למצוא מידע על שופט\ת מסוימ\ת</h2>
            {/* <JudgeSearch /> */}
            </div>
        </div>
    )
}

export default PageHeader