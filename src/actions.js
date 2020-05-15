const fetchData = (payload) => ({ type: "FETCH_DATA_SUCCESS", payload });
const fetchError = () => ({ type: "FETCH_DATA_FAILURE" });
const filterData = (payload) => ({ type: "FILTER_DATA", payload });
const selectTab = (tab) => {
  if (tab === "fastest") {
    return { type: "SELECT_TAB_FASTEST" };
  } else {
    return { type: "SELECT_TAB_CHEAPEST" };
  }
};

const getData = () => (dispatch) => {
  console.log("getData");
  const getSearchId = async () => {
    try {
      let response = await fetch("https://front-test.beta.aviasales.ru/search");
      let searchId = await response.json();
      return searchId.searchId;
    } catch (err) {
      dispatch(fetchError());
    }
  };

  const getTickets = async (searchId) => {
    try {
      let response = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      );
      let ticketsData = await response.json();
      /// ????
      // console.log('before:', ticketsData)
      // ticketsData.tickets = ticketsData.tickets.sort((a, b) => (a.price > b.price ? 1 : -1));
      // console.log('after:', ticketsData)
      dispatch(
        fetchData({
          tickets: ticketsData.tickets,
        })
      );
      console.log("ticketsData:", ticketsData);
      return ticketsData;
    } catch (err) {
      dispatch(fetchError());
    }
  };
  getSearchId().then((res) => getTickets(res));
};

export { fetchData, fetchError, filterData, getData, selectTab };
