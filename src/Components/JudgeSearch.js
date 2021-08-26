import styles from "./JudgeSearch.module.css";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import JudgeCard from "./JudgeCard";
import { useSelector, useDispatch } from "react-redux";
import { selectJudges, selectJudge, changeJudge } from "../RootReducer";
import { useState } from "react";

const JudgeSearch = () => {
    
    const judges = useSelector(selectJudges);
    const chosenJudge = useSelector(selectJudge);
    const dispatch = useDispatch();

    const [selectedJudge, setSelectedJudge] = useState({surnameHE: "",givenNameHE:"" });
    const [cardState, setCardState] = useState("");

    function handleJudgeSubmit(e) {
        e.preventDefault();
        dispatch(changeJudge(selectedJudge));
        setSelectedJudge({surnameHE: "", givenNameHE: ""});
        setCardState("");

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
                    getOptionLabel={(option) => `${option.surnameHE} ${option.givenNameHE}`}
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
                    value="&#xf2f5;" />
            </form>
                                {
            chosenJudge.surnameHE &&
            <JudgeCard
                setCardState={setCardState}
                cardState={cardState} />
        }
    
    </div>
      );
}

export default JudgeSearch;