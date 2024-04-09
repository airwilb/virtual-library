import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";
import { isMobile } from "react-device-detect";

import "./index.css";
Modal.setAppElement("#modal-element");

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        {isMobile ? (
            <div className="mobile-banner">
                for full experience
                <br /> please view on desktop
            </div>
        ) : (
            <App />
        )}
    </>
);
