import styles from "./TabWomen.module.css";
import MultiFiguresPicto from "../d3/MultiFiguresPicto";
import ColorOrdinalLegend from "../d3/ColorOrdinalLegend";
import GradientCourtsPicto from "../d3/GradientCourtsPicto";
import { useSelector } from "react-redux";
import { selectGenderDataPreChosenYears, selectPreChosenYears, selectGenderDataPerCourtPreChosenYears, selectCourtsEN, selectCourtsHE } from "../../RootReducer";
import GradientPercentsPicto from "../d3/GradientPercentsPicto";

const TabWomen = () => {

  const genderCounts = useSelector(selectGenderDataPreChosenYears);
  const preChosenYears = useSelector(selectPreChosenYears);
  const genderCountsPerCourt = useSelector(selectGenderDataPerCourtPreChosenYears)

  const courtsEN = useSelector(selectCourtsEN);
  const courtsHE = useSelector(selectCourtsHE);
  const percentsOfWomen = genderCounts.map(yearObject => yearObject.percentWomen);



  return (

    <div className="viz-container-tabs">

      <h1 className="h1-tabs">אחוז הנשים מכלל השופטים לאורך השנים</h1>
      <div className="legend-container-tabs">
        <ColorOrdinalLegend
          namesArray={["נשים", "גברים"]}
          colorsArray="2"
        />
      </div>
      <div className="graph-container-tabs">
        {preChosenYears.map((year, i) => (
          <MultiFiguresPicto
            key={`multifigure${i}`}
            SVGtitle1={year}
            i={i}
            id={i}
            namesArray={["נשים", "גברים"]}
            colorsArray="2"
            customSVGname1="judgeIconFigurine"
            customSVGname2="judgessIconFigurine"
            noOfDifferents={[percentsOfWomen[i]]}
            width="300"
            height="400"
            SVGtitle1X="110"
            tooltipTitle1="מספרים מוחלטים:"
            tooltipTitle2={`${genderCounts[i].totalCount} / ${genderCounts[i].womenCount}`}
          />
        ))}
      </div>
      <h1 className="h1-tabs">אחוז הנשים מכלל השופטים והשופטות בכל ערכאה לאורך השנים</h1>
      <h2 className="h2-tabs">*בתי הדין לעבודה הוקמו בשנת 1969</h2>
      <div className="legend-container-tabs">
        <ColorOrdinalLegend
          namesArray={["נשים", "גברים", "לא קיים"]}
          colorsArray="3"
        />
      </div>
      <div className={`graph-container-tabs ${styles.hammerContainer}`}>
        {preChosenYears.map((year, i) => (
          <GradientCourtsPicto
            key={`hammerFigure${i}`}
            data={genderCountsPerCourt[i]}
            namesArray={["נשים", "גברים", "לא קיים"]}
            colorsArray="3"
            customSVGname="hammerIcon"
            gradientType="binaryGradient"
          />
        ))}
      </div>
      <h1 className="h1-tabs">אחוז הנשים בכל ערכאה מכלל השופטות המכהנות לאורך השנים</h1>
      <div className="legend-container-tabs">
        <ColorOrdinalLegend
          namesArray={courtsHE}
          colorsArray="5"
        />
      </div>
      <div className="graph-container-tabs">
        {
          preChosenYears.map((year, i) => {
            const countsPerCourt = genderCountsPerCourt[i].countsPerCourt;
            const percentsOfAllWomen = countsPerCourt.map(d => d.percentOfAllWomen);

            return (
              <GradientPercentsPicto
                key={`judgessFigure${year}`}
                customSVGname="judgessHead"
                namesArray={courtsHE}
                colorsArray="5"
                gradientType="courtsGradient"
                data={genderCountsPerCourt[i]}
                percents={percentsOfAllWomen}
                width="280"
                height="300"
                scale="0.4"
                translateGroup="20"
                x="0"
                y="20"
                innerLegendX="255"
                innerLegendY="70"
                tooltipContent={countsPerCourt.map((court, i) => (
                  <span key={`span${court}${i}`} style={{ fontSize: 14 }}>{court.nameHE} - {` ${genderCountsPerCourt[i].totalWomen} / ${court.count}`}</span>
                ))}
                tooltipTitle1="מספרים מוחלטים:"
              />
            )
          })}
      </div>
    </div>

  );
}

export default TabWomen;