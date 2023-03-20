import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m, AnimatePresence } from "framer-motion";
// import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../features/utils/utilsSlice";
import { useNavigate } from "react-router-dom";

export const pageAnimationLeft = {
  hidden: { opacity: 0 },
  show: {
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeOut",
      type: "spring",
      damping: 20,

      delayChildren: 1.3,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
};

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openNav } = useSelector((store) => store.utils);

  return (
    <m.div
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 1 }}
      className="page-container"
    >
      <button
        onClick={(e) => {
          navigate("/contact");
        }}
      >
        routes
      </button>
      <Nav></Nav>
      <NavButton></NavButton>
      <div className="title-container">
        <div className="others-container">
          <div className="title">
            <div className="maintext">"About"</div>
          </div>
          <div className="subtext-3">
            Lorem ipsum dolor sit amet{" "}
            <span className="colored-span ">This is me</span>. Ornare sed odio
            interdum adipiscing quis consequat a pulvinar{" "}
          </div>
        </div>
      </div>
      <div className="body-text">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur. Ornare sed odio interdum
          adipiscing quis consequat a pulvinar euismod. Egestas vitae in nec
          nibh. Blandit nulla ullamcorper nullam nunc et.
          <span className="colored-span">React</span> Interdum semper facilisis
          neque sagittis tellus sagittis feugiat. Ac morbi ipsum leo eu
          maecenas. Placerat nisi nec ut erat in facilisi amet pretium suscipit.
          Ut non elit felis viverra id morbi nec hendrerit gravida. Lectus
          pellentesque erat nulla neque. Velit cras dapibus urna commodo ac in
          fusce semper nunc. Vel eu nunc pulvinar mattis sem varius. Faucibus
          vulputate nunc adipiscing urna sit integer nunc hac. Gravida enim
          phasellus at ullamcorper condimentum.
        </div>
      </div>
    </m.div>
  );
}
