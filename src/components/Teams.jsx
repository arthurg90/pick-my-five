import React, { Component } from "react";

// import Team from './Team'  TODO?

class Teams extends Component {
  constructor(props) {
		super(props);
		this.state = {array: ["Fish Goldman", "Rick Astley", "Dicky Bow", "Vera Log", "Strong Bow", "Patrick Ramsey", "Star Fish", "Dutch Malloy", "Star Fish", "King Plas", "Vic Tory"] };
//Temporary dummy names for state array
  this.clicked = this.clicked.bind(this);
};

  clicked(e) {
    e.preventDefault();

  }

  render() {
    console.log(this.state.array);
    return (
      <div className="container">
        <form>
          <input className="btn btn-warning" type="submit" value="Generate Teams" onClick={ this.clicked } />
        </form>

        <h3>Team A:</h3>
        <ul>

        </ul>

        <h3>Team B:</h3>
        <ul>

        </ul>

      </div>
    );
  }
}


export default Teams;
