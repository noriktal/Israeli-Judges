import globe from  "../Images/opaque-globe.jpg"
import styles from "./Loading.module.css";

export default function Loading(){

    return(
        
            <img 
            className={styles.img}
            scr={globe} />
       
    )
}