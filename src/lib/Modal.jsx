import React from "react";
import styles from "./Modal.module.css";

export const Modal= ({isOpen, hide, content}) => {

    return isOpen ? (
        <>
            <div className={styles.backdrop} />
            <div className={styles.wrapper}>
                <div className={styles.styledModal}>
                    <p className={styles.closeButton} onClick={hide}>X</p>
                    <p className={styles.content}>{content}</p>
                </div>
            </div>
        </>
    ) : null
};