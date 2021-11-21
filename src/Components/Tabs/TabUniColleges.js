import IsraelMap from "../d3/IsraelMap";
import GradientPercentsPicto from "../d3/GradientPercentsPicto";
import { selectMainLegalEducationPlacePreChosenYears, selectMainLegalEducationSourcePreChosenYears, selectMapLoadState, selectMapData, selectMapError, selectMainLegalEducationTypePreChosenYears } from "../../RootReducer";
import { useSelector } from "react-redux";
import ColorOrdinalLegend from "../d3/ColorOrdinalLegend";

export default function UniCollegesTab() {

    const uniCollegeCountsPerYears = useSelector(selectMainLegalEducationPlacePreChosenYears);
    const uniCollegesTypesPerYears = useSelector(selectMainLegalEducationTypePreChosenYears);
    const uniCollegesIsraelAbroadPerYears = useSelector(selectMainLegalEducationSourcePreChosenYears);

    const unknownIsraelAbroadPerYears = uniCollegesIsraelAbroadPerYears.map(yearObject => 
    <span className="captionSpans-tabs" key={`unknownplace${yearObject.year}`}> {yearObject.year} - {yearObject.percentUnknowns}%, </span>)

    const loadStatus = useSelector(selectMapLoadState);
    const mapData = useSelector(selectMapData);
    const error = useSelector(selectMapError);

    return (
        <div className="viz-container-tabs">

            <h1 className="h1-tabs"> איפה סיימו השופטים תואר ראשון במשפטים: אוניברסיטאות לעומת מכללות </h1>
            <h2 className="h2-tabs"> (אחרי 1990) * </h2>
            <div className="legend-container-tabs">
                <ColorOrdinalLegend
                namesArray={["אוניברסיטאות", "מכללות"]}
                colorsArray="2"
                />
            </div>
            <div className="graph-container-tabs">
                {
                    uniCollegesTypesPerYears.map(yearObject => {

                        if (yearObject.year > 1990) {

                            return (

                                <GradientPercentsPicto
                                    key={`uniType${yearObject.year}`}
                                    customSVGname="graduate"
                                    namesArray={["אוניברסיטאות", "מכללות"]}
                                    colorsArray="2"
                                    gradientType="basicGradient"
                                    data={yearObject}
                                    rawPercent={yearObject.percentUni}
                                    percent={`${yearObject.percentUni}%`}
                                    percent2={`${yearObject.percentCollege}%`}
                                    width="120"
                                    height="180"
                                    scale="2"
                                    translateGroup="0"
                                    x="0"
                                    y="0"
                                    tooltipTitle1="במכללות:"
                                    tooltipTitle2={`${yearObject.countCollege}/${yearObject.relevantTotal}`}

                                />)
                        }

                    })
                }
            </div>

            <h1 className="h1-tabs"> פילוח השופטים שלמדו בישראל לפי המוסד המעניק תואר ראשון במשפטים לאורך השנים </h1>
            {loadStatus && <h2 className="h2-tabs">בטעינה</h2>}
            {error && <h1>{error}</h1>}
            <div className="graph-container-tabs">
                {uniCollegeCountsPerYears.map(year => (
                    <IsraelMap
                        key={`map${year}${year.total}`}
                        places={year.places}
                        title1={year.year}
                        total={year.total}
                        mapData={mapData}
                    />
                ))}
            </div>
            <h3 className="h3-tabs"> * מתוך השופטים שלגביהם ישנו מידע לגבי מקום רכישת ההשכלה. ללא לימודים במקום לא ידוע בישראל המנדטורית. אחוז השופטים שלגביהם חסר מידע: {unknownIsraelAbroadPerYears} </h3>

            <h1 className="h1-tabs"> אחוז השופטים שקיבלו תואר ראשון במשפטים בארץ (לעומת חו"ל) </h1>
            {loadStatus && <h2 className="h2-tabs">בטעינה</h2>}
            {error && <h1>{error}</h1>}
            <div className="legend-container-tabs" >
                <ColorOrdinalLegend
                    namesArray={["ישראל", "חו''ל"]}
                    colorsArray="2"
                    />
            </div>
            <div className="graph-container-tabs">
                { 
                    uniCollegesIsraelAbroadPerYears.map(yearObject => {
                        return(
                        <GradientPercentsPicto
                            key={`israelAbroad${yearObject.year}`}
                            customSVGname="israelIcon"
                            namesArray={["ישראל", "חו'ל"]}
                            colorsArray="2"
                            gradientType="basicGradient"
                            data={yearObject}
                            rawPercent={yearObject.percentIsrael}
                            percent={`${yearObject.percentIsrael}%`}
                            percent2={`${yearObject.percentAbroad}%`}
                            width="140"
                            height="250"
                            scale="0.4"
                            translateGroup="25 0"
                            x="0"
                            y="0"
                            tooltipTitle1="בארץ:"
                            tooltipTitle2={`${yearObject.countIsrael}/${yearObject.relevantTotal}`}
                        />

                    )}
                        )
                }
            </div>
            <h3 className="h3-tabs"> * מתוך השופטים שלגביהם ישנו מידע לגבי מקום רכישת ההשכלה. לימודים בישראל המנדטורית נחשבים כלימודים בישראל. אחוז השופטים שלגביהם חסר מידע: {unknownIsraelAbroadPerYears} </h3>


        </div>
    )
}