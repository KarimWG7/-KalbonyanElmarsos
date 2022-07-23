import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("List sorted");
    props.items.sort((a, b) => a - b);
  }, [items]);
  const sortedLit = props.items.sort((a, b) => a - b);
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedLit.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(DemoList);
