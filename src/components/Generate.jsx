import React, { Component } from "react";
import GenerateButton from "../containers/GenerateButton"

class Generate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shuffled: []
		};

		this.click = this.click.bind(this);
	};
//Handling the click event which randomly assigns teams names into teamA and teamB
	click(e) {
		e.preventDefault();
		const copyPlayers = [...this.props.players];

//Generic Function for shuffling an array (Fisher-Yates Shuffle)
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

		let playersShuffled = shuffle(copyPlayers);
		// this.state.shuffled.push(playersShuffled);
		this.setState({shuffled: playersShuffled}, function () { //pass a callback to setState so that function fires on first "click"
    console.log(this.state.shuffled);
	});
}

	render() {
		const { players } = this.props;
		//Displaying the first half and second half of the players array as two teams:
		const team1 = this.state.shuffled.slice(0,5);
	  const team2 = this.state.shuffled.slice(5);

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
								{teamA}

								<h3> TeamB </h3>
								{teamB}
							</div>
              :
            	null
            }
      </div>
		)
	}
}
export default Generate;
