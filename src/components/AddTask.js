import React from "react";


const addCard = () => {
	alert("clikced")
}

const addTask = () => {
  return (
    <div className="addTask">
      <button className="addTask__button" onClick={addCard} title="Add another card" >				
        <i class="fas fa-plus"></i>
      </button>
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
