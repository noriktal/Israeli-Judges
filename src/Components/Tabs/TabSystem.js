import { useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TabWomen from "./TabWomen";
import TabGeneral from "./TabGeneral";
import SupremeViz from "../d3/SupremeViz";
import TabUniColleges from "./TabUniColleges";
import TabEthnicity from "./TabEthnicity";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box style={{maxWidth: "80vw", marginTop: "20px", marginLeft:"auto", marginRight: "auto", overflowX: "hidden"}}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabSystem = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabSystem" style={{display: "flex", flexDirection: "column", overflowX: "hidden", marginRight:18}}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="tabs"
        indicatorColor="primary"
        textColor="primary"
        
      >
        <Tab label="תמונה כללית" {...a11yProps(0)}  />
        <Tab label="נשים במערכת" {...a11yProps(1)} />
        <Tab label="מוצא אתני" {...a11yProps(2)} />
        <Tab label="דתיים במערכת" {...a11yProps(3)} />
        <Tab label="אוניברסיטאות ומכללות" {...a11yProps(4)} />
        <Tab label="איפה גדלו השופטים" {...a11yProps(5)} />
        <Tab label="בית המשפט העליון" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
         <TabGeneral/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabWomen />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabEthnicity />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TabUniColleges />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
      <SupremeViz />
      </TabPanel>
      <TabPanel value={value} index={7}>
        
      </TabPanel>
    </div>
  );
}

export default TabSystem;