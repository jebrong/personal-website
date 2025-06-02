import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m } from "framer-motion";
import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openNav } = useSelector((store) => store.utils);

  const [mouseXY, setMouseXY] = useState({ x: -50, y: -50 });
  const [text, setText] = useState("show");
  const toolkit = [
      "react",
      "typescript",
      "javascript",
      "flutter",
      "dart",
      "spfx",
      "html",
      "css",
      "sass",
      "tailwind",
      "bootstrap",
      "nodejs",
      "express",
      "mongodb",
      "postman",
      "git",
      "vite",
      "framer-motion",
      "azure-devops",
      "ci/cd",
      "figma",
      "photoshop"
  ];

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
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      exit="exit"
      className="page-container about"
    >
      <Nav></Nav>
      <NavButton></NavButton>
      <div className="page-body">
        <div className="title-container">
          <div className="others-container">
            <div className="title">
              <div
                className="maintext"
                onMouseEnter={() => {
                  setText("zoom");
                }}
                onMouseLeave={() => {
                  setText("show");
                }}
              >
                "About"
              </div>
            </div>

            <div className="single-project-links-container ">
              <a
                className="single-project-link git"
                href="https://github.com/jebrong"
              >
                visit github
              </a>
              <br />
              <a
                className="single-project-link site"
                href="https://www.linkedin.com/in/janille-sy-65b389110/"
              >
                visit linkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="body-text">
          <div
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
            className="text about"
          >
            <p>
              I’m passionate about <span className="colored-span">web development</span> and constantly exploring new ways to build <span className="colored-span">user-friendly</span>, efficient digital experiences. Over time, I’ve developed a <span className="colored-span">meticulous eye for detail</span> and a <span className="colored-span">problem-solving mindset</span> that help me tackle complex challenges while keeping designs elegant and functional. I’m always eager to learn and grow, making every project an opportunity to sharpen my skills and deliver quality results.
            </p>

            <p>
              My journey started with a curiosity about how websites and apps work, which quickly turned into a passion for coding. Through <span className="colored-span">self-study</span>, I dived into programming languages, frameworks, and tools like React, Flutter, and TypeScript. I built small projects for myself and friends, learning by doing and constantly improving. This hands-on experience taught me how to write clean, maintainable code and adapt quickly to new tech.
            </p>

            <p>
              I’ve come to appreciate how my background in design shapes my approach to frontend development. It gives me a strong sense of <span className="colored-span">visual aesthetics</span> and <span className="colored-span">user experience</span>, making it easier to create interfaces that are not only functional but also enjoyable to use. I also value teamwork and communication, collaborating closely with others to ensure smooth project delivery and shared success.
            </p>

            <p>
              Today, I’m focused on growing as a <span className="colored-span">frontend developer</span>, driven by the excitement of crafting digital solutions that look great and work seamlessly. I’m excited for the challenges ahead and motivated to contribute meaningfully to the ever-changing world of technology.
            </p>


            <h1>"Toolkit"</h1>
            <div className="toolkit-wrapper">
              {toolkit.map((tool, index) => {
                return (
                  <div className="colored-span toolkit" key={index}>
                    {tool}
                  </div>
                );
              })}
            </div>
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
