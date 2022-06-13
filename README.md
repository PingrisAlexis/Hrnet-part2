# react-modal-window

## Project 14 Front-End OpenClassrooms - Create and publish an npm module.

A library of React components created using ```create-react-app```.

### Installation from NPM

```npm install @pingrisalexis/react-modal```

### Use case example

```
import React from "react";
import {Modal}  from "@pingrisalexis/react-modal/dist/index";

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
```








