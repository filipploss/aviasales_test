import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import { ReactComponent as Logo } from "./images/plane.svg";
import "./App.css";
import Filter from "./components/Filter";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Logo />
        <Filter />
      </div>
    </ThemeProvider>
  );
}

export default App;
