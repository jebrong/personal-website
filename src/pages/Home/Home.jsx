import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m, AnimatePresence } from "framer-motion";
import { v1Logo } from "../../animations/animations";

import { useState, useEffect } from "react";
import Cursor from "../../components/Cursor";

export default function Home() {
  const navigate = useNavigate();

  const [mouseXY, setMouseXY] = useState({ x: -50, y: -50 });
  const [text, setText] = useState("show");

  const mouseAnimate = {
    show: {
      x: mouseXY.x - 16,
      y: mouseXY.y - 16,
    },
    zoom: {
      height: 150,
      width: 150,
      x: mouseXY.x - 75,
      y: mouseXY.y - 75,

      backgroundColor: "#eeeeee",
      mixBlendMode: "difference",
    },
  };

  useEffect(() => {
    const findMouseXY = (e) => {
      setMouseXY({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", findMouseXY);
    return () => {
      window.removeEventListener("mousemove", findMouseXY);
    };
  }, [mouseXY]);

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
          <div
            className="maintext"
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
          >
            JANILLE SY
          </div>
          <span
            className="tm-text"
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
          >
            TM
          </span>
        </div>
        <div className="c-text">©2023</div>
        <div
          className="subtext-2"
          onMouseEnter={() => {
            setText("zoom");
          }}
          onMouseLeave={() => {
            setText("show");
          }}
        >
          *web-developer/frontend/backend/
        </div>
      </div>

      <div className="home-box-nav">
        <div className="box-wrapper">
          <div className="box-container">
            <m.div
              className="box-primary"
              variants={v1Logo}
              // animate="show"
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
            <div className="box-secondary-1"></div>
            <div className="box-secondary-2"></div>
          </div>
        </div>
        <div className="home-nav">
          <div
            className="home-nav-item__container"
            onClick={() => {
              navigate("/about");
            }}
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
          >
            <div className="text">"ABOUT"</div>
            <div className="numb">01</div>
          </div>
          <div
            className="home-nav-item__container"
            onClick={() => {
              navigate("/projects");
            }}
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
          >
            <div className="text-container">
              <div className="text">"PROJECTS"</div>
              <div className="text-small">[SELECTED WORKS]</div>
            </div>
            <div className="numb">02</div>
          </div>
          <div
            className="home-nav-item__container"
            onClick={() => {
              navigate("/contact");
            }}
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
          >
            <div className="text">"CONTACT"</div>
            <div className="numb">03</div>
          </div>
        </div>
      </div>

      {/* cursors */}
      <m.div variants={mouseAnimate} animate={text} className="cursor"></m.div>
      {text === "show" && (
        <m.div
          animate={{
            x: mouseXY.x - 50,
            y: mouseXY.y - 50,
            transition: {
              type: "spring",
              damping: 8,
            },
          }}
          className="cursor-2"
        ></m.div>
      )}
    </m.div>
  );
}
