import React from "react";

const addCard = (event) => {
	// Prevent the page from reloading
	event.preventDefault()

	alert("yeet")
}

const addTask = () => {
  return ( 
    <div className="addTask">
      <form action="">
				<button className="addTask__button" title="Add new card" onClick={addCard} >
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
			</form>
    </div>
  );
};

export default addTask;
