import { motion as m } from "framer-motion";
import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImArrowLeft2 } from "react-icons/im";
import {
  prevSingleImage,
  nextSingleImage,
  clickSingleImage,
  toggleOpenImage,
} from "../../features/utils/utilsSlice";

export default function Projects() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleProject, singleImages, selectedImage } = useSelector(
    (store) => store.utils
  );

  return singleProject ? (
    <m.div
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      exit="exit"
      className="page-container single"
    >
      <div className="page-body ">
        <div className="single-proj-container">
          <div className="back" onClick={() => navigate("/projects")}>
            <ImArrowLeft2></ImArrowLeft2>
          </div>
          {/* title and links */}
          <div className="single-project-title-container">
            <div className="single-project-title">{singleProject.title}</div>
            <div className="single-project-links-container">
              <a className="single-project-link site" href={singleProject.site}>
                visit site
              </a>
              <a className="single-project-link git" href={singleProject.git}>
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
            <img
              src={selectedImage}
              alt=""
              className="selected-image"
              onClick={() => {
                dispatch(toggleOpenImage());
              }}
            />
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
      <br />
    </m.div>
  ) : (
    <Navigate to="/projects"></Navigate>
  );
}
