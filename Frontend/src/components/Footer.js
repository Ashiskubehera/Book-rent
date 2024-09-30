import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="GooglePay"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/Screenshot_2020-11-05_at_5.14._1200x768.png?qbPeEkmH2KWK1YfUw65UmVr8EjYDRPgb&size=770:433"
            // src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="express"
            src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
