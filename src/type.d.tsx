declare module "styled-components";

export interface ModalProps {
    isOpen: boolean;
    hide: () => void;
    content: string;
}