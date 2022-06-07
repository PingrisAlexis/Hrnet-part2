import React, {FunctionComponent} from "react";
import Modal from "./lib/components/Modal";
import useModal from "./lib/components/useModal";
import ReactDOM from "react-dom/client";
import "./index.css";

const App: FunctionComponent = () => {
    const { isOpen, toggle } = useModal();
    const message = "This is a message";

    return (
        <div className="App">
            <button onClick={toggle}>Open modal</button>
            <Modal isOpen={isOpen} hide={toggle} content={message}/>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;