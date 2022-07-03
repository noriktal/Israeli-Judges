import { createSelector } from "reselect";
import { combineReducers } from "redux";
import clipRectangle from "d3-geo/src/clip/rectangle";

//Initial States
 

const initStateCourts = [{nameEN: "Magistrate", nameHE: "שלום"},
                         {nameEN: "District", nameHE: "מחוזי"},
                         {nameEN: "Supreme", nameHE: "עליון"},
                         {nameEN: "Labor Regional", nameHE: "עבודה אזורי"},
                         {nameEN: "Labor National", nameHE: "עבודה ארצי"},
                        ];

const initStateChosenCourt = "";

const initStateUniCollege = [];

const initStateEthnicities = [ 
                              {nameEN: "Ashkenazi", nameHE: "אשכנזי"},
                              {nameEN: "Mizrahi", nameHE: "מזרחי"},
                              {nameEN: "Ethiopian", nameHE: "אתיופי"},
                              {nameEN: "Ex USSR", nameHE: "בריה''מ לשעבר"},
                              {nameEN: "None-Jewish", nameHE: "לא יהודי"},
                              {nameEN: "Unknown", nameHE: "לא ידוע"}
                            ];

// const initStateChosenCourtType = {};

const initChosenYears = {
                    preChosenYears: [1955, 1965, 1975, 1985, 1995, 2005, 2015],
                    userChosenYear: null
                    }

const initStateJudges = [];

const initStateSelectedJudge = {};

const initStateJudgeFields = {allFields: ["id","status2021EN","status2021HE","surnameHE","givenNameHE",
                                "surnameEN","givenNameEN","genderEN","genderHE","nationalityEN",
                                "nationalityHE","religionEN","religionHE","religiousityEN","religiousityHE",
                                "ethnicityEN","ethnicityHE","birthCountryEN","birthCountryHE","birthYear",
                                "majorChildhoodCityHE","majorChildhoodCityEN","citySocio","highschoolHE","educationTypeEN",
                                "educationTypeHE","mainLegalEducationEN","mainLegalEducationHE","mainLegalEducationTypeInstEN","mainLegalEducationTypeInstHE",
                                "YearFisrtDegreeGraduation","typeAdvancedLegalEducationEN","typeAdvancedLegalEducationHE",
                                "universityAdvancedLegalEducationEN","universityAdvancedLegalEducationHE","yearAdvancedLegalEducation",
                                "otherAdvancedEducationHE","placeOfInternshipEN","placeOfInternshipHE","yearOfBecomingLawyer",
                                "lastPositionBeforeJudgeshipEN","position1EN","position1HE","court1NameEN","court1NameHE",
                                "position1Year","position2EN","position2HE","court2NameEN","court2NameHE","position2Year",
                                "position3EN","position3HE","court3NameEN","court3NameHE","position3Year", "position4EN",
                                "position4HE","court4NameEN","court4NameHE","position4Year","position5EN", "position5HE",
                                "court5NameEN","court5NameHE", "position5Year", "position6EN", "position6HE","court6NameEN",
                                "court6NameHE","position6Year", "position7EN", "position7HE", "court7NameEN","court7NameHE", "position7Year",
                                "position8EN", "position8HE","court8NameEN", "court8NameHE","position8Year", "endOfCareerEN",
                                "endOfCareerHE","everInSupremeCourt","everInSupremeStartYear1","everInSupremeEndYear1","everInSupremeStartYear2",
                                "everInSupremeEndYear2", "everInDistrict","everInDistrictStartYear1","everInDistrictEndYear1", "everInDistrictStartYear2",
                                "everInDistrictEndYear2","everInMagistrate","everInMagistrateStartYear1","everInMagistrateEndYear1","everInMagistrateStartYear2",
                                "everInMagistrateEndYear2","everInLaborRegional","everInLaborRegionalStartYear1","everInLaborRegionalEndYear1","everInLaborRegionalStartYear2",
                                "everInLaborRegionalEndYear2","everInLaborNational","everInLaborNationalStartYear","everInLaborNationalEndYear",
                                "endOfCareerYear","comments","ageOfEnteringJudgeship","xpInFirstNom","ageOfRetirement","JudgeshipxpInRet"
                                ],
                                hebrewFields: ["id","status2021HE","surnameHE","givenNameHE","genderHE","nationalityHE","religionHE","religiousityHE","ethnicityHE","birthCountryHE","birthYear",
                                "majorChildhoodCityHE","citySocio","highschoolHE","educationTypeHE","mainLegalEducationHE","mainLegalEducationTypeInstHE",
                                "YearFisrtDegreeGraduation","typeAdvancedLegalEducationHE","universityAdvancedLegalEducationHE","yearAdvancedLegalEducation",
                                "otherAdvancedEducationHE","placeOfInternshipHE","yearOfBecomingLawyer","position1HE","court1NameHE","position1Year","position2HE","court2NameHE","position2Year",
                                "position3HE","court3NameHE","position3Year","position4HE","court4NameHE","position4Year", "position5HE","court5NameHE", "position5Year", "position6HE",
                                "court6NameHE","position6Year", "position7HE","court7NameHE", "position7Year","position8HE", "court8NameHE","position8Year","endOfCareerHE","everInSupremeCourt","everInSupremeStartYear1","everInSupremeEndYear1","everInSupremeStartYear2",
                                "everInSupremeEndYear2", "everInDistrict","everInDistrictStartYear1","everInDistrictEndYear1", "everInDistrictStartYear2","everInDistrictEndYear2","everInMagistrate","everInMagistrateStartYear1","everInMagistrateEndYear1","everInMagistrateStartYear2",
                                "everInMagistrateEndYear2","everInLaborRegional","everInLaborRegionalStartYear1","everInLaborRegionalEndYear1","everInLaborRegionalStartYear2","everInLaborRegionalEndYear2","everInLaborNational","everInLaborNationalStartYear","everInLaborNationalEndYear",
                                "endOfCareerYear","ageOfEnteringJudgeship","xpInFirstNom","ageOfRetirenment","JudgeshipxpInRet"
                                ],
                                hebrewLabels:["מספר זיהוי","פעיל כיום","שם משפחה","שם פרטי","מגדר",
                                "לאום","דת","דתיות","אתניות-עדה","ארץ-איזור לידה","שנת לידה",
                                "עיר ילדות","עשירון עיר ילדות","בית ספר תיכון","זרם חינוכי",
                                "השכלה משפטית עיקרית","השכלה משפטית עיקרית- סוג מוסד",
                                "שנת סיום תואר ראשון","סוג השכלה משפטית מתקדמת",
                                "מוסד השכלה משפטית מתקדמת","שנת השכלה משפטית מתקדמת",
                                "השכלה מתקדמת נוספת","מקום התמחות","שנת התחלה כעורך דין",
                                "תפקיד ראשון","בימש תפקיד ראשון",
                                "שנת תפקיד ראשון","תפקיד שני","בימש תפקיד שני","שנת תפקיד שני",
                                "תפקיד שלישי","בימש תפקיד שלישי","שנת תפקיד שלישי",
                                "תפקיד רביעי","בימש תפקיד רביעי","שנת תפקיד רביעי", "תפקיד חמישי",
                                "בימש תפקיד חמישי", "שנת תפקיד חמישי", "תפקיד שישי",
                                "בימש תפקיד שישי","שנת תפקיד שישי", "תפקיד שביעי","בימש תפקיד שביעי", "שנת תפקיד שביעי",
                                 "תפקיד שמיני", "בימש תפקיד שמיני","שנת תפקיד שמיני",
                                "סיום קריירה","מינוי בעליון","מינוי בעליון- שנת התחלה1","מינוי בעליון- שנת סיום1","מינוי בעליון- שנת התחלה2",
                                "מינוי בעליון- שנת סיום2", "מינוי במחוזי","מינוי במחוזי- שנת התחלה1","מינוי במחוזי- שנת סיום 1", "מינוי במחוזי- שנת התחלה2","מינוי במחוזי- שנת סיום2",
                                "מינוי בשלום","מינוי בשלום- שנת התחלה1","מינוי בשלום-שנת סיום1","מינוי בשלום- שנת התחלה2",
                                "מינוי בשלום- שנת סיום2","מינוי בעבודה אזורי","מינוי בעבודה אזורי- שנת התחלה1","מינוי בעבודה איזורי- שנת סיום1","מינוי בעבודה אזורי- שנת התחלה2",
                                "מינוי בעבודה אזורי- שנת סיום2","מינוי בעבודה ארצי","מינוי בעבודה ארצי- שנת התחלה1","מינוי בעבודה ארצי- שנת סיום1",
                                "שנת סוף קריירה","גיל כניסה לשיפוט","ניסיון במינוי ראשון","גיל בפרישה","ניסיון בפרישה"],
                                hebrewChangeableFields: ["status2021HE","surnameHE","givenNameHE","surnameEN","givenNameEN","genderHE","nationalityHE","religionHE","religiousityHE","ethnicityHE","birthCountryHE","birthYear",
                                "majorChildhoodCityHE","citySocio","highschoolHE","educationTypeHE","mainLegalEducationHE","mainLegalEducationTypeInstHE",
                                "YearFisrtDegreeGraduation","typeAdvancedLegalEducationHE","universityAdvancedLegalEducationHE","yearAdvancedLegalEducation",
                                "otherAdvancedEducationHE","placeOfInternshipHE","yearOfBecomingLawyer","position1HE","court1NameHE","position1Year","position2HE","court2NameHE","position2Year",
                                "position3HE","court3NameHE","position3Year","position4HE","court4NameHE","position4Year", "position5HE","court5NameHE", "position5Year", "position6HE",
                                "court6NameHE","position6Year", "position7HE","court7NameHE", "position7Year","position8HE", "court8NameHE","position8Year","endOfCareerHE",
                                "endOfCareerYear"
                                ],
                                hebrewChangeableLabels:["פעיל כיום","שם משפחה","שם פרטי","שם משפחה-אנגלית","שם פרטי- אנגלית","מגדר",
                                "לאום","דת","דתיות","אתניות-עדה","ארץ-איזור לידה","שנת לידה",
                                "עיר ילדות","עשירון עיר ילדות","בית ספר תיכון","זרם חינוכי",
                                "השכלה משפטית עיקרית","השכלה משפטית עיקרית- סוג מוסד",
                                "שנת סיום תואר ראשון","סוג השכלה משפטית מתקדמת",
                                "מוסד השכלה משפטית מתקדמת","שנת השכלה משפטית מתקדמת",
                                "השכלה מתקדמת נוספת","מקום התמחות","שנת התחלה כעורך דין",
                                "תפקיד ראשון","בימש תפקיד ראשון",
                                "שנת תפקיד ראשון","תפקיד שני","בימש תפקיד שני","שנת תפקיד שני",
                                "תפקיד שלישי","בימש תפקיד שלישי","שנת תפקיד שלישי",
                                "תפקיד רביעי","בימש תפקיד רביעי","שנת תפקיד רביעי", "תפקיד חמישי",
                                "בימש תפקיד חמישי", "שנת תפקיד חמישי", "תפקיד שישי",
                                "בימש תפקיד שישי","שנת תפקיד שישי", "תפקיד שביעי","בימש תפקיד שביעי", "שנת תפקיד שביעי",
                                 "תפקיד שמיני", "בימש תפקיד שמיני","שנת תפקיד שמיני",
                                "סיום קריירה",],
                                englishFields: ["id","status2021EN",
                                "surnameEN","givenNameEN","genderEN","nationalityEN",
                                "religionEN","religiousityEN",
                                "ethnicityEN","birthCountryEN","birthYear",
                                "majorChildhoodCityEN","citySocio","educationTypeEN",
                                "mainLegalEducationEN","mainLegalEducationTypeInstEN",
                                "YearFisrtDegreeGraduation","typeAdvancedLegalEducationEN",
                                "universityAdvancedLegalEducationEN","yearAdvancedLegalEducation",
                                "placeOfInternshipEN","yearOfBecomingLawyer",
                                "lastPositionBeforeJudgeshipEN","position1EN","court1NameEN",
                                "position1Year","position2EN","court2NameEN","position2Year",
                                "position3EN","court3NameEN","position3Year", "position4EN",
                                "court4NameEN","position4Year","position5EN", 
                                "court5NameEN", "position5Year", "position6EN", "court6NameEN",
                                "position6Year", "position7EN",  "court7NameEN", "position7Year",
                                "position8EN", "court8NameEN", "position8Year", "endOfCareerEN",
                                "everInSupremeCourt","everInSupremeStartYear1","everInSupremeEndYear1","everInSupremeStartYear2",
                                "everInSupremeEndYear2", "everInDistrict","everInDistrictStartYear1","everInDistrictEndYear1", "everInDistrictStartYear2",
                                "everInDistrictEndYear2","everInMagistrate","everInMagistrateStartYear1","everInMagistrateEndYear1","everInMagistrateStartYear2",
                                "everInMagistrateEndYear2","everInLaborRegional","everInLaborRegionalStartYear1","everInLaborRegionalEndYear1","everInLaborRegionalStartYear2",
                                "everInLaborRegionalEndYear2","everInLaborNational","everInLaborNationalStartYear","everInLaborNationalEndYear",
                                "endOfCareerYear","ageOfEnteringJudgeship","xpInFirstNom","ageOfRetirement","JudgeshipxpInRet"
                                ],
                                englishLabels:["ID","Currently Active",
                                "Surname","Given Name","Gender","Nationality",
                                "Religion","Religiousity",
                                "Ethnicity","Birth Country","Birth Year",
                                "Major Childhood City","City Socio","Education Type",
                                "Main Legal Education","Main Legal Education-Type",
                                "Year of Fisrt Degree Graduation","Advanced Legal Education Type",
                                "University of Advanced Legal Education","Year of Advanced Legal Education",
                                "Place of Internship","Year of Becoming Lawyer",
                                "Last Position Before Judgeship","Position1","Court1 Name",
                                "Position1 Year","Position2","Court2 Name","Position2 Year",
                                "Position3","Court3 Name","Position3 Year", "Position4",
                                "Court4 Name","Position4 Year","Position5", 
                                "Court5 Name", "Position5 Year", "Position6", "Court6 Name",
                                "Position6 Year", "Position7",  "Court7 Name", "Position7 Year",
                                "Position8", "Court8 Name", "Position8 Year", "End of Career",
                                "Ever in Supreme Court","Ever in Supreme Start Year1","Ever in Supreme End Year1","Ever in Supreme Start Year2",
                                "Ever In Supreme End Year2", "Ever in District","Ever in District Start Year1","Ever in District End Year1", "everInDistrictStartYear2",
                                "Ever in District End Year2","Ever in Magistrate","Ever in Magistrate Start Year1","Ever in Magistrate End Year1","Ever in Magistrate Start Year2",
                                "Ever in Magistrate End Year2","Ever in Labor Regional","Ever in Labor Regional Start Year1","Ever in Labor Regional End Year1","Ever in Labor Regional Start Year2",
                                "Ever in Labor Regional End Year2","Ever in Labor National","Ever in Labor National Start Year","Ever in Labor National End Year",
                                "End Of Career Year","Age of Entering Judgeship","Experience in First Nomination","Age of Retirement","Judgeship Experience in Retirement"]
                        }

const initStateMap = {
    loading: false,
    mapData: {},
    error: ""
};

//Reducers

export function singleJudgeReducer(state = initStateSelectedJudge, action){
    switch(action.type){

        case "CHANGE_JUDGE":
            return action.judge;
        default:
            return state;
    }
}

export function listReducer(state = initStateJudges, action){
    switch(action.type){
        
        case "LOAD_JUDGES":
            
            return [...action.judges]
        
        default:
            return state;
    }
}

export function fieldsReducer(state = initStateJudgeFields, action){
    switch(action.type){
        default:
                return state;
    }
}

export function mapReducer(state = initStateMap, action){
    switch(action.type){
        case "FETCH_MAP_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LOAD_MAP":
            
            return {
                loading: false,
                mapData: action.mapData,
                error: ""
            }
        case "FETCH_MAP_FAILED":
            return {
                loading: false,
                mapData: {},
                error: action.error
            }
        default:
            return state;
    }
}

export function uniCollegeReducer(state = initStateUniCollege, action){
    switch(action.type){

        case "LOAD_UNICOLLEGES":
            return [...action.uniColleges];
            
        default:
            return state;
    }
}

export function yearsReducer(state = initChosenYears, action){
    switch(action.type){

        case "CHANGE_YEAR":
            return {
                ...state,
                userChosenYear: action.year
            }
        
        default:
            return state;
    }
}


export function courtsReducer(state = initStateCourts, action){

    switch(action.type){
        default:
            return state;
    }

}

export function ethnicitiesReducer(state = initStateEthnicities, action){

    switch(action.type){
        default:
            return state;
    }

}


export function chosenCourtReducer(state = initStateChosenCourt, action){

    switch(action.type){

        case "CHANGE_COURT":
            return action.court;
        
        default:
            return state;
    }

}


//Combined Reducer

export const rootReducer = combineReducers({
    singleJudge: singleJudgeReducer,
    judges: listReducer,
    fields: fieldsReducer,
    years: yearsReducer,
    courts: courtsReducer,
    chosenCourt: chosenCourtReducer,
    ethnicities: ethnicitiesReducer,
    mapContainer: mapReducer,
    uniColleges: uniCollegeReducer
    })

//Selectors

export const selectJudges = state => state.judges;
export const selectJudge = state => state.singleJudge;
export const selectAllFields = state => state.fields.allFields;
export const selectHebrewFields = state => state.fields.hebrewFields;
export const selecthebrewChangeableFields = state => state.fields.hebrewChangeableFields;
export const selecthebrewChangeableLabels = state => state.fields.hebrewChangeableLabels;
export const selectEnglishFields = state => state.fields.englishFields;
export const selectFieldLabelsHE = state => state.fields.hebrewLabels;
export const selectFieldLabelsEN = state => state.fields.englishLabels;
export const selectPreChosenYears = state => state.years.preChosenYears;
export const selectUserChosenYear = state => state.years.userChosenYear;
export const selectCourts = state => state.courts;
export const selectCourtsEN = state => state.courts.map(court => court.nameEN);
export const selectCourtsHE = state => state.courts.map(court => court.nameHE);
export const selectEthnicities = state => state.ethnicities;
export const selectEthnicitiesEN = state => state.ethnicities.map(ethnicity => ethnicity.nameEN);
export const selectEthnicitiesHE = state => state.ethnicities.map(ethnicity => ethnicity.nameHE);

export const selectMapLoadState = state => state.mapContainer.loading;
export const selectMapData = state => state.mapContainer.mapData;
export const selectMapError = state => state.mapContainer.error;
export const selectUniColleges = state => state.uniColleges;


export const selectActiveJudgesCountPreChosenYears = createSelector(
    [selectJudges,selectPreChosenYears],
    (judges, preChosenYears) => {
       let activeJudgesCounts = [];
       preChosenYears.forEach(year => {
           const yearObject = {year: year, count: 0};
           yearObject.count = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year)).length;
           activeJudgesCounts.push(yearObject);
       })

       return activeJudgesCounts;
    }
)

// data structure -> [{year: 1955, total: x, places: [{nameEN: "uni1", nameHE: "אוני1", abbreviationEN: "", abbreviationHE: "", count: y, percent: z, longitude: i, latitude: j}, {}...] }]
export const selectMainLegalEducationPlacePreChosenYears = createSelector(
    [selectUniColleges,selectPreChosenYears, selectJudges],
    (uniColleges, preChosenYears, judges) => {

       let activeJudgesCountsPerPlacePerYear = [];
       preChosenYears.forEach(year => {
           const yearObject = {year: year, total: 0, judges:[], places: []};
           const activeJudgesIsraelSchooling = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year) && (judge.mainLegalEducationTypeInstEN !== "Abroad") && (judge.mainLegalEducationTypeInstEN !== "Unknown") );
           yearObject.judges = activeJudgesIsraelSchooling;
           yearObject.total = activeJudgesIsraelSchooling.length;
           uniColleges.forEach(place => {
            const placeCount = activeJudgesIsraelSchooling.filter(judge => judge.mainLegalEducationEN === place.nameEN).length;
            const placePercent = parseFloat(((placeCount / yearObject.total) * 100).toFixed(1))
            const placeObject ={nameEN: place.nameEN, nameHE:place.nameHE, abbreviationHE:place.abbreviationHE,abbreviationEN:place.abbreviationEN, count: placeCount, percent:placePercent, longitude:place.longitude, latitude: place.latitude}
            yearObject.places.push(placeObject);
           })
           
           activeJudgesCountsPerPlacePerYear.push(yearObject);
       })

       return activeJudgesCountsPerPlacePerYear;
    }
)

// data structure -> [{year: 1955, globalTotal: c, relevantTotal: x (= no. of active judges with that info known), countUnknowns: a, percentUnknowns:b, countUni: 0, countCollege:0, percentUni: 0, percentCollege: 0}, {}...]
export const selectMainLegalEducationTypePreChosenYears = createSelector(
    [selectPreChosenYears, selectJudges],
    (preChosenYears, judges) => {
        
        const allYearsCounts = [];
        
        preChosenYears.forEach(year => {
           
            let yearObject = {};
            
            //only active judges at that year
            const activeJudges = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year));
            yearObject.globalTotal = activeJudges.length;
            yearObject.year = year;

            //count Unis and Colleges

            const filteredJudgesUni = activeJudges.filter(judge =>  judge.mainLegalEducationTypeInstEN === "University");
            const filteredJudgesCollege = activeJudges.filter(judge =>  judge.mainLegalEducationTypeInstEN === "College");

            
            yearObject.judgesUni = filteredJudgesUni;
            yearObject.countUni = filteredJudgesUni.length;
            yearObject.judgesCollege = filteredJudgesCollege;
            yearObject.countCollege = filteredJudgesCollege.length;
            yearObject.relevantTotal = yearObject.countUni +  yearObject.countCollege;
            yearObject.countUnknowns = yearObject.globalTotal - yearObject.relevantTotal;
            yearObject.percentUnknowns = parseFloat(((yearObject.countUnknowns / yearObject.globalTotal)*100).toFixed(1));
            
            //percents Unis and Colleges
            
            yearObject.percentUni =  parseFloat(((yearObject.countUni / yearObject.relevantTotal) * 100).toFixed(1));
            yearObject.percentCollege = parseFloat((100 - yearObject.percentUni).toFixed(1));

            allYearsCounts.push(yearObject);
        
        })

        return allYearsCounts;

})

//structure: [{year: year, totalGlobal:x, totalRelevant:x, countAbroad:x, countIsrael:x, percentAbroad:x, percentIsrael:x, countUnknowns, percentUnknowns}]
export const selectMainLegalEducationSourcePreChosenYears = createSelector(
    [selectPreChosenYears, selectJudges],
    (preChosenYears, judges) => {
        const allYearsCounts = [];

        preChosenYears.forEach(year => {
           
            let yearObject = {};
            
            //only active judges at that year
            const activeJudges = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year));
            yearObject.globalTotal = activeJudges.length;
            yearObject.year = year;

            yearObject.judgesAbroad = activeJudges.filter(judge =>  (judge.mainLegalEducationEN === "North America") || (judge.mainLegalEducationEN === "Britain and its Colonies") || (judge.mainLegalEducationEN === "Eastern Europe") || (judge.mainLegalEducationEN === "Europe - other") || (judge.mainLegalEducationEN === "Germany" || (judge.mainLegalEducationEN === "Abroad (other)" || (judge.mainLegalEducationEN === "Middle East (Asia)"))));
            yearObject.countAbroad = yearObject.judgesAbroad.length;
            yearObject.relevantTotal = activeJudges.filter(judge => judge.mainLegalEducationEN !== "Unknown").length;
            yearObject.judgesIsrael = activeJudges.filter(judge => (! yearObject.judgesAbroad.includes(judge) && (judge.mainLegalEducationEN !== "Unknown")));
            yearObject.countIsrael = yearObject.relevantTotal - yearObject.countAbroad;

            yearObject.countUnknowns = yearObject.globalTotal - yearObject.relevantTotal;

             //percents Abroad, Israel, Unknowns
             yearObject.percentAbroad = parseFloat(((yearObject.countAbroad / yearObject.relevantTotal) * 100).toFixed(1));
             yearObject.percentIsrael = parseFloat(((yearObject.countIsrael / yearObject.relevantTotal) * 100).toFixed(1));
             yearObject.percentUnknowns = parseFloat(((yearObject.countUnknowns / yearObject.relevantTotal) * 100).toFixed(1));
        
             allYearsCounts.push(yearObject);
        })
       
        return allYearsCounts;
    })
            

export const selectGenderDataPreChosenYears = createSelector(
    [selectJudges,selectPreChosenYears],
    (judges, preChosenYears) => {
        
        const allYearsCounts = [];
                
        preChosenYears.forEach(year => {

            let yearObject = {year: "", womenCount: 0, menCount: 0, totalCount: 0, percentWomen: 0}
            //only active judges at that year
            const activeJudges = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year));
           
            yearObject.totalCount = activeJudges.length;
            yearObject.year = year;
            

            //count women and men
            activeJudges.forEach(judge => {
                if(judge.genderEN === "Female"){
                    yearObject.womenCount ++;
                }else{
                    yearObject.menCount ++;
                };
            });

            //calculate percent of women
            yearObject.percentWomen = parseFloat(((yearObject.womenCount / yearObject.totalCount) * 100).toFixed(1));

            allYearsCounts.push(yearObject);
        });
        return allYearsCounts;
    }
)

export const selectGenderDataPerCourtPreChosenYears = createSelector(
    [selectJudges,selectPreChosenYears, selectGenderDataPreChosenYears],
    (judges, preChosenYears, genderCounts) => {
        let genderCountsAllCourts = [];
        
        preChosenYears.forEach((year, index) => {

            let yearObject = {  
                year: year,
                totalWomen: genderCounts[index].womenCount,
                total: genderCounts[index].totalCount,
                countsPerCourt: [
                {nameEN: "Magistrate", nameHE: "שלום",  count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "District", nameHE: "מחוזי", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Supreme", nameHE: "עליון", count: 0, percentOfAllWomen: 0, totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor Regional", nameHE: "עבודה אזורי", count: 0, percentOfAllWomen: 0,totalJudges: 0, percentOfTotal: 0},
                {nameEN: "Labor National",nameHE: "עבודה ארצי", count: 0, percentOfAllWomen: 0,totalJudges: 0, percentOfTotal: 0}
                ]
            }
            //only active judges at that year for each type of court

            const filteredJudgesMagistrate = judges.filter(judge =>  ((judge.everInMagistrateStartYear1 <= year) && (judge.everInMagistrateEndYear1 >= year)) || ((judge.everInMagistrateStartYear2 <= year) && (judge.everInMagistrateEndYear2 >= year)) );
            const filteredJudgesDistrict = judges.filter(judge =>  ((judge.everInDistrictStartYear1 <= year) && (judge.everInDistrictEndYear1 >= year)) || ((judge.everInDistrictStartYear2 <= year) && (judge.everInDistrictEndYear2 >= year)) );
            const filteredJudgesSupreme = judges.filter(judge =>  ((judge.everInSupremeStartYear1 <= year) && (judge.everInSupremeEndYear1 >= year)) || ((judge.everInSupremeStartYear2 <= year) && (judge.everInSupremeEndYear2 >= year)) );
            const filteredJudgesLaborRegional = judges.filter(judge => ((judge.everInLaborRegionalStartYear1 <= year) && (judge.everInLaborRegionalEndYear1 >= year)) || ((judge.everInLaborRegionalStartYear2 <= year) && (judge.everInLaborRegionalEndYear2 >= year)) );
            const filteredJudgesLaborNational = judges.filter(judge => (judge.everInLaborNationalStartYear <= year) && (judge.everInLaborNationalEndYear >= year) );
            
            //total no. of judges in each type of court for each year

            yearObject.countsPerCourt[0].totalJudges = filteredJudgesMagistrate.length;
            yearObject.countsPerCourt[1].totalJudges = filteredJudgesDistrict.length;
            yearObject.countsPerCourt[2].totalJudges = filteredJudgesSupreme.length;
            
            //labor courts est. in 1969

            if(year >= 1969){
                yearObject.countsPerCourt[3].totalJudges = filteredJudgesLaborRegional.length;
                yearObject.countsPerCourt[4].totalJudges = filteredJudgesLaborNational.length;
            }

            // no. of women in each type of cout for each year
            
            yearObject.countsPerCourt[0].count = filteredJudgesMagistrate.filter(judge => judge.genderEN === "Female").length;
            yearObject.countsPerCourt[1].count = filteredJudgesDistrict.filter(judge => judge.genderEN === "Female").length;
            yearObject.countsPerCourt[2].count = filteredJudgesSupreme.filter(judge => judge.genderEN === "Female").length;
            
            if(year >= 1969){
                yearObject.countsPerCourt[3].count = filteredJudgesLaborRegional.filter(judge => judge.genderEN === "Female").length;
                yearObject.countsPerCourt[4].count = filteredJudgesLaborNational.filter(judge => judge.genderEN === "Female").length;
            }

            //calculate percents for each year 
            if(year >= 1969){
                for(let i = 0; i< 5; i++){
                    //percent of women in each court type from all women judges that year
                    yearObject.countsPerCourt[i].percentOfAllWomen = ((yearObject.countsPerCourt[i].count/ yearObject.totalWomen)*100).toFixed(1);
                    //percent of women in each court type from total no. of judges in that court type that year
                    yearObject.countsPerCourt[i].percentOfTotal = ((yearObject.countsPerCourt[i].count/ yearObject.countsPerCourt[i].totalJudges)*100).toFixed(1);
                }
            }else{
                for(let i = 0; i< 3; i++){
                    //percent of women in each court type from all women judges that year
                    yearObject.countsPerCourt[i].percentOfAllWomen = ((yearObject.countsPerCourt[i].count/ yearObject.totalWomen)*100).toFixed(1);
                    //percent of women in each court type from total no. of judges in that court type that year
                    yearObject.countsPerCourt[i].percentOfTotal = ((yearObject.countsPerCourt[i].count/ yearObject.countsPerCourt[i].totalJudges)*100).toFixed(1);
                }
            }

            genderCountsAllCourts.push(yearObject);
        }); 
        
      return genderCountsAllCourts;
    }
)

//data structure: [{year:year, totalGlobal, totalRelevant}, {}...]
export const selectEthnicityPreChosenYears = createSelector(
    [selectJudges,selectPreChosenYears],
    (judges, preChosenYears) => {
        
        const allYearsCounts = [];
                
        preChosenYears.forEach(year => {

            let yearObject = {};
            //only active judges at that year
            const activeJudges = judges.filter(judge => (judge.position1Year <= year) && (judge.endOfCareerYear >= year));
            yearObject.globalTotal = activeJudges.length;
            yearObject.year = year;
           
            //count ethnicities, unknowns
            yearObject.judgesAshkenazi = activeJudges.filter(judge =>  judge.ethnicityEN === "Ashkenazi");
            yearObject.countAshkenazi = yearObject.judgesAshkenazi.length;
            yearObject.judgesMizrahi = activeJudges.filter(judge =>  judge.ethnicityEN === "Mizrahi");
            yearObject.countMizrahi = yearObject.judgesMizrahi.length;
            yearObject.judgesEthiopian= activeJudges.filter(judge =>  judge.ethnicityEN === "Ethiopian");
            yearObject.countEthiopian = yearObject.judgesEthiopian.length;
            yearObject.judgesExUSSR= activeJudges.filter(judge =>  judge.ethnicityEN === "Ex USSR");
            yearObject.countExUSSR = yearObject.judgesExUSSR.length;
            yearObject.judgesNoneJewish = activeJudges.filter(judge =>  judge.ethnicityEN === "None-Jewish");
            yearObject.countNoneJewish = yearObject.judgesNoneJewish.length;
            yearObject.relevantTotal = activeJudges.filter(judge => judge.ethnicityEN !== "Unknown").length;
            yearObject.countUnknowns = yearObject.globalTotal - yearObject.relevantTotal;

            //calculate percent ethnicities, unknowns
            yearObject.percentAshkenazi = parseFloat(((yearObject.countAshkenazi / yearObject.globalTotal) * 100).toFixed(1));
            yearObject.percentMizrahi = parseFloat(((yearObject.countMizrahi / yearObject.globalTotal) * 100).toFixed(1));
            yearObject.percentEthiopian = parseFloat(((yearObject.countEthiopian / yearObject.globalTotal) * 100).toFixed(1));
            yearObject.percentExUSSR = parseFloat(((yearObject.countExUSSR / yearObject.globalTotal) * 100).toFixed(1));
            yearObject.percentNoneJewish = parseFloat(((yearObject.countNoneJewish / yearObject.globalTotal) * 100).toFixed(1));
            yearObject.percentUnknowns = parseFloat(((yearObject.countUnknowns / yearObject.globalTotal) * 100).toFixed(1));

            allYearsCounts.push(yearObject);
        });
        return allYearsCounts;
    }
)

export const selectReligionActiveJudges = createSelector(
    selectJudges,
    (judges) => {
        let religionCounts = [{ name:"יהודים", count: 0, percent: 0}, { name: "מוסלמים", count: 0, percent: 0}, {name: "נוצרים", count:0, percent: 0}, {name: "דרוזים", count: 0, percent: 0}, {name:"לא ידוע", count: 0, percent: 0}]
           
            //only active judges today
        
            const filteredJudges = judges.filter(judge => judge.status2021EN === "Active");
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

export const selectSupremeJudgesPerChosenYear = createSelector(
    [selectJudges,selectUserChosenYear],
    (judges, chosenYear) => {
     return judges.filter(judge => ((judge.everInSupremeStartYear1 <= chosenYear) && (judge.everInSupremeEndYear1 >= chosenYear)) || ((judge.everInSupremeStartYear2 <= chosenYear) && (judge.everInSupremeEndYear2 >= chosenYear)) );
    })

    //For another research
export const selectSupremeJudges = createSelector(
    [selectJudges],
    (judges) => {
        let judgesPerYear = [];
        for (let year = 1948; year < 2022; year++) {
            let filteredJudges = judges.filter(judge => ((judge.everInSupremeStartYear1 <= year) && (judge.everInSupremeEndYear1 >= year)) || ((judge.everInSupremeStartYear2 <= year) && (judge.everInSupremeEndYear2 >= year)));
            let yearObj = {
                year: year,
                how_many: filteredJudges.length,
                judges : filteredJudges.map(judge => ({
                    given_name: judge.givenNameEN,
                    surname:judge.surnameEN,
                    id: judge.id,
                    experience: judge.everInSupremeStartYear2 ? ((year - judge.everInSupremeStartYear2) + (judge.everInSupremeEndYear1 - judge.everInSupremeStartYear1)): (year - judge.everInSupremeStartYear1)
                })),
            };
            yearObj.judges.sort((a,b) => b.experience - a.experience);
            judgesPerYear.push(yearObj)
        };
    
       return judgesPerYear;
       
        //return judges.filter(judge => ((judge.everInSupremeStartYear1 <= chosenYear) && (judge.everInSupremeEndYear1 >= chosenYear)) || ((judge.everInSupremeStartYear2 <= chosenYear) && (judge.everInSupremeEndYear2 >= chosenYear)) );
    })

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

export const changeYear = (year) => {
    return{
     type: "CHANGE_YEAR",
     year: year
    }
 }


 export const changeCourt = (court) => {
    return{
        type: "CHANGE_COURT",
        court: court
    }
}

export const fetchMapRequest = () => {
    return{
        type:"FETCH_MAP_REQUEST",
    }
}

export const loadMap = (mapData) => {
    return{
        type:"LOAD_MAP",
        mapData: mapData
    }
}

export const fetchMapFailed = (errorMsg) => {
    return{
        type:"FETCH_MAP_FAILED",
        error: errorMsg
    }
}

export const loadUniColleges = (uniColleges) => {
    return {
        type: "LOAD_UNICOLLEGES",
        uniColleges: uniColleges
    }
}

// Action Creators- thunk functions

    

export function fetchMapData(url){
    return async function fethcMapThunk(dispatch){
 
             dispatch(fetchMapRequest());
             console.log("sending request to db");
        try{ 
             const response = await fetch(url); 
             const generalMapData = await response.json();
             const countries = generalMapData.features;
             const israelObj = countries.filter(country => country.properties.name === "Israel")

             dispatch(loadMap(israelObj[0]));
     
         }catch(err){
             dispatch(fetchMapFailed(err.message))
         };
 
     }
}


export function postJudgesResult(data){
    return async function fethcMapThunk(dispatch){
 
            
             console.log("sending request to db");
        try{ 
             const response = await fetch("https://sheet.best/api/sheets/e50f047a-829c-42f5-8615-1005622247a4", {
                 method: "POST",
                 body: data,
             }) 
             const usableResponse = await response.json();
             console.log("response from postJudgesResult",usableResponse)

            
     
         }catch(err){
            console.log(err.message)
         };
 
     }
}

