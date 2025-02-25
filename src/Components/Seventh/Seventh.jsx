// import React from 'react'
import "./Seventh.css";
import Musicimg1 from "../../assets/g1.jpg";
import Musicimg2 from "../../assets/g2.jpg";
import Musicimg3 from "../../assets/g3.jpg";
import Musicimg4 from "../../assets/g4.jpg";
import Musicimg5 from "../../assets/g5.jpg";
import Musicimg6 from "../../assets/g6.jpg";

const Seventh = () => {
  return (
    <div className="seventh_main">
      <img src={Musicimg1} alt="Music 1" className="music_img" />
      <img src={Musicimg2} alt="Music 2" className="music_img" />
      <img src={Musicimg3} alt="Music 3" className="music_img" />
      <img src={Musicimg4} alt="Music 4" className="music_img" />
      <img src={Musicimg5} alt="Music 5" className="music_img" />
      <img src={Musicimg6} alt="Music 6" className="music_img" />
    </div>
  );
};

export default Seventh;
