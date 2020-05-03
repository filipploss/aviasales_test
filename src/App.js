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
import TicketCard from "./components/TicketCard";
// import { ContextApp, initialState, reducer } from "./reducer.js";
import { fetchData } from "./actions";
import { dispatch } from "./index.js";

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

function App(props) {
  const classes = useStyles();
  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // let ticketsData;
    console.log("App loaded");
    const fetchSearchId = async () => {
      try {
        let response = await fetch(
          "https://front-test.beta.aviasales.ru/search"
        );
        let searchId = await response.json();
        // console.log(searchId.searchId);
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
        // console.log(props.data)
        //   console.log('!')
        //  console.log(res)

        //  console.log(res.tickets.sort((a, b) => a.price > b.price ? 1 : -1))
        dispatch(
          fetchData({
            tickets: res.tickets.sort((a, b) => (a.price > b.price ? 1 : -1)),
          })
        );
      });
  });

  return (
    // <ContextApp.Provider value={{ dispatch, state }}>
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box className={classes.logo}>
          <Logo />
        </Box>
        <Box display="flex">
          <Filter />
          <Box>
            <Tabs />
            <TicketCard number={0} />
            <TicketCard number={1} />
            <TicketCard number={2} />
            <TicketCard number={3} />
            <TicketCard number={4} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    // </ContextApp.Provider>
  );
}

// const mapStateToProps = ({ data, filteredData }) => {
//   return {
//     data,
//     filteredData
//   };
// };

export default connect()(App);
