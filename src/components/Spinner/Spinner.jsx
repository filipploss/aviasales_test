import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    margin: "20px",
  },
}));

function Spinner() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
}

export default Spinner;
