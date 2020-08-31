import React from "react";

const Cards = () => {
	return (
		<div className="card__background">
			<form action="" className="card__modal card__wrapper">
				<h1>Card Goes Here</h1>
				<fieldset>
					<label htmlFor="card__title">
						Title:
					</label>
					<input 
						type="text"
						name="cardTitle"
						id="card__title"
						placeholder="Enter task name here"
						required
					/>
				</fieldset>

				<fieldset>
					<label htmlFor="card__description">
						Description:
					</label>
					<textarea 
						name="cardDescription" 
						id="card__description" 
						cols="30" 
						rows="10"
						placeholder="Enter description here"
						required>
					</textarea>
				</fieldset>

				<fieldset>
					<label htmlFor="card__priority">
						Priority:
					</label>
					<input 
						name="cardPriority"
						id="card__priority"
						type="range"
						value="0"
						min="0"
						max="10"
						step="1"
					/>
				</fieldset>
			</form>
		</div>
	)
}

export default Cards;