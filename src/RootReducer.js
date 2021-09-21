import { createSelector } from "reselect";
import { combineReducers } from "redux";

//Initial States
 
const initStateChosenJudge = {};

const initStateCourts = [{nameEN: "Magistrate", nameHE: "שלום"},
                         {nameEN: "District", nameHE: "מחוזי"},
                         {nameEN: "Supreme", nameHE: "עליון"},
                         {nameEN: "Labor Regional", nameHE: "עבודה אזורי"},
                         {nameEN: "Labor National", nameHE: "עבודה ארצי"},
                        ]

// const initStateChosenCourtType = {};

const initChosenYears = {
                    preChosenYears: [1955, 1965, 1975, 1985, 1995, 2005, 2015],
                    userChosenYears: []
                    }

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

export function yearsReducer(state = initChosenYears, action){
    switch(action.type){

        case "USER_CHANGES_YEARS":

        return {
            ...state,
            userChosenYears: action.years
        }
        
        default:
            return state;
    }
}

export function courtsReducer(state = initStateCourts, action){

    switch(action.type){

        case "COURTS_CHANGE":
            return action.courts;
        
        default:
            return state;
    }

}


//Combined Reducer

export const rootReducer = combineReducers({
    singleJudge: singleJudgeReducer,
    judgesContainer: listReducer,
    chosenYears: yearsReducer,
    courts: courtsReducer
    })

//Selectors

export const selectJudges = state => state.judgesContainer.judges;
export const selectJudge = state => state.singleJudge;
export const selectPreChosenYears = state => state.chosenYears.preChosenYears;
export const selectUserChosenYears = state => state.chosenYears.userChosenYears;
export const selectCourts = state => state.courts;
export const selectCourtsEN = state => state.courts.map(court => court.nameEN);
export const selectCourtsHE = state => state.courts.map(court => court.nameHE);


export const selectGenderDataPreChosenYears = createSelector(
    [selectJudges,selectPreChosenYears],
    (judges, preChosenYears) => {
        let genderCounts = {
            womenCount1955: 0,
            menCount1955: 0,
            womenCount1965: 0,
            menCount1965: 0,
            womenCount1975: 0,
            menCount1975: 0,
            womenCount1985: 0,
            menCount1985: 0,
            womenCount1995: 0,
            menCount1995: 0,
            womenCount2005: 0,
            menCount2005: 0,
            womenCount2015: 0,
            menCount2015: 0
        }

        preChosenYears.forEach(year => {
            //only active judges at that year
            const filteredJudges = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year));
            //count women and men
            filteredJudges.forEach(judge => {
                if(judge.genderEN === "Female"){
                    genderCounts[`womenCount${year}`] ++;
                }else if(judge.genderEN === "Male"){
                    genderCounts[`menCount${year}`] ++;
                }
            });
        });
        return genderCounts;
    }
)

export const selectGenderDataPerCourtPreChosenYears = createSelector(
    [selectJudges,selectPreChosenYears, selectGenderDataPreChosenYears],
    (judges, preChosenYears, genderCounts) => {
        let genderCountsPerCourt = [
            {  
                year: 1955,
                totalWomen: genderCounts.womenCount1955,
                total: genderCounts.womenCount1955 + genderCounts.menCount1955,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0,totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0,totalJudges: 0, percentOfTotal: 0}
                ]
            },
            {  
                year: 1965,
                totalWomen: genderCounts.womenCount1965,
                total: genderCounts.womenCount1965 + genderCounts.menCount1965,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", percentOfAllWomen: 0, count: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0}
                ]
            },
            { 
                year: 1975,
                totalWomen: genderCounts.womenCount1975,
                total: genderCounts.womenCount1975 + genderCounts.menCount1975,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0}
                ]
            },
            {  
                year: 1985,
                totalWomen: genderCounts.womenCount1985,
                total: genderCounts.womenCount1985 + genderCounts.menCount1985,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0}
                ]
            },
            {  
                year: 1995,
                totalWomen: genderCounts.womenCount1995,
                total: genderCounts.womenCount1995 + genderCounts.menCount1995,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0}
                ]
            },
            {  
                year: 2005,
                totalWomen: genderCounts.womenCount2005,
                total: genderCounts.womenCount2005 + genderCounts.menCount2005,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0}
                ]
            },
            {  
                year: 2015,
                totalWomen: genderCounts.womenCount2015,
                total: genderCounts.womenCount2015 + genderCounts.menCount2015,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0,  percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, totalJudges: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, totalJudges: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0}
                ]
            }
        ]

        preChosenYears.forEach((year, index) => {
            //only active judges at that year for each type of court

            const filteredJudgesMagistrate = judges.filter(judge =>  ((judge.everInMagistrateStartYear1 <= year) && (judge.everInMagistrateEndYear1 >= year)) || ((judge.everInMagistrateStartYear2 <= year) && (judge.everInMagistrateEndYear2 >= year)) );
            const filteredJudgesDistrict = judges.filter(judge =>  ((judge.everInDistrictStartYear1 <= year) && (judge.everInDistrictEndYear1 >= year)) || ((judge.everInDistrictStartYear2 <= year) && (judge.everInDistrictEndYear2 >= year)) );
            const filteredJudgesSupreme = judges.filter(judge =>  ((judge.everInSupremeStartYear1 <= year) && (judge.everInSupremeEndYear1 >= year)) || ((judge.everInSupremeStartYear2 <= year) && (judge.everInSupremeEndYear2 >= year)) );
            const filteredJudgesLaborRegional = judges.filter(judge => ((judge.everInLaborRegionalStartYear1 <= year) && (judge.everInLaborRegionalEndYear1 >= year)) || ((judge.everInLaborRegionalStartYear2 <= year) && (judge.everInLaborRegionalEndYear2 >= year)) );
            const filteredJudgesLaborNational = judges.filter(judge => (judge.everInLaborNationalStartYear <= year) && (judge.everInLaborNationalEndYear >= year) );
            
            //total no. of judges in each type of cout for each year

            genderCountsPerCourt[index].countsPerCourt[0].totalJudges = filteredJudgesMagistrate.length;
            genderCountsPerCourt[index].countsPerCourt[1].totalJudges = filteredJudgesDistrict.length;
            genderCountsPerCourt[index].countsPerCourt[2].totalJudges = filteredJudgesSupreme.length;
            
            //labor courts est. in 1969

            if(year >= 1969){
                genderCountsPerCourt[index].countsPerCourt[3].totalJudges = filteredJudgesLaborRegional.length;
                genderCountsPerCourt[index].countsPerCourt[4].totalJudges = filteredJudgesLaborNational.length;
            }

            // no. of women in each type of cout for each year
            
            genderCountsPerCourt[index].countsPerCourt[0].count = filteredJudgesMagistrate.filter(judge => judge.genderEN === "Female").length;
            genderCountsPerCourt[index].countsPerCourt[1].count = filteredJudgesDistrict.filter(judge => judge.genderEN === "Female").length;
            genderCountsPerCourt[index].countsPerCourt[2].count = filteredJudgesSupreme.filter(judge => judge.genderEN === "Female").length;
            
            if(year >= 1969){
            genderCountsPerCourt[index].countsPerCourt[3].count = filteredJudgesLaborRegional.filter(judge => judge.genderEN === "Female").length;
            genderCountsPerCourt[index].countsPerCourt[4].count = filteredJudgesLaborNational.filter(judge => judge.genderEN === "Female").length;
            }

            //calculate percents for each year 
            if(year >= 1969){
                for(let i = 0; i< 5; i++){
                    //percent of women in each court type from all women judges that year
                    genderCountsPerCourt[index].countsPerCourt[i].percentOfAllWomen = ((genderCountsPerCourt[index].countsPerCourt[i].count/ genderCountsPerCourt[index].totalWomen)*100).toFixed(1);
                    //percent of women in each court type from total no. of judges in that court type that year
                    genderCountsPerCourt[index].countsPerCourt[i].percentOfTotal = ((genderCountsPerCourt[index].countsPerCourt[i].count/ genderCountsPerCourt[index].countsPerCourt[i].totalJudges)*100).toFixed(1);
                }
            }else{
                for(let i = 0; i< 3; i++){
                    //percent of women in each court type from all women judges that year
                    genderCountsPerCourt[index].countsPerCourt[i].percentOfAllWomen = ((genderCountsPerCourt[index].countsPerCourt[i].count/ genderCountsPerCourt[index].totalWomen)*100).toFixed(1);
                    //percent of women in each court type from total no. of judges in that court type that year
                    genderCountsPerCourt[index].countsPerCourt[i].percentOfTotal = ((genderCountsPerCourt[index].countsPerCourt[i].count/ genderCountsPerCourt[index].countsPerCourt[i].totalJudges)*100).toFixed(1);
                }
            }

        }); 
        
      return genderCountsPerCourt;
    }
)


export const selectReligionActiveJudges = createSelector(
    selectJudges,
    (judges) => {
        let religionCounts = [{ name:"יהודים", count: 0, percent: 0}, { name: "מוסלמים", count: 0, percent: 0}, {name: "נוצרים", count:0, percent: 0}, {name: "דרוזים", count: 0, percent: 0}, {name:"לא ידוע", count: 0, percent: 0}]
           
            //only active judges today
        
            const filteredJudges = judges.filter(judge => judge.status2017EN === "Active");
            const total = filteredJudges.length;

            //count judges by religion

            filteredJudges.forEach(judge => {
                if(judge.religionEN === "Jew"){
                    religionCounts[0].count ++;
                }else if(judge.religionEN === "Muslim"){
                    religionCounts[1].count ++;
                }else if(judge.religionEN === "Christian"){
                    religionCounts[2].count ++;
                }else if(judge.religionEN === "Druze"){
                    religionCounts[3].count ++;
                }else if(judge.religionEN === "Unknown"){
                    religionCounts[4].count ++;
                }
            });

            religionCounts.forEach(object => {
                object.percent = `${((object.count / total)*100).toFixed(1)}%`;
            }) 

        return religionCounts;
    }
)


//Action Creators



export const loadJudges = (judges) => {
    return{
        type:"LOAD_JUDGES",
        judges: judges
    }
}

export const changeJudge = (judge) => {
   return{
    type: "CHANGE_JUDGE",
    judge: judge
   }
}

export const userChangesYears = (userYears) => {
    return{
    type: "USER_CHANGES_YEARS",
    userYears: userYears
    }
}

export const courtsChange = (courts) => {
    return{
        type: "COURTS_CHANGE",
        courts: courts
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