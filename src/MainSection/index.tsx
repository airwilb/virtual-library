import React from "react";
import MainSectionImage from "./main-section-bg.png";
import { Tombstone } from "../Tombstone";
import "./style.css";

const AUTHORS_LIST = [
    {
        author: "Father Jean Nicolas Grou",
        bookPDFLinkList: [
            "https://archive.org/embed/manual-for-interior-souls",
        ],
    },
    {
        author: "Father Jean Nicolas Grou",
        bookPDFLinkList: [
            "https://archive.org/embed/manual-for-interior-souls",
        ],
    },
    {
        author: "Father Jean Nicolas Grou",
        bookPDFLinkList: [
            "https://archive.org/embed/manual-for-interior-souls",
        ],
    },
    {
        author: "Father Jean Nicolas Grou",
        bookPDFLinkList: [
            "https://archive.org/embed/manual-for-interior-souls",
        ],
    },
];

export const MainSection = () => (
    <div
        className="main-section"
        style={{
            backgroundImage: `url(${MainSectionImage})`,
        }}
    >
        <div className="in-front-bat-graphics main-screen" />
        <div className="tombstones-container">
            {AUTHORS_LIST.map((book, key) => (
                <Tombstone {...book} key={key} index={key} />
            ))}
        </div>
    </div>
);
