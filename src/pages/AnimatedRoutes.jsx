import {
  useLocation,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function AnimatedRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
