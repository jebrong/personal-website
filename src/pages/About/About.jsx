import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m } from "framer-motion";
// import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openNav } = useSelector((store) => store.utils);

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
        <div className="body-text">
          <div
            onMouseEnter={() => {
              setText("zoom");
            }}
            onMouseLeave={() => {
              setText("show");
            }}
            className="text"
          >
            Lorem ipsum dolor sit amet consectetur. Ornare sed odio interdum
            adipiscing quis consequat a pulvinar euismod. Egestas vitae in nec
            nibh. Blandit nulla ullamcorper nullam nunc et.
            <span className="colored-span">React</span> Interdum semper
            facilisis neque sagittis tellus sagittis feugiat. Ac morbi ipsum leo
            eu maecenas. Placerat nisi nec ut erat in facilisi amet pretium
            suscipit. Ut non elit felis viverra id morbi nec hendrerit gravida.
            Lectus pellentesque erat nulla neque. Velit cras dapibus urna
            commodo ac in fusce semper nunc. Vel eu nunc pulvinar mattis sem
            varius. Faucibus vulputate nunc adipiscing urna sit integer nunc
            hac. Gravida enim phasellus at ullamcorper condimentum.
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
