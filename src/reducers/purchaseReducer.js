const initialState = {
    loading: false,
    data: [],
    error: null
};

export const purchaseDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PURCHASE_DATA_FETCHING": 
            return {...state, loading: true}
        case "PURCHASE_DATA": 
            return {...state, loading: false, data: action.data}
        case "PURCHASE_DATA_ERROR": 
            return {...state, loading: false, error: "Couldn't load data"}
        default:
            return state
    }
}