const fetchData = (payload) => ({ type: "FETCH_DATA_SUCCESS", payload });
const fetchError = () => ({ type: "FETCH_DATA_FAILURE" });
const filterData = (payload) => ({ type: "FILTER_DATA", payload });
// const filterState = (payload) => ({ type: "FILTER_STATE", payload });
const selectTab = (tab) => {
  if (tab === "fastest") {
    return { type: "SELECT_TAB_FASTEST" };
  } else {
    return { type: "SELECT_TAB_CHEAPEST" };
  }
};

export {
  fetchData,
  fetchError,
  filterData,
  //   filterState,
  selectTab,
};
