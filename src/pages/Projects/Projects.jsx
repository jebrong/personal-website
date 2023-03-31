import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m, AnimatePresence } from "framer-motion";
// import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../features/utils/utilsSlice";
import { useNavigate } from "react-router-dom";

import { findProject } from "../../features/utils/utilsSlice";
import { useEffect, useState } from "react";

export default function Projects() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProjects, singleProject } = useSelector((store) => store.utils);

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
      <Nav></Nav>
      <NavButton></NavButton>
      <div className="page-body">
        <div className="title-container">
          <div className="others-container">
            <div className="title">
              <div
                className="subtext"
                onMouseEnter={() => {
                  setText("zoom");
                }}
                onMouseLeave={() => {
                  setText("show");
                }}
              >
                selected
              </div>
              <div
                className="maintext"
                onMouseEnter={() => {
                  setText("zoom");
                }}
                onMouseLeave={() => {
                  setText("show");
                }}
              >
                "Works"
              </div>
            </div>
            <div
              className="subtext-3"
              onMouseEnter={() => {
                setText("zoom");
              }}
              onMouseLeave={() => {
                setText("show");
              }}
            >
              Lorem ipsum dolor sit amet
              <span className="colored-span ">This is me</span>. Ornare sed odio
              interdum adipiscing quis consequat a pulvinar{" "}
            </div>
          </div>
        </div>
        <div className="proj-container">
          {allProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className="proj-item-container"
                onClick={() => {
                  dispatch(findProject(project.id));
                  navigate("/projects/" + project.id);
                }}
                onMouseEnter={() => {
                  setText("zoom");
                }}
                onMouseLeave={() => {
                  setText("show");
                }}
              >
                <div className="main-title-container">
                  <div className="proj-item-main ">{index + 1}</div>
                  <div className="proj-item-title">{project.title}</div>
                </div>
                <div className="proj-item-subtext">{project.intro}</div>
              </div>
            );
          })}
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
