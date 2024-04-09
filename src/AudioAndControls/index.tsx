import React, { useState, forwardRef } from "react";
import GramofonImage from "./gramofon.png";
import SkeletonImage from "./skeleton-key.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";

export const AudioAndControls = forwardRef((props, ref) => {
    const [isMuted, setIsMuted] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const handleAudio = (action) => {
        if (!ref.current) return;
        if (action === "mute") {
            if (isMuted) {
                ref.current.volume = 1;
                setIsMuted(false);
            } else {
                ref.current.volume = 0;
                setIsMuted(true);
            }
        }
    };

    useGSAP(() => {
        if (showInfoModal) {
            gsap.to(".app-info-content", {
                x: 10,
            });
        } else {
            gsap.to(".app-info-content", {
                x: -500,
            });
        }
    }, [showInfoModal]);

    return (
        <div className="audio-controls-container">
            <audio
                ref={ref}
                src="https://media.graphassets.com/IogeHDWRlSJRaeDq9Pbi?_gl=1*1n7nszx*_ga*MTA1MzIzNjc2My4xNzA0MDQxMjk2*_ga_G6FYGSYGZ4*MTcwNTc1MTEzOC4xMi4xLjE3MDU3NTI4NTguNDguMC4w"
                controls={false}
                autoPlay={false}
                loop={true}
                className="audio-controller"
            />

            <button
                onClick={() => handleAudio("mute")}
                className="mute-button layout-button"
            >
                <span className="screen-reader">mute</span>
                <img src={GramofonImage} alt="Gramofon" />
                {isMuted && <div className="mute-indication">X</div>}
            </button>

            <button
                onClick={() => setShowInfoModal(!showInfoModal)}
                className="info-button layout-button"
            >
                <span className="screen-reader">info</span>
                <img src={SkeletonImage} alt="Skeleton-key" />
                <div className="app-info-content">
                    This website made by{" "}
                    <a href="https://hapy.space" target="_blank">
                        hapy.space
                    </a>
                </div>
            </button>
        </div>
    );
});
