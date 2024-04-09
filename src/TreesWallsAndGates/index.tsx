import React from "react";
import trees from "./trees.svg";
import gateLeft from "./gate-left.svg";
import gateRight from "./gate-right.svg";
import gateMiddleLeft from "./gate-middle-left.svg";
import gateMiddleRight from "./gate-middle-right.svg";

export const TreesWallsAndGates = () => (
    <div className="trees-walls-and-gates">
        <div className="trees">
            <img src={trees} className="trees-left" />
            <img src={trees} className="trees-right" />
        </div>
        <div className="gates-container">
            <div className="gates-left">
                <img src={gateLeft} className="walls gate-left" />
                <img src={gateMiddleLeft} className="gate-middle-left" />
            </div>
            <div className="gates-right">
                <img src={gateMiddleRight} className="gate-middle-right" />
                <img src={gateRight} className="walls gate-right" />
            </div>
        </div>
    </div>
);
