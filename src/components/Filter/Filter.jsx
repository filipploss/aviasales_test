import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { filterData } from "../../actions";
import { dispatch } from "../../index.js";
import CheckboxTick from "../../images/Shape.svg";

const useStyles = makeStyles((theme) => ({
  legend: {
    marginBottom: "10px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.5px",
    color: "#4A4A4A",
    alignSelf: "flex-start",
    margin: "20px",
  },
  filter: {
    display: "flex",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    color: "#4A4A4A",
    background: "#ffffff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    width: "232px",
    minHeight: "252px",
    cursor: 'url("./images/cursor.svg"), auto',
  },
  icon: {
    borderRadius: "2px",
    display: "block",
    width: 20,
    height: 20,
    border: "1px solid #9ABBCE",
    boxSizing: "content-box",
    backgroundColor: "transparent",
  },
  checkedIcon: {
    border: "1px solid #2196F3",
    boxSizing: "content-box",
    borderRadius: "2px",
    backgroundColor: "transparent",
    display: "block",
    backgroundPosition: "center",
    width: 20,
    height: 20,
    backgroundImage: `url(${CheckboxTick})`,
    backgroundRepeat: "no-repeat",
    content: '""',
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  formControl: {
    flexGrow: 1,
    lineHeight: "20px",
  },
  formItem: {
    fontSize: "13px",
    lineHeight: "20px",
    margin: 0,
    paddingLeft: "10px",
    "&:hover": {
      backgroundColor: "#F1FCFF",
    },
  },
}));

function Filter(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    all: true,
    nonStop: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  });

  const handleChange = (event) => {
    if (
      state.all &&
      state.nonStop &&
      state.oneStop &&
      state.twoStops &&
      state.threeStops &&
      event.target.name !== "all"
    ) {
      setState({
        ...state,
        all: false,
        [event.target.name]: event.target.checked,
      });
    }

    // TODO: когда все выделены, выделять ALL

    // else if (
    //   !state.all &&
    //   state.nonStop &&
    //   oneStop &&
    //   twoStops &&
    //   threeStops &&
    //   event.target.name !== "all"
    // ) {
    //   setState({
    //     ...state,
    //     all: true,
    //     [event.target.name]: event.target.checked,
    //   });
    // }
    else if (
      !state.all &&
      !state.nonStop &&
      !state.oneStop &&
      !state.twoStops &&
      !state.threeStops
      // &&
      // (event.target.name !== "all" || event.target.name === "nonStop")
    ) {
      // console.log(event.target.name);
      // if (event.target.name === "nonStop" && !state.nonStop) {
      // console.log('state before: ', state)
      setState({
        ...state,
        all: false,
        // nonStop: true,
        [event.target.name]: event.target.checked,
      });
      let results;

      switch (event.target.name) {
        case "nonStop":
          results = props.data.tickets.filter(
            (item) =>
              item.segments[0].stops.length === 0 &&
              item.segments[1].stops.length === 0
          );
          dispatch(
            filterData({
              tickets: results,
            })
          );
          break;
        case "oneStop":
          results = props.data.tickets.filter(
            (item) =>
              item.segments[0].stops.length === 1 &&
              item.segments[1].stops.length === 1
          );
          dispatch(
            filterData({
              tickets: results,
            })
          );
          break;
        case "twoStops":
          results = props.data.tickets.filter(
            (item) =>
              item.segments[0].stops.length === 2 &&
              item.segments[1].stops.length === 2
          );
          dispatch(
            filterData({
              tickets: results,
            })
          );
          break;
        case "threeStops":
          results = props.data.tickets.filter(
            (item) =>
              item.segments[0].stops.length === 3 &&
              item.segments[1].stops.length === 3
          );
          dispatch(
            filterData({
              tickets: results,
            })
          );
          break;
        default:
          break;
      }

      // if (event.target.name === "nonStop") {
      //   results = props.data.tickets.filter(
      //     (item) =>
      //       item.segments[0].stops.length === 0 &&
      //       item.segments[1].stops.length === 0
      //   );
      //   dispatch(
      //     filterData({
      //       tickets: results,
      //     })
      //   );
      // } else if (event.target.name === "oneStop") {
      //   results = props.data.tickets.filter(
      //     (item) =>
      //       item.segments[0].stops.length === 1 &&
      //       item.segments[1].stops.length === 1
      //   );
      //   dispatch(
      //     filterData({
      //       tickets: results,
      //     })
      //   );
      // }

      // console.log("!", results);
      // console.log('state after: ', state)
    } else if (
      (event.target.name === "nonStop" && state.nonStop) ||
      (event.target.name === "oneStop" && state.oneStop) ||
      (event.target.name === "twoStops" && state.twoStops) ||
      (event.target.name === "threeStops" && state.threeStops)
    ) {
      setState({
        ...state,
        // nonStop: false,
        [event.target.name]: event.target.checked,
      });
      let results = props.data.tickets;
      console.log("!", results);
      dispatch(
        filterData({
          tickets: results,
        })
      );
    }

    // }

    // else  {
    //   dispatch(
    //     filterData({
    //       tickets: props.data.tickets,
    //     })
    //   );
    // }
    // }
    else {
      setState({ ...state, [event.target.name]: event.target.checked });
    }
  };

  const handleChangeAll = (event) => {
    if (state.all) {
      setState({
        all: false,
        nonStop: false,
        oneStop: false,
        twoStops: false,
        threeStops: false,
      });
    } else {
      setState({
        all: true,
        nonStop: true,
        oneStop: true,
        twoStops: true,
        threeStops: true,
      });
    }
  };

  const { all, nonStop, oneStop, twoStops, threeStops } = state;
  console.log("Filter loaded");
  return (
    <Box className={classes.filter}>
      <FormControl className={classes.formControl}>
        <FormLabel
          component="legend"
          className={classes.legend}
          focused={false}
        >
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            className={classes.formItem}
            control={
              <Checkbox
                checked={all}
                onChange={handleChangeAll}
                name="all"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
                disableRipple
              />
            }
            label="Все"
          />
          <FormControlLabel
            className={classes.formItem}
            control={
              <Checkbox
                checked={nonStop}
                onChange={handleChange}
                name="nonStop"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
                disableRipple
              />
            }
            label="Без пересадок"
          />
          <FormControlLabel
            className={classes.formItem}
            control={
              <Checkbox
                checked={oneStop}
                onChange={handleChange}
                name="oneStop"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
                disableRipple
              />
            }
            label="1 пересадка"
          />
          <FormControlLabel
            className={classes.formItem}
            control={
              <Checkbox
                checked={twoStops}
                onChange={handleChange}
                name="twoStops"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
                disableRipple
              />
            }
            label="2 пересадки"
          />
          <FormControlLabel
            className={classes.formItem}
            control={
              <Checkbox
                checked={threeStops}
                onChange={handleChange}
                name="threeStops"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
                disableRipple
              />
            }
            label="3 пересадки"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}

const mapStateToProps = ({ data, filteredData }) => {
  return {
    data,
    filteredData,
  };
};

export default connect(mapStateToProps)(Filter);
