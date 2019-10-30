import React, { useState, useEffect, useContext } from "react";
import useExampleCustomHook from "./ExampleCustomHook";
import SampleData from "./SampleData";
import GlobalContext from "./GlobalContext";

const ExampleHooks = () => {
  const [text, setText] = useState("Default State 0");
  const [textCustomHook1, ExampleCustomHook1] = useExampleCustomHook(
    "Default state 1",
    "Modified state 1"
  );
  const [, ExampleCustomHook2] = useExampleCustomHook(
    "Default state 2",
    "Modified state 2"
  );

  const [{ removeText, addText }, setGlobal] = useContext(GlobalContext);

  useEffect(() => {
    let isSubscribed = true;
    SampleData()
      .then(data => {
        if (isSubscribed) setText(data.defaultState);
      })
      .catch(error => {
        if (isSubscribed) console.error(error);
      });
    return () => (isSubscribed = false);
  }, [textCustomHook1]);

  return (
    <>
      <p>{text}</p>
      <button onClick={() => setText("")}>{removeText}</button>
      <button onClick={() => setText("Modfied state 0")}>{addText}</button>
      <button
        onClick={() => setGlobal({ addText: "Add2", removeText: "Remove2" })}
      >
        Modify context
      </button>
      <ExampleCustomHook1 />
      <ExampleCustomHook2 />
    </>
  );
};

export default ExampleHooks;
