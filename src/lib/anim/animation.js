export const NavbarVarients = {
  open: {
    width: "20rem",
    height: "24rem",
    top: "15px",
    right: "35px",
    // opacity: 1,
    display: "flex",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    // width: "4.5rem",
    // height: "1rem",
    width: "0rem",
    height: "0rem",
    top: "15px",
    right: "35px",
    // opacity: 0,
    display: "none",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const NavbarItem = {
  init: {
    opacity: 0,
    translateX: 100,
  },
  enter: (idx) => ({
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + idx * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
    // socialInit: {
    //   opacity: 0,
    // },
    // socialEenter: (idx) => ({
    //   opacity: 1,
    //   delay: 0.5 * idx,
    // }),
  }),
  exit: {
    opacity: 0,
    translateX: 100,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export const BorderVarients = {
  init: {
    width: "100%",
  },
  anim: {
    width: "0%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
