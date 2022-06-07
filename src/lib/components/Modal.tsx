import React, {FunctionComponent} from "react";
import {
    Wrapper,
    StyledModal,
    CloseButton,
    Content,
    Backdrop,
} from './Modal.style';
import {ModalProps} from "../../type.d";

const Modal: FunctionComponent<ModalProps> = ({isOpen,
                                                         hide,
                                                         content,
                                                     }) => {
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
export default Modal;