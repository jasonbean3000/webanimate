import gsap from "gsap";

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
  