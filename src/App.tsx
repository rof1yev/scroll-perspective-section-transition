import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollTransition from "./components/ScrollTransition";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef<null>(null);

  useEffect(() => {
    // @ts-ignore
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000);
    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <main>
        <Navbar />
        <Hero />
        <ScrollTransition />
      </main>
    </>
  );
};

export default App;
