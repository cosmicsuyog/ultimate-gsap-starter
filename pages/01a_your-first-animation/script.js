gsap.to(".card", {
  duration: 5,
  opacity: 1,
  scale: 1,
  onComplete: function () {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
