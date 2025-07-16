// Custom interactions can go here
console.log("Portfolio site loaded!");
// Fade-in effect for all elements with 'fade-in' class
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("fade-in-visible");
  });
});
// Scroll-triggered fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});

