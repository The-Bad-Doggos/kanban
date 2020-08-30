import React from "react";
import Cards from "./Cards"
import AddTask from "./AddTask";

const Column = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>
				<Cards />
        {/* <p>Task will go here</p> */}
      </div>
      <AddTask />
    </div>
  );
};

export default Column;
