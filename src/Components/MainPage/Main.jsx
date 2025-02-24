import Backimage from "../../assets/main1.jpg";
import Pretty from "../../assets/pretty1.png";
import Navbar from "../Navbar/Nav.jsx";
import MainFooter from "../MainFooter/MainFooter.jsx";
import "./Main.css";
import GlitterEffect from "../GletterEffect/GlitterEffect.jsx";

const Main = () => {
  return (
    <div 
      className="main"
      style={{
        backgroundImage: `url(${Backimage})`,
      }}
    >
      <GlitterEffect/>
      <Navbar />
      <div className="center" style={{
         backgroundImage: `url(${Pretty})`,
         height: "400px",
         marginTop: "20px",
         position: "relative",
        zIndex: "1",
     }}>
        <h1>MegaOne..</h1>
      </div>
      <MainFooter />
    </div>
  );
};

export default Main;
