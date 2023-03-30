import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m, AnimatePresence } from "framer-motion";
import { v1Logo, buttonHoverTap } from "../../animations/animations";

import { useState, useEffect } from "react";
import Cursor from "../../components/Cursor";

export default function Home() {
  const navigate = useNavigate();
  const name = "JanilleSy".split("");

  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 1 }}
      className="page-container"
    >
      <div className="title-container home">
        <div className="subtext">architect</div>
        <div className="maintext-container">
          <div className="maintext">
            {name.map((letter, index) => {
              return (
                <m.span
                  key={index}
                  className="text-span"
                  whileHover={{
                    transform: [
                      "scale3d(1,1,1)",
                      "scale3d(1.4,.55,1)",
                      "scale3d(.75,1.25,1)",
                      "scale3d(1.25,0.85,1)",
                      "scale3d(.9,1.05,1)",
                      "scale3d(1,1,1)",
                    ],
                  }}
                >
                  {letter}
                </m.span>
              );
            })}
          </div>
          <span className="tm-text">TM</span>
        </div>
        <div className="c-text">©2023</div>
        <div className="subtext-2">*web-developer/frontend/backend/</div>
      </div>

      <div className="home-box-nav">
        <div className="box-wrapper">
          <div className="box-container">
            <m.div
              className="box-primary"
              variants={v1Logo}
              animate="show"
              whileTap="tap"
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
            >
              <h1 className="text">"move"</h1>
            </m.div>
            <m.div
              className="box-secondary-1"
              variants={v1Logo}
              animate="show"
              whileTap="tap"
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
            ></m.div>
            <m.div
              className="box-secondary-2"
              variants={v1Logo}
              animate="show"
              whileTap="tap"
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
            ></m.div>
          </div>
        </div>
        <div className="home-nav">
          <m.div
            className="home-nav-item__container"
            onClick={() => {
              navigate("/about");
            }}
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="text-wrapper">
              <div className="text display home">"ABOUT"</div>
              <div className="text underline"></div>
            </div>
            <div className="numb-container">
              <div className="numb">01</div>
            </div>
          </m.div>
          <m.div
            className="home-nav-item__container"
            onClick={() => {
              navigate("/projects");
            }}
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="text-container text-wrapper">
              <div className="text">"PROJECTS"</div>
              <div className="text underline"></div>
              <div className="text-small">[SELECTED WORKS]</div>
            </div>
            <div className="numb-container">
              <div className="numb">02</div>
            </div>
          </m.div>
          <m.div
            className="home-nav-item__container"
            onClick={() => {
              navigate("/contact");
            }}
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="text-wrapper">
              <div className="text">"CONTACT"</div>
              <div className="text underline"></div>
            </div>
            <div className="numb-container">
              <div className="numb">03</div>
            </div>
          </m.div>
        </div>
      </div>
    </m.div>
  );
}
