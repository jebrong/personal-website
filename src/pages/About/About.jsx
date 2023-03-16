import Nav from "../../components/Nav";

import NavButton from "../../components/NavButton";
import { motion as m, AnimatePresence } from "framer-motion";
import { pageAnimationLeft } from "../../animations/animations";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../features/utils/utilsSlice";

export default function About() {
  const dispatch = useDispatch();
  const { openNav } = useSelector((store) => store.utils);

  return (
    <m.div
      variants={pageAnimationLeft}
      initial="hidden"
      animate="show"
      exit="exit"
      className="page-container"
    >
      <Nav></Nav>
      <NavButton></NavButton>
      <div className="title-container">
        <div className="maintext">ABOUT</div>
      </div>
      <div className="body-text">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur. Ornare sed odio interdum
          adipiscing quis consequat a pulvinar euismod. Egestas vitae in nec
          nibh. Blandit nulla ullamcorper nullam nunc et. Interdum semper
          facilisis neque sagittis tellus sagittis feugiat. Ac morbi ipsum leo
          eu maecenas. Placerat nisi nec ut erat in facilisi amet pretium
          suscipit. Ut non elit felis viverra id morbi nec hendrerit gravida.
          Lectus pellentesque erat nulla neque. Velit cras dapibus urna commodo
          ac in fusce semper nunc. Vel eu nunc pulvinar mattis sem varius.
          Faucibus vulputate nunc adipiscing urna sit integer nunc hac. Gravida
          enim phasellus at ullamcorper condimentum.
        </div>
      </div>
    </m.div>
  );
}