import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const toggleNav = (isClipPathVisible) => {
  gsap.to("#nav", {
    duration: 0.5,
    clipPath: isClipPathVisible
      ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: "power1.inOut",
    repeat: 0,
  });
};


export const animateElements = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div-1",
      start: "top 425px",
      end: "top 275px",
      
      scrub: true,
      toggleActions: "play pause resume reverse",
    },
  });
  tl.to(".div-1", {
    x: 0,
    opacity: 1,
    ease: "ease-in",
  });
};

export const animateElements2 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div-2",
      start: "top 275px",
      end: "top 125px",
      
      scrub: true,
      toggleActions: "play pause resume reverse",
    },
  });
  tl.to(".div-2", {
    x: 0,
    opacity: 1,
    ease: "ease-in",
  });
};

export const animateElements3 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div-4",
      start: "top 425px",
      end: "top 275px",
      markers: true,
      scrub: true,
      toggleActions: "play pause resume reverse",
    },
  });
  tl.to(".div-4", {
    x: 0,
    opacity: 1,
    ease: "ease-in",
  });
};

export const animateElements4 = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".div-3",
      start: "top 275px",
      end: "top 125px",
      markers: true,
      scrub: true,
      toggleActions: "play pause resume reverse",
    },
  });
  tl.to(".div-3", {
    x: 0,
    opacity: 1,
    ease: "ease-in",
  });
};