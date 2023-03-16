import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="title-container">
        <div className="subtext">architect</div>
        <div className="maintext">JANILLE</div>
        <div className="maintext">SY</div>
        <div className="subtext-2">*web-developer/frontend/backend/</div>
      </div>
      <div className="home-nav">
        <div
          className="home-nav-item__container"
          onClick={() => {
            navigate("/about");
          }}
        >
          <div className="text">*ABOUT</div>
          <div className="numb">01</div>
        </div>
        <div
          className="home-nav-item__container"
          onClick={() => {
            navigate("/projects");
          }}
        >
          <div className="text">*PROJECTS</div>
          <div className="numb">02</div>
        </div>
        <div
          className="home-nav-item__container"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <div className="text">*CONTACT</div>
          <div className="numb">03</div>
        </div>
      </div>
    </div>
  );
}
