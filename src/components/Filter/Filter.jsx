import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import * as actions from "../../actions";
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

function Filter({ data, tab, filterData, loading, error }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    all: true,
    nonStop: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  });

  useEffect(() => {
    let tickets;
    if (!loading && !error) {
      if (tab === "fastest") {
        tickets = data.tickets.sort((a, b) =>
          a.segments[0].duration + a.segments[1].duration >
          b.segments[0].duration + b.segments[1].duration
            ? 1
            : -1
        );
      } else {
        tickets = data.tickets.sort((a, b) => (a.price > b.price ? 1 : -1));
      }

      const checkStopsNumber = (number) => {
        tickets = tickets.filter(
          (item) =>
            item.segments[0].stops.length !== number &&
            item.segments[1].stops.length !== number
        );
      };

      if (!state.nonStop) {
        checkStopsNumber(0);
      }
      if (!state.oneStop) {
        checkStopsNumber(1);
      }
      if (!state.twoStops) {
        checkStopsNumber(2);
      }

      if (!state.threeStops) {
        checkStopsNumber(3);
      }

      filterData({
        tickets,
      });
    }
  }, [state, data, tab, filterData, loading, error]);

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
    } else if (
      (!state.all &&
        !state.nonStop &&
        state.oneStop &&
        state.twoStops &&
        state.threeStops &&
        event.target.name === "nonStop") ||
      (!state.all &&
        state.nonStop &&
        !state.oneStop &&
        state.twoStops &&
        state.threeStops &&
        event.target.name === "oneStop") ||
      (!state.all &&
        state.nonStop &&
        state.oneStop &&
        !state.twoStops &&
        state.threeStops &&
        event.target.name === "twoStops") ||
      (!state.all &&
        state.nonStop &&
        state.oneStop &&
        state.twoStops &&
        !state.threeStops &&
        event.target.name === "threeStops")
    ) {
      setState({
        ...state,
        all: true,
        [event.target.name]: event.target.checked,
      });
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
      let tickets;

      const checkStopsNumber = (number) => {
        tickets = data.tickets.filter(
          (item) =>
            item.segments[0].stops.length !== number &&
            item.segments[1].stops.length !== number
        );
      };

      switch (event.target.name) {
        case "nonStop":
          checkStopsNumber(0);
          filterData({
            tickets,
          });
          break;
        case "oneStop":
          checkStopsNumber(1);
          filterData({
            tickets,
          });
          break;
        case "twoStops":
          checkStopsNumber(2);
          filterData({
            tickets,
          });
          break;
        case "threeStops":
          checkStopsNumber(3);
          filterData({
            tickets,
          });
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
      let tickets = data.tickets;
      filterData({
        tickets,
      });
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

const mapDispatchToProps = (dispatch) => {
  const { filterData } = bindActionCreators(actions, dispatch);
  return {
    filterData,
  };
};

const mapStateToProps = ({ data, filteredData, tab, loading, error }) => {
  return {
    data,
    filteredData,
    tab,
    loading,
    error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
