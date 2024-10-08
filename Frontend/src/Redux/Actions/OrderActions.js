import axios from "axios"
import { CART_CLEAR_ITEM } from "../Constants/CardConstants"
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../Constants/OrderConstants"
import { logout } from "./userActions"


// Create Order 
export const createOrder = (order) => async (dispatch,getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/orders`, order, config)
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })
        dispatch({ type: CART_CLEAR_ITEM, payload: data })
        localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === "Not authorize , token failed") {
            dispatch(logout())
        }
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message
        })
    }
}