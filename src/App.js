import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import { ReactComponent as Logo } from "./images/plane.svg";
import "./App.css";
import Filter from "./components/Filter";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "12px",
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
