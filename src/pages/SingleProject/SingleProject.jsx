import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m, AnimatePresence } from "framer-motion";
// import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../features/utils/utilsSlice";
import { useNavigate, Navigate } from "react-router-dom";

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
      className="page-container"
    >
      <button
        onClick={() => {
          dispatch(prevSingleImage());
        }}
      >
        back
      </button>
      <button
        onClick={() => {
          dispatch(nextSingleImage());
        }}
      >
        next
      </button>
      <Nav></Nav>
      <NavButton></NavButton>
      <div className="page-body">
        <div className="single-proj-container">
          <div className="back">back</div>
          {/* title and links */}
          <div className="single-project-title-container">
            <div className="single-project-title">{singleProject.title}</div>
            <div className="single-project-links-container">
              <a
                className="single-project-link site"
                href="https://www.google.com/"
              >
                Site
              </a>
              <a
                className="single-project-link git"
                href="https://www.google.com/"
              >
                Git
              </a>
            </div>
          </div>
          {/* desc */}
          <div className="proj-item-subtext">{singleProject.desc}</div>

          {/* images */}
          <div className="images-container">
            {singleImages.map((image, index) => {
              return (
                <div
                  className="image-container"
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
          {/* <div className="selected-image"> */}
          <img src={selectedImage} alt="gag" />
          {/* </div> */}
        </div>
      </div>
    </m.div>
  ) : (
    <Navigate to="/projects"></Navigate>
  );

  // return (

  // );
}
