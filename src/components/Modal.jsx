import React, { useState, useRef } from "react";
import styles from "./modal.module.css";
import { X } from "@phosphor-icons/react";

export default function Modal({ triggerText, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div>
      <a href="#" className={styles.saibaMais} onClick={openModal}>
        {triggerText}
      </a>
      {isOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.modal} ref={modalRef}>
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={15} />
            </button>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
