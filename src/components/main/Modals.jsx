import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Modals = (props) => {
  const { isOpen, setIsOpen } = props;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#222020",
      width: "75%",
      height: "30%",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      border: "0px",
      boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.6)",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(240, 255, 255, 0.65)",
      backdropFilter: "blur(8px)",
    },
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={false}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {props.children}
    </Modal>
  );
};

export default Modals;
