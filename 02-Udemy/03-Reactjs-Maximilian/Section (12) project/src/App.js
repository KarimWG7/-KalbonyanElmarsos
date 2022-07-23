import React, { useCallback, useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DempOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("Here we go again");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => {
        return !prevState;
      });
    }
  }, [allowToggle]);
  const allowToggleHandler = useCallback(
    () => setAllowToggle(!allowToggle),
    []
  );
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DempOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
