import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Actions/CartActions";
import Header from "./../components/Header";

const PaymentScreen = ({history}) => {
  window.scrollTo(0, 0);
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push("/shipping")
  }

  const [paymentMethod, setPaymentMethod] = useState("GooglePay")
  
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push("/placeorder")
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input className="form-check-input" type="radio" value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}/>
              <label className="form-check-label">GooglePay or Debit Card</label>
            </div>
          </div>

          <button type="submit">
              Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
