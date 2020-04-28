import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: "503px",
    height: "50px",
    border: "1px solid #DFE5EC",
    borderRadius: '5px',
    // boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    // alignItems: "center",
    // justifyContent: "center",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0.5px",
    overflow :'hidden', 
    
    // backgroundColor: '#2196F3',
  },
  tab: {
    // boxSizing: 'content-box',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    // flexBasis: '50%',
    height: "100%",
    background: '#FFFFFF'
    
  },

  selected: {
    // boxSizing: 'border-box',
    color: "#FFFFFF",
    backgroundColor: "#2196F3",
  },
}));

function Tabs() {
  const classes = useStyles();
  const [selected, setSelected] = useState("cheapest");

  return (
    <Box className={classes.container}>
      {selected === "cheapest" ? (
        <>
          <Box
            className={clsx(classes.selected, classes.tab)}
            onClick={() => setSelected("cheapest")}
          >
            САМЫЙ ДЕШЕВЫЙ
          </Box>
          <Box className={classes.tab} onClick={() => setSelected("fastest")}>
            САМЫЙ БЫСТРЫЙ
          </Box>
        </>
      ) : (
        <>
          <Box
            className={clsx(classes.tab)}
            onClick={() => setSelected("cheapest")}
          >
            САМЫЙ ДЕШЕВЫЙ
          </Box>
          <Box
            className={clsx(classes.selected, classes.tab)}
            onClick={() => setSelected("fastest")}
          >
            САМЫЙ БЫСТРЫЙ
          </Box>
        </>
      )}
    </Box>
  );
}

export default Tabs;
