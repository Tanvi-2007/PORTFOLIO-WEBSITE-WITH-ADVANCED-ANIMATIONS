// Animate Hero Section
gsap.from(".hero h1", {
  duration: 1,
  opacity: 0,
  y: -50
});

gsap.from(".hero p", {
  duration: 1,
  opacity: 0,
  y: 30,
  delay: 0.5
});

gsap.from(".btn", {
  duration: 1,
  scale: 0,
  opacity: 0,
  delay: 1
});

// Animate Section Titles
gsap.utils.toArray("section h2").forEach((title, i) => {
  gsap.from(title, {
    scrollTrigger: title,
    y: 50,
    opacity: 0,
    duration: 1,
    delay: i * 0.2
  });
});
