import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m, AnimatePresence } from "framer-motion";
// import { pageAnimationLeft, buttonHoverTap } from "../animations/animations";
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
        type: "spring",
        damping: 20,
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 1.8,
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
            exit="exit"
            className="nav-open"
          >
            <div>
              <m.div style={{ overflow: "hidden" }}>
                <m.h1 style={{ margin: 0, padding: 0 }} variants={navChildren}>
                  MENU*
                </m.h1>
              </m.div>
              <AiOutlineClose
                onClick={() => {
                  dispatch(toggleNav());
                }}
              ></AiOutlineClose>
            </div>
            <div>
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/");
                }}
              >
                <m.div variants={navChildren} className="">
                  HOME
                </m.div>
              </m.div>
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/about");
                }}
              >
                <m.div variants={navChildren} className="">
                  ABOUT
                </m.div>
              </m.div>
              <m.div
                style={{ overflow: "hidden" }}
                onClick={() => {
                  dispatch(toggleNav());
                  navigate("/contact");
                }}
              >
                <m.div variants={navChildren} className="">
                  CONTACT
                </m.div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
