import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

export default function Cursor() {
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
    <>
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
    </>
  );
}
