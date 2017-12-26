import React, { Component } from "react";

// import Team from './Team'  TODO?


class Teams extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <input className="btn btn-warning" type="submit" value="Generate Teams" />
        </form>

        <h3>Team A:</h3>
        <ul>
          <li>Fish Goldman</li>
          <li>Rick Astley</li>
          <li>Dicky Bow</li>
          <li>Vera Log</li>
          <li>Strong Bow</li>
        </ul>

        <h3>Team B:</h3>
        <ul>
          <li>Patrick Ramsey</li>
          <li>Star Fish</li>
          <li>Dutch Malloy</li>
          <li>King Plas</li>
          <li>Vic Tory</li>
        </ul>

      </div>
    );
  }
}


export default Teams;
