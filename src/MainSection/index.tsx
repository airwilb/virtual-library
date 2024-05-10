import React, { useRef } from "react";
import MainSectionImage from "./main-section-bg.png";
import { Tombstone } from "../Tombstone";
import { useBookList } from "../api";
import "./style.css";

export const MainSection = () => {
  const audioRef = useRef();
  const books = useBookList();

  return (
    <div
      className="main-section"
      style={{
        backgroundImage: `url(${MainSectionImage})`,
      }}
    >
      <div className="in-front-bat-graphics main-screen" />
      <div className="tombstones-container">
        {books.map((book, key) => (
          <Tombstone {...book} key={key} index={key} audioRef={audioRef} />
        ))}
      </div>
      <audio
        ref={audioRef}
        src="https://media.graphassets.com/2vcSLJYJRiMcT2gPO42E?_gl=1*1v4roi8*_ga*MTA1MzIzNjc2My4xNzA0MDQxMjk2*_ga_G6FYGSYGZ4*MTcwNTc1MTEzOC4xMi4xLjE3MDU3NTI4NTguNDguMC4w"
        controls={false}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};
