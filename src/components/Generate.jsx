import React, { Component } from "react";
import GenerateButton from "../containers/GenerateButton"
//set up local state for a "shuffled" player array
class Generate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shuffled: []
		};

		this.click = this.click.bind(this);
		this.clicked = this.clicked.bind(this);

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
		this.setState({shuffled: playersShuffled}, function () { //pass a callback to setState so that function fires on first "click"
	});
}

//below handles reset button event to reset form:

clicked(e) {
	window.location.reload();
}
	render() {
		const { players } = this.props;
//Displaying the first half and second half of the players array as two teams:
		const team1 = this.state.shuffled.slice(0,5);
	  const team2 = this.state.shuffled.slice(5);

//variables for Displaying a list of players in team A and B columns
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
				<div className="balls-container">
					<img className='balls-icon' src={require('../img/balls.png')} alt={'black and white football icon'}/>
					<GenerateButton className="btn-generate" type="submit" value="Generate Teams" onClick={ this.click }/>
					<img className='balls-icon' src={require('../img/balls.png')} alt={'black and white football icon'}/>
				</div>
				<button onClick={ this.clicked } className="btn-reset" type="button">Reset</button>
            { /* check there are players to show */ }
            { players.count() === 10 ?
							<div className="teams-container">

								<div className="teamA">
									<h3> Team A: </h3>
									<img className="teamA-shirt" src={require('../img/teamA.png')} alt={'red soccer jersey for team A'}/>
									<div className="teamA-list">
										{teamA}
									</div>
								</div>

								<div className="teamB">
									<h3> Team B: </h3>
									<img className="teamB-shirt" src={require('../img/teamB.png')} alt={'red soccer jersey for team A'}/>
									<div className="teamB-list">
										{teamB}
									</div>
								</div>

							</div>
              :
            	null
            }
      </div>
		)
	}
}
export default Generate;
