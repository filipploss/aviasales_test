const fetchData = (payload) => ({ type: "FETCH_DATA", payload });
const fetchError = () => ({ type: "FETCH_ERROR"});
const filterData = (payload) => ({ type: "FILTER_DATA", payload });
const filterState = (payload) => ({ type: "FILTER_STATE", payload });
const tabSelectCheapest = () => ({ type: "TAB_SELECT_CHEAPEST" });
const tabSelectFastest = () => ({ type: "TAB_SELECT_FASTEST" });

export {
  fetchData,
  fetchError,
  filterData,
  filterState,
  tabSelectCheapest,
  tabSelectFastest,
};
