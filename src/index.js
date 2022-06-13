import React from "react"
import Modal from "./lib/Modal.jsx";
import useModal from "./lib/useModal.jsx";
import { render } from "react-dom";

const App = () => {
    const { isOpen, toggle } = useModal();
    const message = "This is a message";

    return (
        <div className="App">
            <button onClick={toggle}>Open modal</button>
            <Modal isOpen={isOpen} hide={toggle} content={message}/>
        </div>
    );
}

render(<App />, document.getElementById("root"));

export default App;