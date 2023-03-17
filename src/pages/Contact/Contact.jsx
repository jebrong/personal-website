import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion as m } from "framer-motion";
import { pageAnimationLeft, buttonHoverTap } from "../../animations/animations";

import emailjs from "@emailjs/browser";
import Nav from "../../components/Nav";
import NavButton from "../../components/NavButton";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const { openNav } = useSelector((store) => store.utils);

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

  return (
    <m.div
      // variants={pageAnimationLeft}
      // initial="hidden"
      // animate="show"
      // exit="exit"
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 1 }}
      className="page-container"
      style={{ backgroundColor: "lime" }}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate("/about");
        }}
      >
        routes
      </button>
      <NavButton></NavButton>
      {/* <AnimatePresence>{openNav ? <Nav></Nav> : ""}</AnimatePresence> */}
      <Nav></Nav>

      <div className="">
        <div className="title-container">
          <div className="maintext">contact</div>
          <div className="send-status">{status ? "Message Sent!" : ""}</div>
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
          <div className="message__container">
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
    </m.div>
  );
}
