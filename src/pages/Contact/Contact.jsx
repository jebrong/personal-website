import { useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { pageAnimationLeft, buttonHoverTap } from "../../animations/animations";

import emailjs from "@emailjs/browser";
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

  return (
    <m.div
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <div className="title-container">
          <div className="maintext">CONTACT</div>
        </div>
        <div>{status ? "Message Sent!" : ""}</div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input ref={username} type="text" name="user_name" />
          <label>Email</label>
          <input ref={email} type="email" name="user_email" />
          <label>Message</label>
          <textarea ref={message} name="message" />
          <m.input
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </m.div>
  );
}
