import React from "react";
import Modal from "react-modal";
import Tomb01 from "./tombtone_v2.png";
import { ModalContent } from "./ModalContent";
import { modalCustomStyles } from "../config";
import { Book } from "../api";
import "./style.css";

export const Tombstone = (
  props: {
    index: number;
    audioRef: React.RefObject<HTMLAudioElement>;
  } & Book
) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    props.audioRef.current && props.audioRef.current.play();
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
        <div className="tombstone-title">{props.title}</div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={props.title}
        style={modalCustomStyles}
      >
        <ModalContent
          pdfUrl={props.url}
          title={props.title}
          author={props.author}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};
{
  /* <div className="modal-decoration-bottom" /> */
}
