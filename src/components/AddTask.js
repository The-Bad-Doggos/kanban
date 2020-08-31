import React from "react";

<<<<<<< HEAD
const addCard = () => {
	alert("clikced")
}

const AddTask = () => {
  return (
    <div>
			<button title="Add another card" onClick={addCard}>
				<i class="fas fa-plus"></i>
				<p>
					Add Card
				</p>
			</button>
=======
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
>>>>>>> 4b2a043a78eca2536c9b64d5989e34f1fac19eec
    </div>
  );
};

export default addTask;
