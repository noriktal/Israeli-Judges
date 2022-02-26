import { useSelector } from "react-redux";
import { useState } from "react";
import { selectJudge, selecthebrewChangeableFields, selecthebrewChangeableLabels } from "../RootReducer";
import styles from "./ChangesForm.module.css";
import TextField from '@material-ui/core/TextField';



function ChangesForm({chosenJudge}){

    //const chosenJudge = useSelector(selectJudge);
    const hebrewChangeableFields = useSelector(selecthebrewChangeableFields);
    const hebrewChangeableLabels = useSelector(selecthebrewChangeableLabels);
    const [changes, setChanges] = useState({});
    
    hebrewChangeableFields.forEach((field,index)=> {
        console.log(field, hebrewChangeableLabels[index])
    });
    function handleInput(e){
        let value = e.target.value;
        let name = e.target.name;
    
        setChanges(prev => ({
        ...prev,
        [name]: value,
        id: chosenJudge.id 
        }))
    }

    return(
        <div className={styles.formContainer}>
               <form className={styles.form}>
                {
                    hebrewChangeableFields.map((field,i) => 
                        <TextField 
                            name={field}
                            key={field}
                            className={`muiFieldChanges`} 
                            placeholder={hebrewChangeableLabels[i]}
                            label={chosenJudge ? chosenJudge[field]?.toString() : ""}
                            value={changes[field] || ""}
                            onChange={handleInput} 
                            variant="standard" 
                            />
                    )
                }
                </form>
        </div>
            
    )
}

export default ChangesForm;