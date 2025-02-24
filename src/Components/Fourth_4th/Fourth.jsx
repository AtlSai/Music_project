// import React from 'react'
import "./Fourth.css"
import PartyGirl from "../../assets/party_girls.jpg"
// import Party from "../../../src/assets/party"

const Fourth = () => {
  return (
    <div className="upper" 
    style={{
      backgroundImage: `url(${PartyGirl})`,
      height: "70vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      objectFit: "contain",
    }}
    >
<div className="middle">
<div className="first">
  <h1>68+</h1>
  <h2>Victory Speaker</h2>
  <hr />
</div>
<div className="second">
<h1>99+</h1>
<h2>International Speaker</h2>
<hr />
</div>
<div className="third">
<h1>103+</h1>
<h2>Event Participant</h2>
<hr />
</div>
</div>
    </div>
  )
}

export default Fourth