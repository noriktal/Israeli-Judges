import { createSelector } from "reselect";
import { combineReducers } from "redux";

//Initial States
 
const initStateChosenJudge = {};


const initStateFetch = {
    loading: false,
    judges: [],
    error: ""
}

//Reducers

export function singleJudgeReducer(state = initStateChosenJudge, action){
    switch(action.type){

        case "CHANGE_JUDGE":
            return action.judge;
        default:
            return state;
    }
}

export function listReducer(state = initStateFetch, action){
    switch(action.type){
        case "FETCH_JUDGES_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LOAD_JUDGES":
            
            return {
                loading: false,
                judges: action.judges,
                error: ""
            }
        case "FETCH_JUDGES_FAILED":
            return {
                loading: false,
                judges: [],
                error: action.error
            }
        default:
            return state;
    }
}


//Combined Reducer

export const rootReducer = combineReducers({
    singleJudge: singleJudgeReducer,
    judgesContainer: listReducer,
    })

//Selectors

export const selectJudges = state => state.judgesContainer.judges;
export const selectJudge = state => state.singleJudge;


//Action Creators

// export const fetchJudgesRequest = () => {
//     return{
//         type:"FETCH_JUDGES_REQUEST"
//     }
// }

export const loadJudges = (judges) => {
    return{
        type:"LOAD_JUDGES",
        judges: judges
    }
}

// export const fetchJudgesFailed = (message) => {
//     return{
//         type:"FETCH_JUDGES_FAILED",
//         error: message
//     }
// }

export const changeJudge = (judge) => {
   return{
    type: "CHANGE_JUDGE",
    judge: judge
   }
}


// Action Creators- thunk functions

    

// export function fetchJudges(url){
//     return async function fethcJudgesThunk(dispatch){
 
//              dispatch(fetchJudgesRequest());
//              console.log("sending request to db");
//         try{ 
//              const response = await fetch(url); 
 
//              const judgesContainer = await response.json();
//              dispatch(loadJudges(judgesContainer.judges));
     
//          }catch(err){
//              console.log(err.message, "error from here");
//              dispatch(fetchJudgesFailed(err.message))
//          };
 
//      }
//  }