import { useSelector, useDispatch } from "react-redux";
import PageHeader from "./PageHeader";
import { DataGrid } from "@material-ui/data-grid";
import { selectJudges } from "../RootReducer";


const QueryPage = () => {

  const judges = useSelector(selectJudges);

  const columns = [
    { field: 'id', headerName: 'מספר', type: 'number', width: 100, description: "meaningless id number" },
    { field: 'givenNameHE', headerName: 'שם פרטי', width: 100 },
    { field: 'surnameHE', headerName: "שם משפחה", width: 100 },
    { field: 'statusHE', headerName: "סטטוס", width: 100 },
    { field: 'genderHE', headerName: "מגדר", width: 100 },
    { field: 'nationalityHE', headerName: "לאום", width: 100 },
    { field: 'religionHE', headerName: "דת\דתיות", width: 100 },
    { field: 'ethnicityHE', headerName: "זהות אתנית", width: 100 },
    { field: 'birthCountryHE', headerName: "ארץ לידה", width: 100 },
    { field: 'birthYear', headerName: "שנת לידה", type: 'number', width: 100 },
    { field: 'majorChildhoodCityHE', headerName: "עיר ילדות עיקרית", width: 100 },
    { field: 'citySocio', headerName: "עשירון עיר ילדות", type: 'number', width: 100 },
    { field: 'highschoolHE', headerName: 'בי"ס תיכון', width: 100 },
    { field: 'educationTypeHE', headerName: 'זרם חינוכי', width: 100 },
    { field: 'armyServiceHE', headerName: 'שירות צבאי', width: 100 },
    { field: 'mainLegalEducationHE', headerName: 'השכלה משפטית עיקרית', width: 100 },
    { field: 'YearFisrtDegreeGraduation', headerName: 'שנת סיום תואר ראשון', type: 'number', width: 100 },
    { field: 'typeAdvancedLegalEducationHE', headerName: 'סוג השכלה משפטית מתקדמת', width: 100 },
    { field: 'universityAdvancedLegalEducationHE', headerName: 'מוסד השכלה משפטית מתקדמת', width: 100 },
    { field: 'yearAdvancedLegalEducation', headerName: 'שנת השכלה משפטית מתקדמת', type: 'number', width: 30 },
    { field: 'otherAdvancedEducationHE', headerName: 'השכלה מתקדמת נוספת', width: 100 },
    { field: 'placeOfInternshipHE', headerName: 'מקום התמחות', width: 100 },
    { field: 'yearOfBecomingLawyer', headerName: 'שנת התחלה כעו"ד', type: 'number', width: 30 },
    // {field: 'lastPositionHE', headerName: 'תפקיד אחרון', type:, width: 30},
    { field: 'endOfCareerHE', headerName: 'סיום קריירה', width: 100 },
    { field: 'endOfCareerYear', headerName: 'שנת סוף הקריירה', type: 'number', width: 30 },
    // {field: 'ageOfEntering', headerName: 'גיל כניסה לשיפוט', type:, width: 30},
    // {field: 'xpInFirstNom', headerName: 'ניסיון במינוי הראשון', type:, width: 30},
    // {field: 'ageOfRetirenment', headerName: 'גיל בפרישה', type:, width: 30},
    // {field: 'xpInRet', headerName: 'ניסיון בפרישה', type:, width: 30},
  ];

  const rows = judges;


  return (
    <div style={{ width: "100vw" }}>
      <PageHeader />
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ height: 600, width: "100%", flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}


export default QueryPage;
