import React, { useEffect } from "react";
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
import CheckboxTick from "../../images/shape.svg";

const useStyles = makeStyles((theme) => ({
  legend: {
    alignSelf: "flex-start",
    color: "#4A4A4A",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 600,
    letterSpacing: "0.5px",
    lineHeight: "12px",
    margin: "20px",
    marginBottom: "10px",
  },
  filter: {
    background: "#ffffff",
    borderRadius: "5px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    color: "#4A4A4A",
    display: "flex",
    flexShrink: 0,
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "normal",
    height: "252px",
    margin: "0 20px 20px 0",
    width: "232px",
  },
  icon: {
    backgroundColor: "transparent",
    border: "1px solid #9ABBCE",
    borderRadius: "2px",
    boxSizing: "content-box",
    display: "block",
    height: 20,
    width: 20,
  },
  checkedIcon: {
    backgroundColor: "transparent",
    backgroundImage: `url(${CheckboxTick})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: "1px solid #2196F3",
    borderRadius: "2px",
    boxSizing: "content-box",
    content: '""',
    display: "block",
    height: 20,
    width: 20,
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

  useEffect(() => {

    // проверить эту проверку, т.к. filtereddata = {}

    let tickets;
    if (props.data.tickets) {
      if (props.tab === "fastest") {
        // console.log("props.data in fastest: ", props.data);

        tickets = props.data.tickets.sort((a, b) =>
          a.segments[0].duration + a.segments[1].duration >
          b.segments[0].duration + b.segments[1].duration
            ? 1
            : -1
        );
        console.log("tickets in fastest: ", tickets);
      } else {
        // console.log('props.data: ', props.data)
        // console.log("props.data in cheapest: ", props.data);
        tickets = props.data.tickets.sort((a, b) =>
          a.price > b.price ? 1 : -1
        );
        console.log("tickets in cheapest: ", tickets);
      }
    }
    // console.log("props filteredData", props.filteredData);
    let results = tickets;

    if (!state.nonStop) {
      console.log("nonStop unselected");
      results = results.filter(
        (item) =>
          item.segments[0].stops.length !== 0 &&
          item.segments[1].stops.length !== 0
      );
      console.log("results nonstop: ", results);
    }
    if (!state.oneStop) {
      console.log("oneStop unselected");
      results = results.filter(
        (item) =>
          item.segments[0].stops.length !== 1 &&
          item.segments[1].stops.length !== 1
      );
      console.log("results oneStop:", results);
    }
    if (!state.twoStops) {
      console.log("twoStops unselected");
      results = results.filter(
        (item) =>
          item.segments[0].stops.length !== 2 &&
          item.segments[1].stops.length !== 2
      );
      console.log("results twostops: ", results);
    }

    if (!state.threeStops) {
      console.log("threeStops unselected");
      results = results.filter(
        (item) =>
          item.segments[0].stops.length !== 3 &&
          item.segments[1].stops.length !== 3
      );
      console.log("results threestops: ", results);
    }

    dispatch(
      filterData({
        tickets: results,
      })
    );
  }, [state, props.data, props.tab]);

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
      console.log("state.nonStop: ", state.nonStop);
    } else if (
      !state.all &&
      !state.nonStop &&
      !state.oneStop &&
      !state.twoStops &&
      !state.threeStops
    ) {
      setState({
        ...state,
        all: false,
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
    } else if (
      (event.target.name === "nonStop" && state.nonStop) ||
      (event.target.name === "oneStop" && state.oneStop) ||
      (event.target.name === "twoStops" && state.twoStops) ||
      (event.target.name === "threeStops" && state.threeStops)
    ) {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
      let results = props.data.tickets;
      console.log("!", results);
      dispatch(
        filterData({
          tickets: results,
        })
      );
    } else {
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

const mapStateToProps = ({
  data,
  filteredData,
  tab,
}) => {
  return {
    data,
    filteredData,
    tab,
  };
};

export default connect(mapStateToProps)(Filter);
