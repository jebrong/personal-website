import React from "react";

export default function Home() {
  return (
    <div className="page-container">
      <div className="title-container">
        <div className="subtext">architect</div>
        <div className="maintext">JANILLE SY</div>
        <div className="subtext-2">*web-developer/frontend/backend/</div>
      </div>
      <div className="home-nav">
        <div className="home-nav-item__container">
          <div className="text">*ABOUT</div>
          <div className="numb">01</div>
        </div>
        <div className="home-nav-item__container">
          <div className="text">*PROJECTS</div>
          <div className="numb">02</div>
        </div>
        <div className="home-nav-item__container">
          <div className="text">*CONTACT</div>
          <div className="numb">03</div>
        </div>
      </div>
    </div>
  );
}
