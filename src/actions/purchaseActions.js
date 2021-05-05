import axios from "axios"

export const fetchPurchaseData = () => async (dispatch, getstate) => {
    dispatch({type: "PURCHASE_DATA_FETCHING"})
    await axios.get("https://retoolapi.dev/2r4MYy/ecom").then((response) => {
        console.log('response',response.data)
        dispatch({type: "PURCHASE_DATA", data: response.data})
    }).catch((error) => {
        dispatch({type: "PURCHASE_DATA_ERROR"})
    });
        
}
