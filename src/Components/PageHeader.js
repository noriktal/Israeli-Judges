import JudgeSearch from "./JudgeSearch"
import styles from "./PageHeader.module.css"

function PageHeader({ title1, title2} ) {


    return(
        <div className={styles.headerWrapper}>
            <div className={styles.innerWrapper}>
                <h1 className={styles.pageTitle}>{title1}</h1>
                <h2 className={styles.secondaryTitle}>{title2}</h2>
            </div>
        </div>
    )
}

export default PageHeader