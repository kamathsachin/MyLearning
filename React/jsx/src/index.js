//Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  const buttonText = { text: "Click Me!!" };
  const labelText = { text: "Enter Name:" };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText.text}
      </label>
      <input id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react component and display it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
