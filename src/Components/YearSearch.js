import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from "react-redux";
import { selectJudges, selectJudge, changeYear } from "../RootReducer";
import { useState } from "react";
import styles from "./YearSearch.module.css";


const years = [];


    function generateArrayOfYears() {
        const max = (new Date().getFullYear()).toString();
        const min = 1948;
        for (let i = max; i >= min; i--) {
          let j = i.toString(); 
          years.push(j)
        }
      };

generateArrayOfYears();

const YearSearch = ({setCanvasState, selectedYear, setSelectedYear}) => {

    const dispatch = useDispatch();
    

      function handleYearSubmit(e){
        e.preventDefault();
        console.log(Number(selectedYear));
        setCanvasState("");
        dispatch(changeYear(Number(selectedYear)));
        setSelectedYear("");
      }

    return (
            <div className={styles.searchWrapper}>
                <form
                    className={styles.yearSearchForm}
                    onSubmit={handleYearSubmit}
                >
                    <Autocomplete
                        id="combo-box-demo"
                        // classes={}
                        options={years}
                        // autoSelect={true}
                        loadingText="התוצאות בדרך..."
                        getOptionLabel={option => option}
                        onChange={(e, newvalue) => setSelectedYear(newvalue)}
                        value={selectedYear}
                        renderInput={(params) => <TextField
                            {...params}
                            label="בחרו שנה"
                            style={{ border: "none" }}
                            color="secondary"
                            variant="outlined" />}

                    />
                    <input
                        type="submit"
                        className={styles.submitBTN}
                        value="&#xf2f5;" />
                </form>
                                    {/* {
                chosenJudge.surnameHE &&
                <JudgeCard
                    setCardState={setCardState}
                    cardState={cardState} />
            } */}
        </div>
    )
}

export default YearSearch;