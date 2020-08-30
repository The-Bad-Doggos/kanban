import React from "react";
import AddTask from "./AddTask";

const Column = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <p>Task will go here</p>
      </div>
      <AddTask />
    </div>
  );
};

export default Column;
