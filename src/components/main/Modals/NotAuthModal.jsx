import React from "react";
import Modal from "react-modal";

import { MdOutlineDoDisturbOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotAuthModal = (props) => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen, title, subtitle, buttonNavigateURL, buttonText } =
    props;

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
      <div className="font-Montserrat flex flex-col items-center gap-6 text-center">
        <MdOutlineDoDisturbOn size={60} className="text-borderAndOtherRed" />
        <h1 className="text-textColor font-bold text-xl">{title}</h1>
        <p className="text-textColor font-semibold text-md">{subtitle}</p>
      </div>
      <button
        onClick={() => navigate(buttonNavigateURL)}
        className="text-textColor font-Montserrat font-medium text-base border-2 px-6 rounded-lg border-borderAndOtherRed hover:border-transparent transition-colors hover:text-boxColor hover:bg-textColor py-2"
      >
        {buttonText}
      </button>
    </Modal>
  );
};

export default NotAuthModal;
