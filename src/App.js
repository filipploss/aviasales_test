import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

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

  useEffect(() => {
    let cheapest;
    let fastest;
    const fetchSearchId = async () => {
      try {
        let response = await fetch(
          "https://front-test.beta.aviasales.ru/search"
        );
        let searchId = await response.json();
        console.log(searchId.searchId);
        return searchId.searchId;
      } catch (err) {
        alert('Что-то пошло не так :( Перезагрузите страницу'); // TypeError: failed to fetch
      }
      // TODO: error обработка
    };

    const fetchTickets = async (searchId) => {
      try {
        let response = await fetch(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
        );
        // TODO: error обработка
        // TODO: обработать завершение поиска!
        console.log(response);
        let tickets = await response.json();
        console.log(tickets);
      } catch (err) {
        alert('Что-то пошло не так :( Перезагрузите страницу'); // TypeError: failed to fetch
      }
    };

    fetchSearchId().then((res) => fetchTickets(res));
  });

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
            <Ticket />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
