import React from "react";

const addTask = () => {
  return (
    <div className="addTask">
      <button className="addTask__button">+</button>
      <label for="addTask"></label>
      <input
        type="text"
        id="addTask"
        name="addTask"
        placeholder="Add New Task"
        className="addTask__input"
      />
    </div>
  );
};

export default addTask;
