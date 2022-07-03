import React from 'react';
import { useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { selectSupremeJudges } from "../RootReducer";


const data = [{year: "1991", judges: [{name: "A", age: 23},{name: "B", age: 53}]}, {year: "1971", judges: [{name: "C", age: 23},{name: "D", age: 53}]}]

function TempForm() {

    const supremeJudges = useSelector(selectSupremeJudges);
    console.log("supremeJudges", supremeJudges)
    const handleClick = async () => {
        console.log("sending request to db");
        console.log("JSON.stringify(data)",JSON.stringify(supremeJudges))
        try{ 
             const response = await fetch("https://sheet.best/api/sheets/e858240e-4e30-4137-ae38-c2a667182454", {
                 method: "POST",
                 mode: "cors",
                 headers: {
                  'Content-Type': 'application/json',
                },
                 body: JSON.stringify(supremeJudges),
             }) 
             const usableResponse = await response.json();
             console.log("response from postJudgesResult",usableResponse);
     
         }catch(err){
            console.log(err.message)
         };
 
    }

  return (
    <div>
        <Button onClick={() => handleClick()} variant="contained">
           ייצא שופטי עליון לפי שנים
        </Button>
        
    </div>
  )
}

export default TempForm