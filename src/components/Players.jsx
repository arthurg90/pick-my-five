import React from "react";
import Player from "../containers/Player"

//This component controls the list of players to be displayed

const Players = ({players, player, onDelete}) => (
			<div className="playerRoster">
				<h3>Player Roster:</h3>
				{ players.count() ?
					<ul className="list-group">
						{ players.map(player => (
								<Player key={ player.get("id") } player={ player } onDelete={ onDelete } />
						))}
	        </ul>
				: null
				}
			</div>
);

export default Players;
