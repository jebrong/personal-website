import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion as m, AnimatePresence } from "framer-motion";
import { toggleNav } from "../features/utils/utilsSlice";

export default function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openNav } = useSelector((store) => store.utils);

  const pageAnimationLeft = {
    hidden: { x: "100%" },
    show: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",

        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 1.8,
        delay: 0.5,
        ease: "easeOut",
        type: "spring",
        damping: 20,
      },
    },
  };

  const navChildren = {
    hidden: { y: "100%" },
    show: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        damping: 10,
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        damping: 10,
      },
    },
  };

  return (
    <div className="nav-container">
      <AnimatePresence>
        {openNav && (
          <m.div
            key={openNav}
            variants={pageAnimationLeft}
            initial="hidden"
            animate="show"
            exit={{ x: "100%", transition: { duration: 0.2 } }}
            className="nav-open"
          >
            <div className="nav-texts">
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/");
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <m.div variants={navChildren} className="nav-text-container">
                  <m.div className="nav-text">HOME</m.div>
                  <m.div className="nav-text-underline"></m.div>
                </m.div>
              </m.div>
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/about");
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <m.div variants={navChildren} className="nav-text-container">
                  <m.div className="nav-text">ABOUT</m.div>
                  <m.div className="nav-text-underline"></m.div>
                </m.div>
              </m.div>
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/contact");
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <m.div variants={navChildren} className="nav-text-container">
                  <m.div className="nav-text">CONTACT</m.div>
                  <m.div className="nav-text-underline"></m.div>
                </m.div>
              </m.div>
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/projects");
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <m.div variants={navChildren} className="nav-text-container">
                  <m.div className="nav-text">PROJECTS</m.div>
                  <m.div className="nav-text-underline"></m.div>
                </m.div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
