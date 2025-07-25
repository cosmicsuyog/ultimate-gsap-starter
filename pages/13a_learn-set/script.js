import gsap from "gsap";

gsap.set(".gsap-box", {
  opacity: 0,
  scale: 0.5,
  y: -100,
  x: 100,
});

gsap.to(".gsap-box", {
  opacity: 1,
  scale: 1,
  y: 0,
  x: 0,
  duration: 1,
  delay: 1,
  ease: "expo.out",
});
