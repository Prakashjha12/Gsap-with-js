gsap.registerPlugin(SplitText);
let tl = gsap.timeline();
let split = new SplitText(".namaste", { type: "chars" });
let chars = split.chars;
let splitHero = new SplitText(".text-hero", { type: "words" });
let charsHero = splitHero.words;

tl.from(".NavBar", {
  y: -80,
  duration: 0.3,
  borderRadius: "100px",
  backgroundColor: "gray",
  ease: "power2.inOut",
});
tl.from(".list ul ", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});
tl.to(chars, {
  stagger: 0.3,
  opacity: 0,
  duration: 0.5,
  y: -300,
  ease: "power3.out",
  onComplete: () => document.querySelector(".hero").remove(),
});

// tl.from(charsHero, {
//   scale: 2,
//   y: 100,
//   stagger: 0.2,
//   opacity: 0,
//   duration: 0.3,
//   ease: "sine.in",
// });
// tl.to(".text-hero h1", {
//   scale: 0.2,
//   scrollTrigger: {
//     trigger: ".text-hero",
//     scroller: "body",
//     start: "top 20%",
//     end: "bottom 10%",
//     scrub: 3,
//     ease: "power4.out",
//   },
// });
tl.from(".main-video", {
  opacity: 0,
  duration: 0.3,
  ease: "power2.in",
});
tl.to(".main-video", {
  scale: 1.6,
  ease: "power1.in",
  scrollTrigger: {
    scrub: 2,
    duration: 0.6,
    trigger: ".main-video",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "bottom 50%",
  },
}),
  tl.to(".page-2-text h2", {
    transform: "translateX(-150%)",
    scrollTrigger: {
      trigger: ".page-2-text ",
      scroller: "body",
      // markers: true,
      start: "top 40%",
      end: "top -100%",
      ease: "power1.out",
      pin: true,
      scrub: 2,
    },
  });
tl.to(".cards div img", {});
if (!localStorage.getItem("heroPlayed")) {
  localStorage.setItem("heroPlayed", "true");
} else {
  document.querySelector(".hero").style.display = "none";
}
