import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Example from "./Example";
import ExampleHooks from "./ExampleHooks";
import ExampleClass from "./ExampleClass";
import GlobalContext from "./GlobalContext";

const App = () => {
  const globalHook = useState({
    removeText: "Remove",
    addText: "Add"
  });

  return (
    <React.StrictMode>
      <GlobalContext.Provider value={globalHook}>
        <h1>
          React Simple Starter
          <span role="img" aria-label="Emoji of a seedling">
            &nbsp;🌱
          </span>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example-hooks/">View example hooks</Link>
          </li>
          <li>
            <Link to="/example-class/">View example class</Link>
          </li>
        </ul>
        <Router>
          <Example text="Modify me!" path="/" />
          <ExampleHooks path="/example-hooks/" />
          <ExampleClass path="/example-class/" />
        </Router>
      </GlobalContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
