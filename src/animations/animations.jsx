export const pageAnimationLeft = {
  hidden: { x: "100%" },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      damping: 20,

      delayChildren: 1.3,
      staggerChildren: 0.3,
    },
  },

  exit: { opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
};

// export const homePageContainer = {
//   hidden: { x: 0 },
//   show: {
//     x: 0,
//     transition: {
//       delayChildren: 0.5,
//     },
//   },
// };

// export const homePageChildren = {
//   hidden: { width: "0", opacity: 0 },
//   show: {
//     width: "100%",
//     opacity: 1,
//     transition: {
//       duration: 0.7,
//     },
//   },
// };

// export const homePageChildrenOpac = {
//   hidden: { scale: 1.1, opacity: 0 },
//   show: {
//     scale: 1,
//     opacity: 1,

//     transition: {
//       delay: 0.7,
//       duration: 0.7,
//     },
//   },
// };

export const parentNav = {
  hidden: { y: "-100%" },
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
      type: "spring",
      damping: 10,
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
  exit: { opacity: 1, transition: { ease: "easeIn" } },
};

export const showNavItems = {
  hidden: { y: "100%", x: "-50%" },
  show: {
    y: 0,
    x: 20,
    rotate: 1,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export const buttonHoverTap = {
  tap: { scale: 0.95 },

  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

export const v1Logo = {
  show: {
    scale: [1.1, 1, 1.1],
    x: ["0%", "10%", "0%"],
    y: ["0%", "10%", "0%"],
    transition: { ease: "linear", duration: 3, repeat: Infinity },
  },

  tap: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};
