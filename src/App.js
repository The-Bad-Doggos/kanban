
import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Column from "./components/Column";
import AddList from "./components/AddList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // In state, we want an obj that will contain the TITLE, DESCRIPTION, PRIORITY, CURRENT STATE (To Do, Doing, Done) for each task

			tasks: [],
			columns: ["To Do", "Doing", "Done"],
    };
  }

  render() {
    return (
      <div className="App">
        {/* Show a landing page to give the user a brief overview of site */}

        {/* Show an empty kanban board with 3 columns, and a + to add more */}

        {/* each column should have a "+" to add cards */}

        {/* Maybe?? A modal pop up for the user to fill out the details of tasks (title, description, priority); ok/submit button */}

        {/* .onSubmit Update this.setState with task */}

        {/* Create a card template */}

        {/* pass the this.state.task to <Card /> to render in the appropriate column */}

        {/* "X" button on the card to delete card; .onDelete remove from this.state.task */}

        {/* Click and drag to move cards between columns */}

        {/* Click and drag to move cards within columns */}

        {/* Delete a whole column -- Error handling: If col.length > 0 Error popup "please select where to move cards before deleting?" */}

        {/* Edit the title/description/priority of a card */}

        <Navbar />
        <Landing />
        
				{this.state.columns.map(entry => {
					return <Column name={entry} />
				})}
        
				<AddList />
      </div>
    );
  }
}

export default App;
