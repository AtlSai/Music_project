// import React from 'react'
import "./Hero.css";
import Back from "../../../src/assets/speaker.png"

const Hero = () => {
  return (
    <div className="main_"
    style={{
        backgroundImage: `url(${Back})`,
    }}
    >
      <div className="left">
      <i className="fa-solid fa-headphones"></i>
      </div>
      <div className="right">
        <h4>Join it now</h4>
        <h2>Why You Should Join Event</h2>
        <hr />
        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
        <div className="location">
            <div className="location_1">
            <i className="fa-solid fa-location-dot"></i>
            <div className="under">
                <h1>Where</h1>
                <p>Manchester, USA</p>
            </div>
            </div>
            <div className="location_2">
            <i className="fa-solid fa-earth-oceania"></i>
            <div className="under">
                <h1>Where</h1>
                <p>Manchester, USA</p>
            </div>
                </div>
        </div>
        <div>
            <button className="btn">ABOUT EVENT</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
