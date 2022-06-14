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
### Edit CSS

If you want to update the modal's CSS, you just have to overwrite the following variables:

````   
body {
   --fontFamilyModal: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
   sans-serif;
   --backdropBackground: rgba(0, 0, 0, 0.3);
   --closeButtonColor: black;
   --styledModalBackground: white;
}