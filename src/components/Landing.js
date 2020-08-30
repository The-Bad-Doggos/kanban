import React from 'react';
import Navbar from "../components/Navbar.js";

const Landing = () => {
	return (
		<div className="landing">
			<Navbar />
			<div className="landingText wrapper">
				<h1>Kanban helps teams work more cooperatively and get more done.</h1>
				<h2>This single-user kanban board allows you to make lists and cards to organize your project in a fun and flexible way.</h2>
			</div>
		</div>
	)
}

export default Landing;