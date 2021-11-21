import styles from "./TabEthnicity.module.css";
import MultiFiguresPicto from "../d3/MultiFiguresPicto";
import ColorOrdinalLegend from "../d3/ColorOrdinalLegend";
import GradientCourtsPicto from "../d3/GradientCourtsPicto";
import GradientPercentsPicto from "../d3/GradientPercentsPicto";
import { useSelector } from "react-redux";
import { selectEthnicityPreChosenYears, selectPreChosenYears, selectEthnicitiesEN, selectEthnicitiesHE } from "../../RootReducer";



const TabEthnicity = () => {

    const ethnicityCounts = useSelector(selectEthnicityPreChosenYears);
    const preChosenYears = useSelector(selectPreChosenYears);

    const ethnicitiesEN = useSelector(selectEthnicitiesEN);
    const ethnicitiesHE = useSelector(selectEthnicitiesHE);
    const percentsOfEthnicities = ethnicityCounts.map(yearObject => [
        yearObject.percentAshkenazi,
        yearObject.percentMizrahi,
        yearObject.percentEthiopian,
        yearObject.percentExUSSR,
        yearObject.percentNoneJewish,
        yearObject.percentUnknowns
    ]);

    const unknownEthnicitiesPerYears = ethnicityCounts.map(yearObject => 
            <span className="captionSpans-tabs" key={`unknownEthnicity${yearObject.year}`}> {yearObject.year} - {yearObject.percentUnknowns}%, </span>)
    
        

    return (

        <div className="viz-container-tabs">
            <h1 className="h1-tabs">התפלגות המוצא האתני של שופטים לאורך השנים</h1>
            <div className="legend-container-tabs">
                <ColorOrdinalLegend
                    namesArray={ethnicitiesHE}
                    colorsArray="6"
                />
            </div>
            <div className="graph-container-tabs">
                {preChosenYears.map((year, i) => (
                    <MultiFiguresPicto
                        key={`multifigure${i}`}
                        SVGtitle1={year}
                        i={i}
                        id={i}
                        namesArray={ethnicitiesHE}
                        colorsArray="6"
                        customSVGname1="judgeIconFigurine"
                        noOfDifferents={percentsOfEthnicities[i]}
                        width="280"
                        height="400"
                        SVGtitle1X="110"
                        innerLegendX="260"
                        innerLegendY="100"
                        tooltipTitle1="מספרים מוחלטים:"
                        tooltipContent=
                        {<>
                            <span key={`span${ethnicitiesEN[0]}`} style={{ fontSize: 14 }}>{ethnicitiesHE[0]} - {`${ethnicityCounts[i].globalTotal} / ${ethnicityCounts[i].countAshkenazi}`}</span>
                            <span key={`span${ethnicitiesEN[1]}`} style={{ fontSize: 14 }}>{ethnicitiesHE[1]} - {`${ethnicityCounts[i].globalTotal} / ${ethnicityCounts[i].countMizrahi}`}</span>
                            <span key={`span${ethnicitiesEN[2]}`} style={{ fontSize: 14 }}>{ethnicitiesHE[2]} - {`${ethnicityCounts[i].globalTotal} / ${ethnicityCounts[i].countEthiopian} `}</span>
                            <span key={`span${ethnicitiesEN[3]}`} style={{ fontSize: 14 }}>{ethnicitiesHE[3]} - {`${ethnicityCounts[i].globalTotal} / ${ethnicityCounts[i].countExUSSR}`}</span>
                            <span key={`span${ethnicitiesEN[4]}`} style={{ fontSize: 14 }}>{ethnicitiesHE[4]} - {`${ethnicityCounts[i].globalTotal} / ${ethnicityCounts[i].countNoneJewish}`}</span>
                            <span key={`span${ethnicitiesEN[5]}`} style={{ fontSize: 14 }}>{ethnicitiesHE[5]} - {`${ethnicityCounts[i].globalTotal} / ${ethnicityCounts[i].countUnknowns}`}</span>

                        </>}
                        
                    />
                ))}
            </div>
            {/* <h1 className={styles.h1}>אחוז הנשים מכלל השופטים והשופטות בכל ערכאה לאורך השנים</h1>
      <h2 className={styles.h2}>*בתי הדין לעבודה הוקמו בשנת 1969</h2>
      <div className={styles.legendPictoContainer} >
        <ColorOrdinalLegend
          namesArray={["נשים", "גברים", "לא קיים"]}
          colorsArray="3"
        />
      </div>
      <div className={styles.hammerContainer}>
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
      <h1 className={styles.h1}>אחוז הנשים בכל ערכאה מכלל השופטות המכהנות לאורך השנים</h1>
      <div className={styles.legendPictoContainer} >
        <ColorOrdinalLegend
          namesArray={courtsHE}
          colorsArray="5"
        />
      </div>
      <div className={styles.judegessContainer}>
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
      </div> */}
        </div>

    );
}

export default TabEthnicity;