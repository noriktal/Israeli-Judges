//import { createSelector } from "reselect";
//import { combineReducers } from "redux";

//Initial States

const initStateFetch = {
    loading: false,
    judges: [],
    error: ""
}

//Reducers

export default function rootReducer(state = initStateFetch, action){
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

//Selectors

//Action Creators

// Action Creators- thunk functions

    

// export function fetchJudges(url){
//     return async function fethcJudgesThunk(dispatch){
 
//              dispatch(fetchJudgesRequest());
//              console.log("sending request to db");
//         try{ 
//              const response = await fetch(url); 
 
//              const judges = await response.json();
//              console.log("judges container:", judges.length);
//              dispatch(loadJudges());
     
//          }catch(err){
//              console.log(err.message);
//              dispatch(fetchJudgesFailed(err.message))
//          };
 
//      }
//  }