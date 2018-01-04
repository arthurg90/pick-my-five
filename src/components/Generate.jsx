import React, { Component } from "react";
import GenerateButton from "../containers/GenerateButton"
// import Teams from "./Teams/Teams";

//TODO make shuffle players work!

class Generate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shuffled: []
		};

		this.click = this.click.bind(this);
};

	click(e) {
		e.preventDefault();
		const copyPlayers = this.props.players.slice();  //make a copy of players from State
		// console.log(copyPlayers);

		//Generic Function for shuffling an array
		function shuffleArray(array) {
			let i = array.length - 1;
			for (; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				const temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		}

		let playersShuffled = shuffleArray(copyPlayers);
		// this.state.shuffled.push(playersShuffled);
		this.setState({shuffled: playersShuffled}, function () { //pass a callback to setState so that function fires on first "click"
    console.log(this.state.shuffled);
	});
}

	render() {
		const { players } = this.props;
		// console.log(this.props.players);

		//Displaying the first half and second half of the players array as two teams:
		//TODO shuffle the players and save in state
		const team1 = this.state.shuffled.slice(0,5);
	  const team2 = this.state.shuffled.slice(5);

		// const team2 = this.state.shuffled.slice(5);


		const teamA = team1.map(player =>
	    <li key={ player.get("id")}>
	      {player.get("player")}
	    </li>
	);

	  const teamB = team2.map(player =>
	    <li key={ player.get("id")}>
	      {player.get("player")}
	    </li>
	);

		return (
			<div className="container">
				<GenerateButton className="btn btn-warning" type="submit" value="Generate Teams" onClick={ this.click }/>
            { /* check there are players to show */ }
            { players.count() == 10 ?
							<div>
								<h3> Team A: </h3>
								<ul className="list-group">
									<li>{teamA}</li>
								</ul>

								<h3> TeamB </h3>
								<ul className="list-group">
									<li>{teamB}</li>
								</ul>
							</div>
              :
              <p>Less than 10 players have been entered</p>
            }
      </div>
		)
	}
}
export default Generate;

// { /* check there are players to show */ }
// { players.count() == 10 ?
// 		<ul className="list-group">
// 				<h3> Team A: </h3>
// 				<li>{teamA}</li>
// 				<h3> TeamB </h3>
// 				<li>{teamB}</li>
// 		</ul>
// 		:
// 		<p>No players found</p>
// }




/* v2
class Generate extends Component {
	constructor(props) {
		super(props);
		this.click = this.click.bind(this);
		this.state = {
		playersList: props.players.slice(),
		};

	}
//below handles the event behaviour for clicking Generate Teams:

	click(e) {
		e.preventDefault();
		const players = this.state.playersList;
		console.log(players);
		//logic for Putting the list of names into 2 teams randomly - on every click -> randomise the order of the players and then split into two teams....using Knuth shuffle function

		const shufflePlayers = (players) => {
			let currentIndex = players.length, temporaryValue, randomIndex;
	    // While there are remaining elements to shuffle...
	    if (0 !== currentIndex) {
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

    let result = shufflePlayers(players);
    this.setState({playersList: result});
  };


	render() {
		const team1 = this.state.playersList.slice(0,5);   //takes the first half of the players
	  const team2 = this.state.playersList.slice(5);    //takes the second half of the players

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

		const { players, className, type, value, onClick } = this.props;


    return (
				<div>
					<GenerateButton className="btn btn-warning" type="submit" value="Generate Teams" onClick={ this.click }/>

					<h3>Team A:</h3>
					<ul>
						{teamOne}
					</ul>

					<h3>Team B:</h3>
					<ul>
						{teamTwo}
					</ul>
				</div>
		)};

}


	export default Generate;

v2 */

	/* subscribe to store helper

	class Items extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	      items: [],
	    };

	    store.subscribe(() => {
	      // When state will be updated(in our case, when items will be fetched),
	      // we will update local component state and force component to rerender
	      // with new data.

	      this.setState({
	        items: store.getState().items;
	      });
	    });
	  }

	  render() {
	    return (
	      <div>
	        {this.state.items.map((item) => <p> {item.title} </p> )}
	      </div>
	    );
	  }
	};

	render(<Items />, document.getElementById('app'));

	*/



// OLD v1:
// import GenerateButton from "../containers/GenerateButton"
// const Generate = ({ players, value, type, className, onClick }) => (
// 	<div>
// 		<GenerateButton className="btn btn-warning" type="submit" value="Generate Teams" onClick={ onClick }/>
// 	</div>
//
// );
//
// export default Generate;


/* <Teams onSubmit={ onSubmit } className="panel-body" /> */
