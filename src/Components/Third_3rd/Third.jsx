// import React from 'react'
import "./Third.css";
import Speaker from "../../assets/speaker.png";

const Third = () => {
  return (
    <div
      className="Third"
      style={{
        backgroundImage: `url(${Speaker})`,
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="top">
        <div className="text">
          <h3>Join the event</h3>
          <h1>Event Outcomes.</h1>
          <hr />
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <div className="icon">
            <i className="fa-solid fa-microphone"></i>
          </div>
          <div className="bottom_text">
          <h1>01.Great Speakers</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting and unknown printer galley.</h2>
          </div>
        </div>
        <div className="card2">
          <div className="icon">
              <i className="fa-regular fa-face-smile"></i>
          </div>
          <div className="bottom_text">
          <h1>01.Great Speakers</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting and unknown printer galley.</h2>
          </div>
        </div>
        <div className="card3">
          <div className="icon">
            <i className="fa-solid fa-champagne-glasses"></i>
          </div>
          <div className="bottom_text">
          <h1>01.Great Speakers</h1>
          <h2>Lorem Ipsum is simply dummy text of the printing and typesetting and unknown printer galley.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
