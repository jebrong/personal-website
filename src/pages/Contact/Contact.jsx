import { useRef, useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { pageAnimationLeft, buttonHoverTap } from "../../animations/animations";
import emailjs from "@emailjs/browser";
import Nav from "../../components/Nav";
import NavButton from "../../components/NavButton";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const form = useRef();
  const username = useRef();
  const email = useRef();
  const message = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ogej0im",
        "template_omk9y5z",
        form.current,
        "o-MBJTHzLxmFleur9"
      )
      .then(
        (result) => {
          username.current.value = "";
          email.current.value = "";
          message.current.value = "";
          setStatus(true);
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
        }
      );
  };
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
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      exit="exit"
      className="page-container"
    >
      <NavButton></NavButton>

      <Nav></Nav>

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
                "Contact"
              </div>
              <div className="send-status">{status ? "Message Sent!" : ""}</div>
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
              You can also contact me here or manually message me here:
              <span className="colored-span ">syjanille@gmail.com</span> or
              <span className="colored-span ">+639268524297</span>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="name-email__container">
              <div className="label-container">
                <label>NAME</label>
                <input
                  ref={username}
                  type="text"
                  name="user_name"
                  placeholder="Input name..."
                />
              </div>
              <div className="label-container">
                <label>EMAIL</label>
                <input
                  ref={email}
                  type="email"
                  name="user_email"
                  placeholder="Input email..."
                />
              </div>
            </div>
            <div className="message-container">
              <label>MESSAGE</label>
              <textarea
                ref={message}
                name="message"
                placeholder="Input message"
              />
            </div>

            <m.input
              variants={buttonHoverTap}
              whileHover="hover"
              whileTap="tap"
              type="submit"
              value="SEND"
              className="contact-btn"
            />
          </form>
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
