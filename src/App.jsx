import { useRef, createRef } from "react";
import moon from "./assets/Moon.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Fogg } from "./Fogg";
import { IntroLockButton } from "./IntroLockButton";
import { TreesWallsAndGates } from "./TreesWallsAndGates";
import { MainSection } from "./MainSection";
import { AudioAndControls } from "./AudioAndControls";
import { BatCatFigure } from "./BatCatFigure";

import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { modalCustomStyles } from "./config";
import Modal from "react-modal/lib/components/Modal";

function App() {
  const container = useRef();
  const tl = useRef();
  const audioRef = createRef();

  const toggleTimeline = () => {
    audioRef.current && audioRef.current.play();
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const treesAndGate = gsap.utils.toArray(".trees-walls-and-gates");
      const gatesLeft = gsap.utils.toArray(".gates-left");
      const gatesRight = gsap.utils.toArray(".gates-right");
      const welcomeMessage = gsap.utils.toArray(".welcome-message");

      const entranceDuration = 3; //13.5
      const mainSection = gsap.utils.toArray(".main-section");
      const gatesDuration = 3;

      tl.current = gsap
        .timeline()
        .to(".intro-enter-container", { y: 400, duration: 1 })
        .to(gatesLeft[0], { x: "-80%", duration: gatesDuration })
        .to(gatesRight[0], { x: "80%", duration: gatesDuration }, "<")
        .to(treesAndGate[0], { scale: 1.8, delay: 0, duration: 1 })
        .to(treesAndGate[0], { opacity: 0, duration: 3 }, "<")
        .to(welcomeMessage[0], { opacity: 0, duration: 2 }, "<")
        .to(mainSection[0], { opacity: 1, zIndex: 1, duration: 2 })
        .reverse();
    },
    { scope: container }
  );

  const revealMainContent = () => {
    gsap
      .timeline()
      .delay(1)
      .to(".loading-intro", {
        opacity: 0,
        zIndex: -999,
      })
      .to(".main", {
        opacity: 1,
        delay: 0.1,
      });
  };

  useEffect(() => {
    revealMainContent();
  }, []);

  return (
    <>
      <LoadingIntro />
      <div className="main" ref={container}>
        <AudioAndControls ref={audioRef} />
        <Fogg />
        <div className="upper-skies" />
        <img src={moon} className="moon" />
        <div className="tress-background-layer" />
        <div className="welcome-message">
          Welcome to The Ancient Books Graveyard
        </div>
        <TreesWallsAndGates />
        <IntroLockButton toggleTimeline={toggleTimeline} />
        <MainSection />
      </div>
    </>
  );
}

export default App;

export function LoadingIntro() {
  return (
    <div className="loading-intro">
      <p className="text">Loading</p>
      <div className="flying-witch-graphics" />
      <div className="in-front-bat-graphics" />
    </div>
  );
}
