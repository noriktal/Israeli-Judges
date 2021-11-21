import GaveledJudge from "../d3/GaveledJudge";
import ReligionViz from "../d3/ReligionViz";
import styles from "./TabGeneral.module.css";

export default function GeneralTab (){

    return(
        <div className={styles.generalTab}>
            <h1 className={styles.h1}>מספר השופטים הפעילים לאורך השנים</h1>
            <GaveledJudge />
            <ReligionViz />
         </div>
    )
}