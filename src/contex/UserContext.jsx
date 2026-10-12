import React, { createContext, useState } from "react";
import run from "../gemini";

export const dataContext = createContext();

function UserContext({ children }) {
const [inputValue, setInputValue] = useState("");
const [showResult, setShowResult] = useState(false);
const [loading, setLoading] = useState(false);
const [result, setResult] = useState("");
const [recentPrompt, setRecentPrompt] = useState("");
const [prePrompt,setPrePrompt]=useState([]);

function newChat(){
  // setInputValue("");
  setLoading(false);
  setShowResult(false);
  // setResult("");
}


async function sent(inputValue) {
  setResult("");
  setShowResult(true);
  setRecentPrompt(inputValue);
  setLoading(true);
  setPrePrompt(prev => [...prev, inputValue]);
  const response = await run(inputValue);
  setResult(response.split("**") && response.split("*"));
  setLoading(false);
  setInputValue("");
}
const data={
  inputValue,
  setInputValue,
  sent,
  loading,
  setLoading,
  result,
  setResult,
  showResult,
  setShowResult,
  recentPrompt,
  setRecentPrompt,
  prePrompt,
  setPrePrompt,
  newChat
}
  return (
    <dataContext.Provider
      value={data}
    >
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;