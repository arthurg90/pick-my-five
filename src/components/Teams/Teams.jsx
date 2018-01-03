//TODO delete?
// import React, { Component } from "react";
// import GenerateButton from "../../containers/GenerateButton";
//
// //This is a presentational component like the form section, the App.jsx should have TeamA, TeamB and GenerateButton components
// class Teams extends Component {
//   constructor(props) {
// 		super(props);
// 		// this.state = {
//     // //   isGenerated: false,     //State for whether teams have been randomly shuffled
//     //   playersList: props.players.slice(), //state for copying the list of players props from Generate
//     // }
//   this.submit = this.submit.bind(this);
// };
//
//   submit(e) {
//     e.preventDefault();
//     // const playersCopy = this.state.playersList;
//     // function shuffle(players) {
//     //     let currentIndex = playersCopy.length, temporaryValue, randomIndex;
//     //     // While there are remaining elements to shuffle...
//     //     while (0 !== currentIndex) {
//     //     // Pick a remaining element...
//     //     randomIndex = Math.floor(Math.random() * currentIndex);
//     //     currentIndex -= 1;
//     //     // And swap it with the current element.
//     //     temporaryValue = playersCopy[currentIndex];
//     //     playersCopy[currentIndex] = playersCopy[randomIndex];
//     //     playersCopy[randomIndex] = temporaryValue;
//     //   }
//     //
//     //   return playersCopy;
//     // };
//     //
//     // let result = shuffle(playersCopy);
//     // this.setState({playersList: result});
//
//   };
//
//   render() {
//     const { players, className } = this.props;
//   //   const team1 = this.state.playersList.slice(0,5);   //takes the first half of the players
//   //   const team2 = this.state.playersist.slice(5);    //takes the second half of the players
//   //
//   //   const teamOne = team1.map((value, index) =>
//   //     <li key={index}>
//   //       {value}
//   //     </li>
//   // );
//   //   const teamTwo = team2.map((value, index) =>
//   //     <li key={index}>
//   //       {value}
//   //     </li>
//   // );
//       return (
//         <form onSubmit={ this.submit } >
//           <GenerateButton className="btn btn-warning" type="submit" value="Generate Teams" />
//         </form>
//       );
//     }
//   }
//
// export default Teams;


/*REACT MODEL:


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
*/
