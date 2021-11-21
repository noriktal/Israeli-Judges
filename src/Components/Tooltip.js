import styles from "./Tooltip.module.css";

export default function Tooltip({title1,title2, par, style}){

    return(
        <div 
          className={styles.tooltip}
          style={style}
        >
            {title1 && <h1 className={styles.h1}>{title1}</h1>}
            {title2 && <h2 className={styles.h2}>{title2}</h2>}
            {par && <div className={styles.div}>{par}</div>} 
        </div>
    )
}