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
                // filteredData: action.payload.tickets.price.sort()
            };
        case 'cheapest':
            return {
                ...state,
                filteredData : action.payload
            };
            case 'fastest':
            return {
                ...state,
                filteredData : action.payload
            };
        default:
            return state
    }
};

export default reducer;