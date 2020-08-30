import React from "react";

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
    </div>
  );
};

export default AddTask;
