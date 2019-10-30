import React, { useState, useContext } from "react";
import GlobalContext from "./GlobalContext";

const useExampleCustomHook = (defaultState, modifiedState) => {
  const [text, setText] = useState(defaultState);
  const [{ removeText, addText }] = useContext(GlobalContext);

  const ExampleCustomHook = () => (
    <>
      <p>{text}</p>
      <button onClick={() => setText("")}>{removeText}</button>
      <button onClick={() => setText(modifiedState)}>{addText}</button>
    </>
  );
  return [text, ExampleCustomHook, setText];
};

export default useExampleCustomHook;
