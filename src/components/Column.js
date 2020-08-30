import React from "react";
import AddTask from "./AddTask";

const Column = () => {
  return (
    <div>
      <h3>Column Name</h3>
      <AddTask />
      <div>
        <p>Task will go here</p>
      </div>
    </div>
  );
};

export default Column;
