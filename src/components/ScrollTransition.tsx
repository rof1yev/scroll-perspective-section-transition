import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ScrollTransition = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      })
      .to("#section1", {
        scale: 0.8,
        rotate: -5,
        ease: "power1.inOut",
        borderRadius: "20px",
        duration: 1,
      })
      .fromTo(
        "#section2",
        {
          yPercent: 2,
          scale: 0.8,
          rotate: 8,
          ease: "power1.inOut",
          borderRadius: "0px",
        },
        {
          yPercent: -100,
          scale: 1,
          rotate: 0,
          ease: "power1.inOut",
          borderRadius: "0px",
          duration: 1,
        },
        0.02
      )
      .to("#section2", {
        scale: 0.8,
        rotate: -5,
        borderRadius: "20px",
        duration: 1,
      })
      .fromTo(
        "#section3",
        {
          scale: 0.8,
          rotate: 8,
          borderRadius: "0px",
        },
        {
          yPercent: -200,
          scale: 1,
          rotate: 0,
          borderRadius: "0px",
          duration: 1,
        },
        0.75
      )
      .to("#section3", {
        scale: 0.8,
        rotate: -8,
        duration: 1,
      })
      .fromTo(
        "#section4",
        {
          scale: 0.8,
          rotate: 8,
        },
        {
          yPercent: -300,
          scale: 1,
          rotate: 0,
          borderRadius: "0px",
          duration: 1,
        },
        1.6
      );
  });

  return (
    <div id="container">
      <section id="section1">
        <div className="min-h-dvh" />
      </section>
      <section id="section2">
        <div className="min-h-dvh" />
      </section>
      <section id="section3">
        <div className="min-h-dvh" />
      </section>
      <section id="section4">
        <div className="min-h-dvh" />
      </section>
    </div>
  );
};

export default ScrollTransition;
