import React, { Component } from "react";
import { Link } from "react-router-dom";


const Players = ({players}) => (
			<div>
				{players.count() ?
					<ul className="list-group">
						{players.map(player => (
              <li className="list-group-item" key={ player.get("id") }>
              </li>
						))}
					</ul>
				:
				<p>No players found</p>
				}
			</div>


);

export default Players;
