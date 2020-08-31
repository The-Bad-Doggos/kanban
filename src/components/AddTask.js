import React from "react";

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 3df675f3ccedf823a4c23d00e6752ceebdb76d6e
const addCard = () => {
	alert("clikced")
}

<<<<<<< HEAD
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
=======
>>>>>>> 3df675f3ccedf823a4c23d00e6752ceebdb76d6e
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
<<<<<<< HEAD
>>>>>>> 4b2a043a78eca2536c9b64d5989e34f1fac19eec
=======

>>>>>>> 3df675f3ccedf823a4c23d00e6752ceebdb76d6e
    </div>
  );
};

export default addTask;
