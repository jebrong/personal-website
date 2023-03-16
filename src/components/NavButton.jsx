import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { toggleNav } from "../features/utils/utilsSlice";

export default function NavButton() {
  const dispatch = useDispatch();
  const { openNav } = useSelector((store) => store.utils);
  return (
    <div
      className={openNav ? "menu open" : "menu"}
      onClick={(e) => {
        dispatch(toggleNav());
      }}
    >
      <div>
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
    </div>
  );
}
