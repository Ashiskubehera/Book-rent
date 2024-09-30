import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducers";
import { cardReducer } from "./Reducers/CartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./Reducers/UserReducers";
import { orderCreateReducer } from "./Reducers/OrderReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cardReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
    
// Login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// Shipping Address
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};


const intialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage
    },
    userLogin: { userInfo: userInfoFromLocalStorage }
};

const middleware = [thunk]

const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;