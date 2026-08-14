const bindLandingMotion = () => {
  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-animate-illustration]"));
  if (!items.length) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((item) => { item.dataset.inView = "true"; });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target as HTMLElement;
      target.dataset.inView = "true";
      observer.unobserve(target);
    });
  }, { threshold: 0.28, rootMargin: "0px 0px -6% 0px" });

  items.forEach((item) => {
    if (item.dataset.motionBound === "true") return;
    item.dataset.motionBound = "true";
    observer.observe(item);
  });
};

bindLandingMotion();
document.addEventListener("astro:page-load", bindLandingMotion);
