// import React from "react";
import "./Pricing.css"; // Import the CSS file

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h3 className="pricing-title">Pricing Plans</h3>
      <h2 className="pricing-heading">Get Your Ticket Now</h2>

      <div className="pricing-grid">
        {/* Early Bird Plan */}
        <div className="pricing-card">
          <h3 className="card-title">Early Bird</h3>
          <hr />
          <p className="price">$20</p>
          <hr />
          <p className="per-month">Month</p>
          <p className="description">
            It has survived not only five centuries, but also the leap into electronic.
          </p>
          <ul className="features">
            <li>✔️ Front Seats</li>
            <li>✔️ Free Entrance</li>
            <li>✔️ Free Checkout</li>
            <li>✔️ 1x Speech Listening</li>
          </ul>
          <button className="buy-btn">BUY TICKET</button>
        </div>

        {/* Regular Plan */}
        <div className="pricing-card featured">
          <h3 className="card-title">Regular</h3>
          <p className="price">$35</p>
          <p className="per-month">Month</p>
          <p className="description">
            It has survived not only five centuries, but also the leap into electronic.
          </p>
          <ul className="features">
            <li>✔️ Front Seats</li>
            <li>✔️ Free Entrance</li>
            <li>✔️ Free Snacks</li>
            <li>✔️ Free Checkout</li>
            <li>✔️ 5x Speech Listening</li>
          </ul>
          <button className="buy-btn featured-btn">BUY TICKET</button>
        </div>

        {/* VIP Plan */}
        <div className="pricing-card">
          <h3 className="card-title">VIP</h3>
          <p className="price">$58</p>
          <p className="per-month">Month</p>
          <p className="description">
            It has survived not only five centuries, but also the leap into electronic.
          </p>
          <ul className="features">
            <li>✔️ Front Seats</li>
            <li>✔️ Free Entrance</li>
            <li>✔️ Free Snacks</li>
            <li>✔️ 8x Speech Listening</li>
          </ul>
          <button className="buy-btn">BUY TICKET</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
