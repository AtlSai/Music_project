// import React from 'react'
import "./Fifth.css";
import img1 from "../../assets/t1.jpg";
import img2 from "../../assets/t2.jpg";
import img3 from "../../assets/t3.jpg";

const Fifth = () => {
  return (
    <div className="main_fifth">
      <div className="upper_fifth">
        <div className="upper_text">
          <h3>Listen to the </h3>
          <h1>Event Organizers</h1>
          <hr />
        </div>
      </div>
      <div className="profiles">
        <div
          className="profile1"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "contain",
          }}
        ></div>
        <div
          className="profile2"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "contain",
          }}
        ></div>
        <div
          className="profile3"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="info">
            <div className="name1">
                <h1>James Anderson</h1>
                <p>Founders, Cards</p>
            </div>
            <div className="name2">
            <h1>James Anderson</h1>
            <p>Founders, Cards</p>
            </div>
            <div className="name3">
            <h1>James Anderson</h1>
            <p>Founders, Cards</p>
            </div>
        </div>
    </div>
  );
};

export default Fifth;
