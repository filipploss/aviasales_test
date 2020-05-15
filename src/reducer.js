const initialState = {
  data: "",
  error: null,
  filteredData: {},
  tab: "cheapest",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    case "FILTER_DATA":
      return {
        ...state,
        filteredData: action.payload,
        // error: null,
      };
    //   case "FILTER_STATE":
    //     return {
    //       ...state,
    //     //   filterState: {...state.filterState, [action.payload]: }
    //     };

    case "SELECT_TAB_CHEAPEST":
      return {
        ...state,
        tab: "cheapest",
        // error: null,
      };
    case "SELECT_TAB_FASTEST":
      return {
        ...state,
        tab: "fastest",
        // error: null,
      };
    default:
      return state;
  }
};

export default reducer;
