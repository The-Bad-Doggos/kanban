import React from "react";
import AddTask from "./AddTask";

const Column = ({ name }) => {
  return (
    <div className="column">
      <div className="column__wrapper">
        <h3 className="column__title">{name}</h3>

        {/* The h3 above should be an input so it can be edited by the user */}
        <div className="column__body">
          <AddTask />
        </div>
      </div>
    </div>
  );
};

export default Column;
