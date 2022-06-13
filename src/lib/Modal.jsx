import React from "react";
import {
    Wrapper,
    StyledModal,
    CloseButton,
    Content,
    Backdrop,
} from './Modal.style';
import './index.css';
window.React = React

const Modal= ({isOpen, hide, content}) => {

    return isOpen ? (
        <>
            <Backdrop />
            <Wrapper>
                <StyledModal>
                    <CloseButton onClick={hide}>X</CloseButton>
                    <Content>{content}</Content>
                </StyledModal>
            </Wrapper>
        </>
    ) : null
};

export default Modal