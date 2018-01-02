import React, { Component } from "react";


class Teams extends Component {
  constructor(props) {
		super(props);
		this.state = {players: ["Fish Goldman", "Rick Astley", "Dicky Bow", "Vera Log", "Strong Bow", "Patrick Ramsey", "Star Fish", "Dutch Malloy", "King Plas", "Vic Tory"] };
//Temporary dummy names for state players
  this.clicked = this.clicked.bind(this);
};

  clicked(e) {
    e.preventDefault();   //Prevent the page from refreshing on click
		const playersCopy = [...this.state.players];
//logic for Putting the list of names into 2 teams randomly - on every click -> randomise the order of the players and then split into two teams....using Knuth shuffle function
    function shuffle(players) {
        let currentIndex = players.length, temporaryValue, randomIndex;
        // While there are remaining elements to shuffle...
        while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = players[currentIndex];
        players[currentIndex] = players[randomIndex];
        players[randomIndex] = temporaryValue;
      }

        return players;
    };

    let result = shuffle(playersCopy);
    this.setState({players: result});
  };


render() {
  const team1 = this.state.players.slice(0,5);   //takes the first half of the players
  const team2 = this.state.players.slice(5);    //takes the second half of the players

  const teamOne = team1.map((value, index) =>
    <li key={index}>
      {value}
    </li>
);
  const teamTwo = team2.map((value, index) =>
    <li key={index}>
      {value}
    </li>
);
    return (
      <div className="container">
        <form>
          <input className="btn btn-warning" type="submit" value="Generate Teams" onClick={ this.clicked } />
        </form>

        <h3>Team A:</h3>
        <ul>
          {teamOne}
        </ul>

        <h3>Team B:</h3>
        <ul>
          {teamTwo}
        </ul>

      </div>
    );
  }
}

export default Teams;
