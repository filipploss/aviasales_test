import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ErrorIndicator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">
        Что-то пошло не так :( Перезагрузите страницу!
      </Alert>
    </div>
  );
}

export default ErrorIndicator;
