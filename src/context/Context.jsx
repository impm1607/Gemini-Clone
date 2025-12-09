import { createContext } from "react";
import { runGemini } from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const onSent = async (prompt) => {
    const response = await runGemini(prompt);
    console.log(response);
  };

  const contextValue = {
    onSent,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
