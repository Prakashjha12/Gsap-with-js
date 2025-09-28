gsap.registerPlugin(SplitText);
let tl = gsap.timeline();

gsap.from(".NavBar", {
  y: -110,
  duration: 2,
  borderRadius: "100px",
  backgroundColor: "gray",
  delay: 1,
  ease: "power2.inOut",
});
gsap.from(".list ul ", {
  y: -100,
  delay: 2,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  ease: "power2.out",
});
let split = new SplitText(".namaste", { type: "chars" });
let chars = split.chars;
gsap.to(chars, {
  opacity: 0,
  x: 200,
  delay: 4,
  duration: 1,
  stagger: 0.2,
  ease: "sine.inOut",
  onComplete: () => {
    document.querySelector(".hero").style.display = "none";
  },
});

let splitHero = new SplitText(".text-hero", { type: "words" });
let charsHero = splitHero.words;
tl.from(charsHero, {
  y: -350,
  stagger: 0.4,
  opacity: 0,
  duration: 1,
  delay: 6,
  ease: "slow(0.7,0.7,false)",
});
tl.to(charsHero, {
  y: -350,
  duration: 1,
  fontSize: "30px",
  // letterSpacing: "-1em",
});
tl.from();
