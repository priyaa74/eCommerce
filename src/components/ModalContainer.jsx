import React, { useState } from "react";
import styles from "./Modal.module.css";
import Modal from "./Modal";

const ModalContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
      See T&C
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ModalContainer;