import React from "react";
import MainSectionImage from "./main-section-bg.png";
import { Tombstone } from "../Tombstone";
import { useBookList } from "../api";
import "./style.css";

export const MainSection = () => {
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
          <Tombstone {...book} key={key} index={key} />
        ))}
      </div>
    </div>
  );
};
