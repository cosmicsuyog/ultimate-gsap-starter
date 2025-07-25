import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    opacity: 1,
    y: -120,
    scale: 1,
    duration: 0.8,
    ease: "power.in",
    onComplete: () => {
      setTimeout(showToastLoop, 2500);
    },
  });
};

showToastLoop();
