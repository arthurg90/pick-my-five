import React, { Component } from "react";
import Player from "../containers/Player"
// import { Link } from "react-router-dom";

//This component controls the list of players to be displayed
// class Players extends Component {
// 	componentDidMount() {
// 		this.props.onLoad();
// 	}
//
// 	render() {
// 		const {players, player, onDelete} = this.props;
// 			return (
// 						<div>
// 							{ players.count() ?
// 								<ul className="list-group">
// 									{ players.map(player => (
// 											<li className="list-group-item" key={ player.get("id") }>
// 												{ player.get("player") }
// 												<button onClick={ onDelete } className="btn btn-danger">x</button>
// 											</li>
// 									))}
// 				        </ul>
// 							:
// 							<p>Please enter up to 10 Players above</p>
// 							}
// 						</div>
// 			)
// 	}
// }
// export default Players;


const Players = ({players, player, onDelete}) => (
			<div>
				{ players.count() ?
					<ul className="list-group">
						{ players.map(player => (
								<Player key={ player.get("id") } player={ player } onDelete={ onDelete } />
						))}
	        </ul>
				:
				<p>Please enter up to 10 Players above</p>
				}
			</div>
);

export default Players;
