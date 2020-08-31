import React from "react";
import Cards from "./Cards"
import AddTask from "./AddTask";

const Column = ({ name }) => {
  return (

<<<<<<< HEAD
=======

>>>>>>> 3df675f3ccedf823a4c23d00e6752ceebdb76d6e
    <div className="column">
      <div className="column__wrapper">
        <h3 className="column__title">{name}</h3>
				<Cards />
        {/* The h3 above should be an input so it can be edited by the user */}
        <div className="column__body">
          <AddTask />
        </div>

      </div>
    </div>
  );
};

export default Column;
