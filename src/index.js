import {render} from "@testing-library/react";
import React, {useState} from "react";
import { Modal } from "./lib/Modal.jsx";
import { useModal } from "./lib/useModal.jsx";

export { Modal } from "./lib/Modal.jsx";
export { useModal } from "./lib/useModal.jsx";
export {
    Wrapper,
    StyledModal,
    CloseButton,
    Content,
    Backdrop,
} from "./lib/Modal.style";


const App = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const message = "Write you own message here";

    return (
        <div className="App">
            <button onClick={toggle}>Click to open modal</button>
            <Modal isOpen={isOpen} hide={toggle} content={message}/>
        </div>
    );
}

render(<App />, document.getElementById("root"));
