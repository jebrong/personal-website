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
    "html",
    "css",
    "javascript",
    "react",
    "typescript",
    "nodeJS",
    "express",
    "postman",
    "mongoDB",
    "git",
    "sass",
    "framer-motion",
    "tailwind",
    "bootstrap",
    "vite",
    "figma",
    "photoshop",
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
              As a licensed architect with a passion for technology, I am now
              proudly paving the way to pursue a career in{" "}
              <span className="colored-span">web development</span> . Throughout
              my training and professional experience, I have developed a{" "}
              <span className="colored-span">
                meticulous eye for detail, an aptitude for problem-solving, and
                a creative approach to design,
              </span>
              which I believe is highly applicable to web development. I am
              eager to take on new challenges and expand my skillset in a field
              that combines my technical expertise with my imaginative spirit.
              Through my work, I aim to create
              <span className="colored-span">
                innovative and user-friendly digital solutions{" "}
              </span>{" "}
              that are both aesthetically pleasing and functionally sound.
            </p>
            <p>
              With my background in design, I found that I had a natural
              inclination towards the creative and technical aspects of web
              development. I started to teach myself how to code, exploring
              different programming languages, frameworks, and databases. I even
              began working on my own projects, building websites and apps for
              friends and family.
            </p>

            <p>
              As I further immersed myself in web development, I began to
              appreciate the similarities between architecture and coding. Both
              require{" "}
              <span className="colored-span">
                a keen eye for detail, problem-solving skills, and the ability
                to bring complex ideas to life.
              </span>
              I also found that my skills in{" "}
              <span className="colored-span">
                project management, team collaboration, and client communication
              </span>
              were transferrable to the tech industry.
            </p>

            <p>
              Today, I am a licensed architect pursuing a career in web
              development. I lean to work as a{" "}
              <span className="colored-span">front-end developer </span> ,
              focusing on creating
              <span className="colored-span">
                user-friendly websites, elegant designs, and top-notch user
                experiences.
              </span>
              I am passionate about using my knowledge and skills to create
              digital solutions that not only look aesthetically pleasing but
              also function seamlessly and drive results for my clients.
            </p>
            <p>
              My journey from architecture to web development has been a
              challenging yet fulfilling one. I am excited to see where this
              path takes me and look forward to contributing to the
              ever-evolving world of technology.
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
