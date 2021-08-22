import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectJudges, selectJudge, changeJudge } from "../RootReducer";
import { useState } from "react";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import JudgeCard from "./JudgeCard";


const Header = () => {

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
        <header>

            <div className={styles.headerContent}>

                <h1 className={styles.h1}> מיהם שופטי ישראל?</h1>

                <div className={styles.headerContentInner}>

                    <div className={styles.headerResearch}>
                        <h2 className={styles.h2}> "שופטי ישראל בנתונים" מציג ממצאי מחקר על הפרופיל הסוציולוגי של שופטי ישראל בשנים 2016-1948:</h2>
                        <button type="button" className={styles.button} id={styles.btnResearch}><a className={styles.a} href="#">לממצאי המחקר העיקריים</a></button>
                    </div>

                    <div className={styles.headerDB}>
                        <h2 className={styles.h2}>"שופטי ישראל בנתונים" מעמיד לרשות הציבור וקהילת המחקר מאגר נתונים ביוגרפיים-חברתיים של שופטי ישראל. ניתן לחפש במאגר פרטים על שופט\ת מסוימ\ת או לנתח את הנתונים לפי חתכים שונים: </h2>
                        <div className={styles.btnGroup}>
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
                                                        style={{border:"none"}}
                                                        color="secondary"
                                                        variant="outlined" />}
                                                        
                                />
                                <input
                                    type="submit"
                                    className={styles.search}
                                    value="&#xf2f5;" />
                            </form>
                            {chosenJudge.surnameHE &&
                                <JudgeCard
                                    setCardState={setCardState}
                                    cardState={cardState} />}
                            <button type="button" className={styles.button} id={styles.btnDB}><a className={styles.a} href="#">אתגרו את המאגר</a></button>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}

export default Header;