import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m, AnimatePresence } from "framer-motion";
// import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../features/utils/utilsSlice";
import { useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";
export default function Projects() {
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
              <div className="subtext">selected</div>
              <div className="maintext">"Works"</div>
            </div>
            <div className="subtext-3">
              Lorem ipsum dolor sit amet{" "}
              <span className="colored-span ">This is me</span>. Ornare sed odio
              interdum adipiscing quis consequat a pulvinar{" "}
            </div>
          </div>
        </div>
        <div className="proj-container">
          {projects.map((project, index) => {
            return (
              <div key={index} className="proj-item-container">
                <div className="proj-item-main first">{index + 1}</div>
                <div className="proj-item-title">{project.title}</div>
                <div className="proj-item-subtext">{project.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </m.div>
  );
}
