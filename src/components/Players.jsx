import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Player from "./Player";

//This component controls the list of players to be displayed

const Players = ({players, player}) => (
			<div>
				{players.count() ?
					<ul className="list-group">
						{ players.map(player => (
								<li className="list-group-item" key={ player.get("id") }>
									{ player.get("player") }
								</li>
						))}
	        </ul>
				:
				<p>Please enter up to 10 Players above</p>
				}
			</div>
);

export default Players;


/* <ul className="list-group">
	{players.map(player => (
		<li className="list-group-item" key={ player.get("id") }>
		</li>
	))}
</ul>

/*
// listNames var
// const listNames = players.map((value, index) =>
// 	<li key={index}>
// 		{value}
// 	</li>
// );



*/
