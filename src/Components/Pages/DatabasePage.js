import PageHeader from "../PageHeader";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import TabSystem from "../Tabs/TabSystem";
import { selectJudges } from "../../RootReducer";
import { useSelector } from "react-redux";
import { useState } from "react";



const DatabasePage = () => {

  const judges = useSelector(selectJudges);
  const [selectionModel, setSelectionModel] = useState([]); //array of selected judges ids or row nums
  // const [filterModel, setFilterModel] = useState({items:[judges]}); //

  const columns = [
    { field: 'id', headerName: 'מספר', type: 'number', width: 100, description: "meaningless id number" },
    { field: 'givenNameHE', headerName: 'שם פרטי', width: 100 },
    { field: 'surnameHE', headerName: "שם משפחה", width: 100 },
    { field: 'status2017HE', headerName: "סטטוס", width: 100 },
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
    { field: 'mainLegalEducationHE', headerName: 'השכלה משפטית עיקרית', width: 140 },
    { field: 'YearFisrtDegreeGraduation', headerName: 'שנת סיום תואר ראשון', type: 'number', width: 100 },
    { field: 'typeAdvancedLegalEducationHE', headerName: 'סוג השכלה משפטית מתקדמת', width: 100 },
    { field: 'universityAdvancedLegalEducationHE', headerName: 'מוסד השכלה משפטית מתקדמת', width: 140 },
    { field: 'yearAdvancedLegalEducation', headerName: 'שנת השכלה משפטית מתקדמת', type: 'number', width: 100 },
    { field: 'otherAdvancedEducationHE', headerName: 'השכלה מתקדמת נוספת', width: 100 },
    { field: 'placeOfInternshipHE', headerName: 'מקום התמחות', width: 100 },
    { field: 'yearOfBecomingLawyer', headerName: 'שנת התחלה כעו"ד', type: 'number', width: 100 },
    {field: 'lastPositionHE', headerName: 'תפקיד אחרון', width: 100},
    { field: 'endOfCareerHE', headerName: 'סיום קריירה', width: 100 },
    { field: 'endOfCareerYear', headerName: 'שנת סוף הקריירה', type: 'number', width: 100 },
    {field: 'ageOfEntering', headerName: 'גיל כניסה לשיפוט', type: "number", width: 100},
    {field: 'xpInFirstNom', headerName: 'ניסיון במינוי הראשון', type: "number", width: 100},
    {field: 'ageOfRetirenment', headerName: 'גיל בפרישה', type: "number", width: 100},
    {field: 'xpInRet', headerName: 'ניסיון בפרישה', type: "number", width: 100},
  ];

  // const rows = judges;
  const rows = judges;
  



  return (
    <div style={{overflowX:"hidden", width: "100vw"}}>
      <PageHeader 
        title1="מאגר מידע על שופטים בישראל"
        title2="בעמוד זה ניתן לבחון את המאגר כולו או למצוא מידע על שופט\ת מסוימ\ת"
      />
      <div style={{ height: 600, width: "100vw" }}>
      {/* {filterModel.items.length ? <span>{filterModel.items.length}</span> : <span></span>} */}

        <DataGrid
        style={{direction:"ltr"}}
          rows={rows}
          columns={columns}
          pageSize={8}
          // onFilterModelChange={(newFilterModel) => {
          //   setFilterModel(newFilterModel)}}
          // filterModel={filterModel}
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
          components={{
            Toolbar: GridToolbar,
          }}
          localeText={{
            toolbarDensity: 'צפיפות',
            toolbarDensityLabel: 'צפיפות',
            toolbarDensityCompact: 'צפוף',
            toolbarDensityStandard: 'בינוני',
            toolbarDensityComfortable: 'מרווח',
            toolbarColumns: 'עמודות',
            toolbarColumnsLabel: 'בחרו עמודות',
            toolbarFilters: 'מסננים',
            toolbarFiltersLabel: 'הצגת מסננים',
            toolbarFiltersTooltipHide: 'הסתרת מסננים',
            toolbarFiltersTooltipShow: 'הצגת מסננים',
            toolbarFiltersTooltipActive: (count) =>
              count !== 1 ? `${count} active filters` : `${count} active filter`,
              toolbarExport: 'ייצוא',
              toolbarExportLabel: 'ייצוא',
              toolbarExportCSV: 'הורדה כ- CSV',
          }}
        />
        <TabSystem />
      </div>
    </div>
  )
}


export default DatabasePage;