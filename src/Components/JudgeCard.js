
import { useSelector } from "react-redux";
import { selectJudge } from "../RootReducer";
import styles from "./JudgeCard.module.css"
import avatar from "../Images/avatar.png"



const JudgeCard = ({ setCardState, cardState, style, chosenJudge }) => {
    
    
    //const chosenJudge = useSelector(selectJudge);

    function handleCloseCard(){
        setCardState("close")
    }
    
    return (
        <div className={`${styles.card} ${cardState === "close" ? styles.closed : ""}`}
             style={style}
        >
            
                <div className={styles.upperCard}>
                    <span 
                    className ={styles.closeBtn}
                    onClick = {handleCloseCard}
                    >&#xf405;</span>
                    <img src={avatar} className={styles.img}/>
                    <h2 className={styles.h1}> {chosenJudge.givenNameHE} {chosenJudge.surnameHE}</h2>
                
            </div>
            <div className={styles.mainCard}>
                <h2 className={styles.h2}><span className={styles.keyLabel}>פעיל כיום:</span> <span className={styles.propertyLabel}>{chosenJudge.status2017HE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>מגדר:</span> <span className={styles.propertyLabel}>{chosenJudge.genderHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>לאום:</span> <span className={styles.propertyLabel}>{chosenJudge.nationalityHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>דת:</span> <span className={styles.propertyLabel}>{chosenJudge.religionHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>דתיות:</span> <span className={styles.propertyLabel}>{chosenJudge.religiousityHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>אתניות-עדה:</span> <span className={styles.propertyLabel}>{chosenJudge.ethnicityHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>ארץ-איזור לידה:</span> <span className={styles.propertyLabel}>{chosenJudge.birthCountryHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת לידה:</span> <span className={styles.propertyLabel}>{chosenJudge.birthYear}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>עיר ילדות:</span> <span className={styles.propertyLabel}>{chosenJudge.majorChildhoodCityHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>עשירון עיר ילדות:</span> <span className={styles.propertyLabel}>{chosenJudge.citySocio}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>בי"ס תיכון:</span> <span className={styles.propertyLabel}>{chosenJudge.highschoolHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>זרם חינוכי:</span> <span className={styles.propertyLabel}>{chosenJudge.educationTypeHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>השכלה משפטית עיקרית:</span> <span className={styles.propertyLabel}>{chosenJudge.mainLegalEducationHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת סיום תואר ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.YearFisrtDegreeGraduation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>סוג השכלה משפטית מתקדמת:</span> <span className={styles.propertyLabel}>{chosenJudge.typeAdvancedLegalEducationHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>מוסד השכלה משפטית מתקדמת:</span> <span className={styles.propertyLabel}>{chosenJudge.universityAdvancedLegalEducationHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת השכלה משפטית מתקדמת:</span> <span className={styles.propertyLabel}>{chosenJudge.yearAdvancedLegalEducation}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>השכלה מתקדמת נוספת:</span> <span className={styles.propertyLabel}>{chosenJudge.otherAdvancedEducationHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>מקום התמחות:</span> <span className={styles.propertyLabel}>{chosenJudge.placeOfInternshipHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>שנת התחלה כעו"ד:</span> <span className={styles.propertyLabel}>{chosenJudge.yearOfBecomingLawyer}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>גיל כניסה לשיפוט:</span> <span className={styles.propertyLabel}>{chosenJudge.ageOfEnteringJudgeship}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד אחרון לפני שיפוט:</span> <span className={styles.propertyLabel}>{chosenJudge.lastPositionBeforeJudgeshipHE}</span></h2>
                <h2 className={styles.h2}><span className={styles.keyLabel}>ניסיון במינוי ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.xpInFirstNom}</span></h2>

                {chosenJudge.endOfCareerHE && <h2 className={styles.h2}><span className={styles.keyLabel}>סיום קריירה:</span> <span className={styles.propertyLabel}>{chosenJudge.endOfCareerHE}</span></h2>
                }
                {chosenJudge.endOfCareerYear != 9999 && <h2 className={styles.h2}><span className={styles.keyLabel}>שנת סוף הקריירה:</span> <span className={styles.propertyLabel}>{chosenJudge.endOfCareerYear === 9999 ? "-" : chosenJudge.endOfCareerYear }</span></h2>
                }
                {chosenJudge.ageOfRetirenment && <h2 className={styles.h2}><span className={styles.keyLabel}>גיל בפרישה:</span> <span className={styles.propertyLabel}>{chosenJudge.ageOfRetirenment}</span></h2>
                }
                {chosenJudge.JudgeshipxpInRet && <h2 className={styles.h2}><span className={styles.keyLabel}>ניסיון בפרישה:</span> <span className={styles.propertyLabel}>{chosenJudge.JudgeshipxpInRet}</span></h2>
                }
                <div>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.position1HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.court1NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד ראשון:</span> <span className={styles.propertyLabel}>{chosenJudge.position1Year}</span></h2>
                </div>
                
                {chosenJudge.position2EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שני:</span> <span className={styles.propertyLabel}>{chosenJudge.position2HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שני:</span> <span className={styles.propertyLabel}>{chosenJudge.court2NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שני:</span> <span className={styles.propertyLabel}>{chosenJudge.position1Year}</span></h2>
                </div>
                }
                {chosenJudge.position3EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שלישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position3HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שלישי:</span> <span className={styles.propertyLabel}>{chosenJudge.court3NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שלישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position3Year}</span></h2>
                </div>
                }
                {chosenJudge.position4EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד רביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position4HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד רביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.court4NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד רביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position4Year}</span></h2>
                </div>
                }
                {chosenJudge.position5EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד חמישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position5HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד חמישי:</span> <span className={styles.propertyLabel}>{chosenJudge.court5NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד חמישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position5Year}</span></h2>
                </div>
                }
                {chosenJudge.position6EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position6HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שישי:</span> <span className={styles.propertyLabel}>{chosenJudge.court6NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שישי:</span> <span className={styles.propertyLabel}>{chosenJudge.position6Year}</span></h2>
                </div>
                }
                {chosenJudge.position7EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position7HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.court7NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שביעי:</span> <span className={styles.propertyLabel}>{chosenJudge.position7Year}</span></h2>
                </div>
                }
                {chosenJudge.position8EN && <div>
                    
                    <h2 className={styles.h2}><span className={styles.keyLabel}>תפקיד שמיני:</span> <span className={styles.propertyLabel}>{chosenJudge.position8HE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>בימ"ש תפקיד שמיני:</span> <span className={styles.propertyLabel}>{chosenJudge.court8NameHE}</span></h2>
                    <h2 className={styles.h2}><span className={styles.keyLabel}>שנה תפקיד שמיני:</span> <span className={styles.propertyLabel}>{chosenJudge.position8Year}</span></h2>
                </div>
                }
            
            
            </div>
          
        </div>
      );

}

export default JudgeCard;
