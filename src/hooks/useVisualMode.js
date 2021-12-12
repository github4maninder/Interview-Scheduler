import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // -- advance to any other mode, replacing current mode in history with a new one
  const transition = (newMode, replace = false) => {
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    }
    setMode(newMode);
  };

  // -- transition back to previous mode
  const back = () => {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  };
  return { mode, transition, back };
}
