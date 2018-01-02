import React, { Component } from 'react';


class Player extends Component {
  	componentDidMount() {
  		this.props.onLoad();
  	}


	render () {
		const { player, players, onDelete } = this.props;
			return (
          <li className="list-group-item" key={ player.get("id") }>
            { player.get("player") }
            <button onClick={ onDelete } className="btn btn-danger">x</button>
          </li>
      );
  }
}


export default Player;
