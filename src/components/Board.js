import React from "react";
import Column from "./Column";
import AddList from "./AddList";

const Board = (props) => {
  console.log(props);
  return (
    // Show an empty kanban board with 3 columns, and a + to add more
    <div className="board">
      <div className="board__wrapper">
        <div className="board__content">
          {props.name.map((entry) => {
            return <Column name={entry} />;
          })}
          <AddList />
        </div>
      </div>
    </div>
  );
};

export default Board;
