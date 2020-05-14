const initialState = {
  data: "",
  error: null,
  filteredData: {},
//   filterState: {
//     all: true,
//     nonStop: true,
//     oneStop: true,
//     twoStops: true,
//     threeStops: true,
//   },
  tab: "cheapest",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.payload,
        filteredData: action.payload,
        error: null,
      };
      case "FETCH_ERROR":
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

    case "TAB_SELECT_CHEAPEST":
      return {
        ...state,
        tab: "cheapest",
        // error: null,
      };
    case "TAB_SELECT_FASTEST":
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
