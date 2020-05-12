import React, { useState } from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { fetchData } from "../../actions";
import { dispatch } from "../../index.js";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "503px",
    height: "50px",
    border: "1px solid #DFE5EC",
    borderRadius: "5px",
    marginBottom: '20px',
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "20px",
    letterSpacing: "0.5px",
    overflow: "hidden",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    height: "100%",
    background: "#FFFFFF",
    cursor: 'pointer',
  },

  selected: {
    color: "#FFFFFF",
    backgroundColor: "#2196F3",
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
            className={clsx(classes.selected, classes.tab)}
            onClick={() => {
              setSelected("cheapest");
            }}
          >
            САМЫЙ ДЕШЕВЫЙ
          </Box>
          <Box
            className={classes.tab}
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
            className={clsx(classes.tab)}
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

const mapStateToProps = ({ data, filteredData }) => {
  return {
    data,
    filteredData,
  };
};

export default connect(mapStateToProps)(Tabs);
