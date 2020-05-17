import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as Logo } from "./images/plane.svg";
import "./App.css";
import Filter from "./components/Filter";
import Tabs from "./components/Tabs";
import TicketsContainer from "./components/TicketsContainer";
import * as actions from "./actions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196F3",
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "13px",
        fontWeight: "normal",
        lineHeight: "20px",
      },
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});

const useStyles = makeStyles((theme) => ({
  widget: {
    display: "flex",
    flexWrap: "wrap",
  },

  logo: {
    display: "flex",
    justifyContent: "center",
    margin: "28px 0 28px",
  },
}));

function App({ getData }) {
  const classes = useStyles();

  useEffect(() => {
    getData();
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box className={classes.logo}>
          <Logo />
        </Box>
        <Box className={classes.widget}>
          <Filter />
          <Box>
            <Tabs />
            <TicketsContainer />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { getData } = bindActionCreators(actions, dispatch);
  return {
    getData,
  };
};

export default connect(null, mapDispatchToProps)(App);
