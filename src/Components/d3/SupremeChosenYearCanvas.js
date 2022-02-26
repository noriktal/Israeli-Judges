import styles from "./SupremeChosenYearCanvas.module.css";
import {selectUserChosenYear, selectSupremeJudgesPerChosenYear} from "../../RootReducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import manJudge from "../../Images/icons/colorful-man-judge.svg";
import womanJudge from "../../Images/icons/colorful-woman-judge.svg";
import JudgeCard from "../JudgeCard";



const SupremeChosenYearCanvas = ({setCanvasState, canvasState}) => {

    const chosenYear = useSelector(selectUserChosenYear);
    const supremeJudges= useSelector(selectSupremeJudgesPerChosenYear);
    //const chosenJudge = useSelector(selectJudge);
    const dispatch = useDispatch();
    const [cardState, setCardState] = useState("close");
    const [selectedJudge, setSelectedJudge] = useState({surnameHE: "",givenNameHE:"" });


    function handleCloseCanvas(){
        setCanvasState("hidden");
    } 

    function handleJudge(judge){
        setCardState("");
        setSelectedJudge(judge);
        //dispatch(changeJudge(judge));
    }

    

    return(
        <div className={canvasState === "hidden" ? styles.hidden : styles.canvas}>
            <span 
                    className ={styles.closeBtn}
                    onClick = {handleCloseCanvas}
                    >&#xf405;</span>
            <h2 className={styles.h2}> שופטי בית המשפט העליון בשנת <span>{chosenYear}</span></h2>
            <ul className={styles.judgeList}>
                {supremeJudges.map(judge => (
                    <div key={judge.id} className={styles.judgebox}>
                        <img src={judge.genderEN === "Male" ? manJudge : womanJudge} className={styles.avatar}/>
                        <h1 
                            onMouseEnter={() => handleJudge(judge)} 
                            // onMouseLeave={handleJudgeLeft} 
                            className={styles.judgeTitle}> 
                            {`${judge.givenNameHE} ${judge.surnameHE}`} 
                        </h1>
                        {selectedJudge.id === judge.id &&
                        <JudgeCard 
                            chosenJudge={selectedJudge}
                            setCardState={setCardState}
                            setSelectedJudge={setSelectedJudge} 
                            cardState={cardState}
                            style={{marginLeft: "-150%", marginRight: "-20%"}}
                            />
                          }
                        </div>
                ))}
            </ul>
        </div>

    );
}

export default SupremeChosenYearCanvas;