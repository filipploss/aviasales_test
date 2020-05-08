const initialState = {
    data: [],
    filteredData: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                data : action.payload,
                filteredData: action.payload
            };
        case 'FILTER_DATA':
            return {
                ...state,
                filteredData: action.payload
            };
        case 'SELECT_CHEAPEST':
            return {
                ...state,
                filteredData : action.payload
            };
            case 'SELECT_FASTEST':
            return {
                ...state,
                filteredData : action.payload
            };
        default:
            return state
    }
};

export default reducer;