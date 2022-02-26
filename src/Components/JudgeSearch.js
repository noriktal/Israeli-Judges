import styles from "./JudgeSearch.module.css";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import JudgeCard from "./JudgeCard";
import { useSelector, useDispatch } from "react-redux";
import { selectJudges, selectJudge, changeJudge } from "../RootReducer";
import { useState } from "react";
import ChangesForm from "./ChangesForm";

const JudgeSearch = ({format, btnColor, setSelectedJudgeParent}) => {
    
    const judges = useSelector(selectJudges);
    //const chosenJudge = useSelector(selectJudge);
    const dispatch = useDispatch();

    const [selectedJudge, setSelectedJudge] = useState(null);
    const [cardState, setCardState] = useState("close");

    function handleJudgeSubmit(e) {
        e.preventDefault(); 
        setCardState("");
        if(setSelectedJudgeParent){
            setSelectedJudgeParent(selectedJudge)
        }
        // dispatch(changeJudge(selectedJudge));
        // setSelectedJudge(null);

    }

    return (

        <div className={styles.searchWrapper}>
            <form
                className={styles.headerSearchbox}
                onSubmit={handleJudgeSubmit}
            >
                <Autocomplete
                    id="combo-box-demo"
                    // classes={}
                    options={judges}
                    // autoSelect={true}
                    loadingText="התוצאות בדרך..."
                    getOptionLabel={(option) => {
                        if(typeof option === null){
                            return "";
                        }else{
                           return `${option.surnameHE} ${option.givenNameHE}`;
                        }
                        }
                    }
                    onChange={(e, newvalue) => setSelectedJudge(newvalue)}
                    value={selectedJudge}
                    renderInput={(params) => <TextField
                        {...params}
                        label="חפשו שופט\ת"
                        style={{ border: "none" }}
                        color="secondary"
                        variant="outlined" />}

                />
                <input
                    type="submit"
                    className={styles.search}
                    style={{color: btnColor}}
                    value="&#xf2f5;" />
            </form>
            {
                (selectedJudge?.surnameHE && (format === "card")) && 
                <JudgeCard                    
                    setCardState={setCardState}
                    chosenJudge={selectedJudge}
                    setSelectedJudge={setSelectedJudge}
                    cardState={cardState}
                    style={{top: "20%", left: "45%"}}
                    />
            }
            {/* {chosenJudge.surnameHE && (format === "form") &&
            <ChangesForm 
                chosenJudge={chosenJudge}
            />
        } */}

    
    </div>
      );
}

export default JudgeSearch;