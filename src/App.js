import React, { useEffect } from "react";
import { connect } from "react-redux";
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
import { fetchData } from "./actions";
import { dispatch } from "./index.js";

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
    flexWrap: 'wrap'
  },

  logo: {
    display: "flex",
    justifyContent: "center",
    margin: "28px 0 28px",
  },
}));

function App(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log("App loaded");
    const fetchSearchId = async () => {
      try {
        let response = await fetch(
          "https://front-test.beta.aviasales.ru/search"
        );
        let searchId = await response.json();
        return searchId.searchId;
      } catch (err) {
        alert("Что-то пошло не так :( Перезагрузите страницу"); // TypeError: failed to fetch
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
        // console.log(response);
        let ticketsData = await response.json();
        // console.log(ticketsData);
        // ticketsData = tickets;
        return ticketsData;
      } catch (err) {
        alert("Что-то пошло не так :( Перезагрузите страницу"); // TypeError: failed to fetch
      }
    };

    fetchSearchId()
      .then((res) => fetchTickets(res))
      .then((res) => {
        dispatch(
          fetchData({
            tickets: res.tickets.sort((a, b) => (a.price > b.price ? 1 : -1)),
          })
        );
      });
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" >
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

export default connect()(App);
