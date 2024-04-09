import React from "react";
import AntikLockImage from "./antik_lock.png";
import "./style.css";

export const IntroLockButton = ({ toggleTimeline }) => (
    <div className="intro-enter-container">
        <button
            onClick={toggleTimeline}
            className="intro-button glow-yellow pulse"
        >
            <span className="screen-reader" aria-label="ENTER">
                ENTER
            </span>
            <img src={AntikLockImage} width={50} />
        </button>
    </div>
);
