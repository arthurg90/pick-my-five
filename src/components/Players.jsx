import React, { Component } from "react";
import Player from '../containers/Player';

class Players extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { players, onDelete, key } = this.props;
		return(

			<div>
				{players.count() ?
					<ul className="list-group">
						{players.map(player => (
							<Player key={ player.get("id") } player={ player } onDelete={ onDelete } />

						))}
					</ul>
				:
				<p>No players found</p>
				}
			</div>


		)
	}
}
export default Players;
