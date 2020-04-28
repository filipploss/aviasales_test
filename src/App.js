import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
// // or
// import { Checkbox } from '@material-ui/core';

import { ReactComponent as Logo } from "./images/plane.svg";
import "./App.css";
import Filter from "./components/Filter";
import Tabs from "./components/Tabs";
import Ticket from "./components/Ticket";

const theme = createMuiTheme({
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
    // fontStyle: "normal",
    // fontWeight: "normal",
  },
});

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    justifyContent: "center",
    margin: "28px 0 28px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box className={classes.logo}>
          <Logo />
        </Box>
        <Box display="flex">
          <Filter />
          <Box>
          <Tabs />
          <Ticket/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
