// based on https://reactjs.org/docs/context.html

import { createContext } from "react";

const GlobalContext = createContext({
  removeText: "Remove",
  addText: "Add"
});

export default GlobalContext;
