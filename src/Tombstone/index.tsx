import React from "react";
import Modal from "react-modal";
import Tomb01 from "./tombtone_v2.png";
import "./style.css";
import { useRef } from "react";
import { ModalContent } from "./ModalContent";
import { modalCustomStyles } from "../config";

export const Tombstone = (props: {
    index: string;
    author: string;
    bookPDFLinkList: string[];
}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const audioRef = useRef();

    function openModal() {
        setIsOpen(true);
        audioRef.current && audioRef.current.play();
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <audio
                ref={audioRef}
                src="https://media.graphassets.com/2vcSLJYJRiMcT2gPO42E?_gl=1*1v4roi8*_ga*MTA1MzIzNjc2My4xNzA0MDQxMjk2*_ga_G6FYGSYGZ4*MTcwNTc1MTEzOC4xMi4xLjE3MDU3NTI4NTguNDguMC4w"
                controls={false}
                autoPlay={false}
                loop={false}
            />
            <div
                className="tombstone-wrapper"
                onClick={openModal}
                style={{
                    backgroundImage: `url(${Tomb01})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <div className="shadow" />
                <div className="tombstone-title">{props.author}</div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Ancient Book Modal"
                style={modalCustomStyles}
            >
                <ModalContent
                    closeModal={closeModal}
                    bookPDFLinkList={props.bookPDFLinkList}
                />
            </Modal>
        </>
    );
};
{
    /* <div className="modal-decoration-bottom" /> */
}
