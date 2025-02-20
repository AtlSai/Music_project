// import React from 'react'
import Backimage from "../../assets/main1.jpg";
import Pretty from "../../assets/pretty1.png";
import Navbar from "../Navbar/Nav.jsx"
import MainFooter from "../MainFooter/MainFooter.jsx";
import "./Main.css";

const Main = () => {
  return (
    // <Navbar/>
    <div 
      className="main"
      style={{
        backgroundImage: `url(${Backimage})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        marginTop: "0px",
        objectFit: "contain",
        backgroundPosition: "center"
      }}
    >
        <Navbar/>
      <div
        className="center"
        style={{
          backgroundImage: `url(${Pretty})`,
          height: "500px",
          width: "19%",
          backgroundColor: "transparent",
          backgroundSize: "cover",
          display: "block",
          margin: "auto",
          marginTop: "70px"
        }}
      ><h1>MegaOne..</h1></div>
      <MainFooter/>
    </div>
  );
};

export default Main;
