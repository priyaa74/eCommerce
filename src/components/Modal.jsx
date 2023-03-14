import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG}/>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Terms & Conditions</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-4px" }} />
          </button>
          <div className={styles.modalContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit libero culpa rerum saepe nisi, eveniet ab amet ullam itaque sit earum sunt ipsa accusamus, voluptates ipsam a, beatae possimus est dolor consectetur? Quas, nulla voluptatem? Reiciendis, quas nisi ut minima voluptates debitis doloribus quaerat obcaecati perspiciatis laudantium excepturi adipisci nulla nihil corporis. Adipisci, modi? Nesciunt voluptatum placeat, consectetur deleniti ullam hic quibusdam odio dolores suscipit aperiam, repellendus repellat accusantium fugiat quisquam, quos illo ad minima. Delectus officia, cupiditate quisquam eveniet, voluptates nam quae in alias, reprehenderit vel sint ratione ipsa! Minus ad asperiores ducimus inventore veritatis nostrum, sit error. Aliquam.
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(true)}>
              Cancel
              </button>
              <button
                className={styles.acceptBtn}
                onClick={() => setIsOpen(false)}
              >
               Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;