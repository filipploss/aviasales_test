const initialState = {
  data: "",
  error: null,
  filteredData: {},
  tab: "cheapest",
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
        error: null,
        loading: false,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };

    case "FILTER_DATA":
      // if (state.filteredData !== action.payload) {
        return {
          ...state,
          filteredData: action.payload,
        };
      // } else {
      //   return {
      //     ...state,
      //   };
      // }

    case "SELECT_TAB_CHEAPEST":
      return {
        ...state,
        tab: "cheapest",
      };
    case "SELECT_TAB_FASTEST":
      return {
        ...state,
        tab: "fastest",
      };
    default:
      return state;
  }
};

export default reducer;
