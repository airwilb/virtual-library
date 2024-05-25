import React, { useRef, useState } from "react";
import MainSectionImage from "./main-section-bg.png";
import { Tombstone } from "../Tombstone";
import { useBookList } from "../api";
import { Book } from "../types";
import "./style.css";

export const MainSection = () => {
  const audioRef = useRef();
  const { bookList, totalPages, isLoading } = useBookList();
  const [page, setPage] = useState(0);

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (page === 0) return;
      setPage(page - 1);
    } else if (direction === "next") {
      if (page === totalPages) return;
      setPage(page + 1);
    }
  };

  console.log(bookList[page]);

  return (
    <div
      className="main-section"
      style={{
        backgroundImage: `url(${MainSectionImage})`,
      }}
    >
      <div className="in-front-bat-graphics main-screen" />
      <div className="tombstones-container">
        {bookList.length !== 0 &&
          bookList[page].map((book, key) => (
            <Tombstone {...book} key={key} index={key} audioRef={audioRef} />
          ))}
      </div>

      <div className="pagination">
        {page !== 0 && (
          <button className="prev" onClick={() => handlePageChange("prev")}>
            Previous Page
          </button>
        )}
        {page !== totalPages - 1 && (
          <button className="next" onClick={() => handlePageChange("next")}>
            Next Page
          </button>
        )}
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
