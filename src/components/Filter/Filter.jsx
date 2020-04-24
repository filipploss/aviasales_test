import React from "react";
// import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";

import "./Filter.css";
import CheckboxTick from "../../images/Shape.svg";

export default function Filter() {
  return (
    <div className="filter-container">
      {/* <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p> */}
      <CheckboxesGroup />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  legend: {
    marginBottom: '20px',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.5px",
    color: "#4A4A4A",
  },
  filter: {
    display: "flex",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "20px",
    alignItems: "center",
    color: "#4A4A4A",
 
    // '&:hover': {
    //     backgroundColor: 'blue',
    //   },
  },
  icon: {
    borderRadius: "2px",
    display: "block",
    width: 20,
    height: 20,
    border: "1px solid #9ABBCE",
    boxSizing: "content-box",
    backgroundColor: "transparent",
    // backgroundImage:
    //   "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    // "$root.Mui-focusVisible &": {
    //   outline: "2px auto rgba(19,124,189,.6)",
    //   outlineOffset: 2,
    // },
    // "input:hover ~ &": {
    //   backgroundColor: "transparent",
    // },
    // "input:disabled ~ &": {
    //   boxShadow: "none",
    //   background: "rgba(206,217,224,.5)",
    // },
  },
  checkedIcon: {
    border: "1px solid #2196F3",
    boxSizing: "border-box",
    borderRadius: "2px",
    backgroundColor: "transparent",
    // backgroundImage:
    //   "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      backgroundPosition: "center",
      width: 20,
      height: 20,
      backgroundImage: `url(${CheckboxTick})`,
      backgroundRepeat: "no-repeat",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "transparent",
    },
  },
  formControl: {
    margin: '20px',
  },
}));

function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    all: true,
    nonStop: false,
    oneStop: false,
    twoStops: false,
    threeStops: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { all, nonStop, oneStop, twoStops, threeStops } = state;
  //   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.filter}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.legend}>КОЛИЧЕСТВО ПЕРЕСАДОК</FormLabel>
        <FormGroup>
          <FormControlLabel
            className={classes.filter}
            control={
              <Checkbox
                checked={all}
                onChange={handleChange}
                name="all"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
              />
            }
            label="Все"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nonStop}
                onChange={handleChange}
                name="nonStop"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
              />
            }
            label="Без пересадок"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={oneStop}
                onChange={handleChange}
                name="oneStop"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
              />
            }
            label="1 пересадка"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={twoStops}
                onChange={handleChange}
                name="twoStops"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
              />
            }
            label="2 пересадки"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={threeStops}
                onChange={handleChange}
                name="threeStops"
                checkedIcon={<span className={classes.checkedIcon} />}
                icon={<span className={classes.icon} />}
              />
            }
            label="3 пересадки"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    </div>
  );
}
