import PageHeader from "../PageHeader";
import ChangesForm from "../ChangesForm";
import styles from "./ChangesPage.module.css";
import JudgeSearch from "../JudgeSearch";
import { useState } from "react";




function ChangesPage(){

    const [selectedJudgeParent, setSelectedJudgeParent] = useState(null);


    return(
        
            <div className={styles.page}>
                <PageHeader 
                    title1="מאגר מידע על שופטים בישראל"
                    title2="בקשה לעדכון פרטי שופטים במאגר"
                />
                <main className={styles.main}>
                    <p className={styles.intro}>
                          בטופס המופיע בהמשך ניתן להגיש בקשה לתיקון, עדכון, או השלמת פרטיהם של שופטים שמופיעים במאגר. הבקשה תיבדק ואם תימצא מבוססת המאגר יעודכן בהתאם.<br/><br/>
                          הקלידו רק בשדות שברצונכם לערוך.
                    </p>
                    <JudgeSearch 
                    format="form"
                    btnColor="var(--blue)"
                    setSelectedJudgeParent={setSelectedJudgeParent}
                    />
                    <ChangesForm chosenJudge={selectedJudgeParent}/>
                </main>
                
            </div>
       
    )
}

export default ChangesPage;