import React, { useCallback, useMemo, useState } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DempOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items={useMemo(() => [5, 8, 9, 6, 2, 4], [])}
      />
      <Button onClick={changeTitleHandler}>change List title</Button>
    </div>
  );
}

export default App;
