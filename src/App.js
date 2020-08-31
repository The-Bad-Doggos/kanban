import React, { Component } from "react";
import "./App.scss";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Cards from "./components/Cards"

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
        {/* <Landing /> */}
        <Board name={this.state.columns} />
				<Cards />
      </div>
    );
  }
}

export default App;
