
import { useSelector } from "react-redux";
import { selectJudge } from "../RootReducer";
import styles from "./JudgeCard.module.css"
import { useState } from "react";
import avatar from "../Images/avatar.png"



const JudgeCard = ({ setCardState, cardState }) => {
    
    // const [cardState, setCardState] = useState("");
    const chosenJudge = useSelector(selectJudge);

    function handleCloseCard(){
        setCardState("close")
    }
    
    return (
        <div className={`${styles.card} ${cardState === "close" ? styles.closed : ""}`} >
            
                <div className={styles.upperCard}>
                    <span 
                    className ={styles.closeBtn}
                    onClick = {handleCloseCard}
                    >&#xf405;</span>
                    <img src={avatar} className={styles.img}/>
                    <h2 className={styles.h1}> {chosenJudge.givenNameHE} {chosenJudge.surnameHE}</h2>
                
            </div>
            <div className={styles.mainCard}>
                
                <h2 className={styles.h2}><span className={styles.keyLabel}>מגדר:</span> <span className={styles.propertyLabel}>{chosenJudge.gender}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>לאום:</span> <span className={styles.propertyLabel}>{chosenJudge.nationality}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>דת\דתיות:</span> <span className={styles.propertyLabel}>{chosenJudge.religion}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>זהות אתנית:</span> <span className={styles.propertyLabel}>{chosenJudge.ethnicity}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>ארץ לידה:</span> <span className={styles.propertyLabel}>{chosenJudge.birthCountry}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת לידה:</span> <span className={styles.propertyLabel}>{chosenJudge.birthYear}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>עיר ילדות עיקרית:</span> <span className={styles.propertyLabel}>{chosenJudge.majorChildhoodCityHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>עשירון עיר ילדות:</span> <span className={styles.propertyLabel}>{chosenJudge.citySocio}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>בי"ס תיכון:</span> <span className={styles.propertyLabel}>{chosenJudge.highschool}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>זרם חינוכי:</span> <span className={styles.propertyLabel}>{chosenJudge.educationType}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שירות צבאי:</span> <span className={styles.propertyLabel}>{chosenJudge.armyService}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>השכלה משפטית עיקרית:</span> <span className={styles.propertyLabel}>{chosenJudge.mainLegalEducation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת סיום תואר ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.YearFisrtDegreeGraduation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>סוג השכלה משפטית מתקדמת:</span> <span className={styles.propertyLabel}>{chosenJudge.typeAdvancedLegalEducation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>מוסד השכלה משפטית מתקדמת:</span> <span className={styles.propertyLabel}>{chosenJudge.universityAdvancedLegalEducation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת השכלה משפטית מתקדמת:</span> <span className={styles.propertyLabel}>{chosenJudge.yearAdvancedLegalEducation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>השכלה מתקדמת נוספת:</span> <span className={styles.propertyLabel}>{chosenJudge.otherAdvancedEducation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>מקום התמחות:</span> <span className={styles.propertyLabel}>{chosenJudge.placeOfInternship}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת התחלה כעו"ד:</span> <span className={styles.propertyLabel}>{chosenJudge.yearOfBecomingLawyer}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>גיל כניסה לשיפוט:</span> <span className={styles.propertyLabel}>{chosenJudge.ageOfEntering}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד אחרון:</span> <span className={styles.propertyLabel}>{chosenJudge.lastPosition}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>ניסיון במינוי ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.xpInFirstNom}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>ניסיון במינוי ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.xpInFirstNom}</span></h2>

                {chosenJudge.endOfCareer && <h2 className={styles.h2}><span className={styles.keyLabel}>קריירה הסתיימה:</span> <span className={styles.propertyLabel}>{chosenJudge.endOfCareer}</span></h2>
                }
                {chosenJudge.endOfCareerYear && <h2 className={styles.h2}><span className={styles.keyLabel}>שנת סוף הקריירה:</span> <span className={styles.propertyLabel}>{chosenJudge.endOfCareerYear}</span></h2>
                }
                {chosenJudge.ageOfRetirenment && <h2 className={styles.h2}><span className={styles.keyLabel}>גיל בפרישה:</span> <span className={styles.propertyLabel}>{chosenJudge.ageOfRetirenment}</span></h2>
                }
                {chosenJudge.xpInRet && <h2 className={styles.h2}><span className={styles.keyLabel}>ניסיון בפרישה:</span> <span className={styles.propertyLabel}>{chosenJudge.xpInRet}</span></h2>
                }
                <div>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.position1}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.court1NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.position1Year}</span></h2>
                </div>
                
                {chosenJudge.position2EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שני:</span> <span className={styles.propertyLabel}>{chosenJudge.position2EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שני:</span> <span className={styles.propertyLabel}>{chosenJudge.court2NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שני:</span> <span className={styles.propertyLabel}>{chosenJudge.position1Year}</span></h2>
                </div>
                }
                {chosenJudge.position3EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שלישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position3EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שלישי:</span> <span className={styles.propertyLabel}>{chosenJudge.court3NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שלישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position3Year}</span></h2>
                </div>
                }
                {chosenJudge.position4EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד רביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position4EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד רביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.court4NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד רביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position4Year}</span></h2>
                </div>
                }
                {chosenJudge.position5EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד חמישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position5EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד חמישי:</span> <span className={styles.propertyLabel}>{chosenJudge.court5NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד חמישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position5Year}</span></h2>
                </div>
                }
                {chosenJudge.position6EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position6EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שישי:</span> <span className={styles.propertyLabel}>{chosenJudge.court6NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position6Year}</span></h2>
                </div>
                }
                {chosenJudge.position7EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position7EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.court7NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position7Year}</span></h2>
                </div>
                }
                {chosenJudge.position8EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שמיני:</span> <span className={styles.propertyLabel}>{chosenJudge.position8EN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שמיני:</span> <span className={styles.propertyLabel}>{chosenJudge.court8NameEN}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שמיני:</span> <span className={styles.propertyLabel}>{chosenJudge.position8Year}</span></h2>
                </div>
                }
            
            
            </div>
          
        </div>
      );

}

export default JudgeCard;
