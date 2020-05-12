import React, { useState } from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { fetchData } from "../../actions";
import { dispatch } from "../../index.js";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "5px",
    display: "flex",
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    height: "50px",
    letterSpacing: "0.5px",
    lineHeight: "20px",
    marginBottom: "20px",
    overflow: "hidden",
    width: "503px",
  },
  tab: {
    alignItems: "center",
    background: "#FFFFFF",
    border: "1px solid #DFE5EC",
    borderRadius: "5px",
    boxSizing: "border-box",
    cursor: "pointer",
    display: "flex",
    flexGrow: 1,
    height: "100%",
    justifyContent: "center",
  },
  rightTab: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  leftTab: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  selectedTab: {
    alignItems: "center",
    background: "#FFFFFF",
    backgroundColor: "#2196F3",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "flex",
    flexGrow: 1,
    height: "100%",
    justifyContent: "center",
  },
}));

function Tabs(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState("cheapest");

  return (
    <Box className={classes.container}>
      {selected === "cheapest" ? (
        <>
          <Box
            className={classes.selectedTab}
            onClick={() => {
              setSelected("cheapest");
            }}
          >
            САМЫЙ ДЕШЕВЫЙ
          </Box>
          <Box
            className={clsx(classes.tab, classes.rightTab)}
            onClick={() => {
              setSelected("fastest");
              dispatch(
                fetchData({
                  tickets: props.filteredData.tickets.sort((a, b) =>
                    a.segments[0].duration + a.segments[1].duration >
                    b.segments[0].duration + b.segments[1].duration
                      ? 1
                      : -1
                  ),
                })
              );
            }}
          >
            САМЫЙ БЫСТРЫЙ
          </Box>
        </>
      ) : (
        <>
          <Box
            className={clsx(classes.tab, classes.leftTab)}
            onClick={() => {
              setSelected("cheapest");
              dispatch(
                fetchData({
                  tickets: props.filteredData.tickets.sort((a, b) =>
                    a.price > b.price ? 1 : -1
                  ),
                })
              );
            }}
          >
            САМЫЙ ДЕШЕВЫЙ
          </Box>
          <Box
            className={classes.selectedTab}
            onClick={() => setSelected("fastest")}
          >
            САМЫЙ БЫСТРЫЙ
          </Box>
        </>
      )}
    </Box>
  );
}

const mapStateToProps = ({ filteredData }) => {
  return {
    filteredData,
  };
};

export default connect(mapStateToProps)(Tabs);
