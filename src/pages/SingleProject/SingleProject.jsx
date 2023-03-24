import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m, AnimatePresence } from "framer-motion";
// import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../features/utils/utilsSlice";
import { useNavigate, Navigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImArrowLeft2 } from "react-icons/im";

import {
  findProject,
  prevSingleImage,
  nextSingleImage,
  clickSingleImage,
} from "../../features/utils/utilsSlice";
import { useEffect } from "react";

export default function Projects() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProjects, singleProject, singleImages, selectedImage } =
    useSelector((store) => store.utils);

  return singleProject ? (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 1 }}
      className="page-container single"
    >
      <Nav></Nav>
      <NavButton></NavButton>
      <div className="page-body ">
        <div className="single-proj-container">
          <div className="back" onClick={() => navigate("/projects")}>
            <ImArrowLeft2></ImArrowLeft2>
          </div>
          {/* title and links */}
          <div className="single-project-title-container">
            <div className="single-project-title">{singleProject.title}</div>
            <div className="single-project-links-container">
              <a
                className="single-project-link site"
                href="https://www.google.com/"
              >
                visit site
              </a>
              <a
                className="single-project-link git"
                href="https://www.google.com/"
              >
                visit github
              </a>
            </div>
          </div>

          {/* desc */}
          <div className="tag-container">
            <span className="tag-title">TAGS:</span>
            {singleProject.tags.map((tag, index) => {
              return (
                <div className="tag" key={index}>
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="single-project-desc">{singleProject.desc}</div>

          {/* images */}
          <div className="images-container">
            {singleImages.map((image, index) => {
              return (
                <div
                  className={
                    image === selectedImage
                      ? "image-container selected"
                      : "image-container"
                  }
                  key={index}
                  onClick={() => {
                    dispatch(clickSingleImage(image));
                  }}
                >
                  <img src={image} alt="" />
                </div>
              );
            })}
          </div>

          {/* selected image */}

          <div className="selected-image-container">
            <img src={selectedImage} alt="" className="selected-image" />
            <button
              className="image-btn back"
              onClick={() => {
                dispatch(prevSingleImage());
              }}
            >
              <AiOutlineLeft className="arrow-btn" />
            </button>
            <button
              className="image-btn next"
              onClick={() => {
                dispatch(nextSingleImage());
              }}
            >
              <AiOutlineRight className="arrow-btn" />
            </button>
          </div>
        </div>
      </div>
    </m.div>
  ) : (
    <Navigate to="/projects"></Navigate>
  );

  // return (

  // );
}
