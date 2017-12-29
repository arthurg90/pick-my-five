import React, { Component } from "react";
import Input from "./Input";
import PlayerList from "./PlayerList"


// A statefull class component, state will need to be lifted later..TODO
class Form extends Component {
	constructor(props) {
		super(props);
		// state in this case are the name values of the players and an empty array to store the list of players to be displayed
		this.state = {value: "", players: [] };

    this.handleChange = this.handleChange.bind(this);	//this is needed to bind the event handlers to THIS
    this.handleSubmit = this.handleSubmit.bind(this);
	};

//below handles the event behaviour for submitting items into the list
	handleSubmit(e) {
		const playerName = this.state.value;		//name value to be copied from the input
		const playersCopy = [...this.state.players];	//copy of the state array to be mutated
		e.preventDefault();
		playersCopy.push(playerName);
		this.setState({players: playersCopy});
	}

//below handles the event of typing into the input box so there's visual feedback
	handleChange(e) {
		this.setState({value: e.target.value});
	}

  render() {
		const listNames = this.state.players.map((value, index) =>			//store {listItems} as a var for clarity
			<li key={index}>
				{value}
			</li>
		);

//return the presentation of the list item of player roster
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>

					<Input
						onChange={ (e) => this.handleChange(e) }
						value = { this.state.value }
					/>

					{/*have to handle number of list items by passing in props to the disabled attribute in input*/}

          <input className="btn btn-success" type="submit" disabled={this.state.players.length >= 10} value="+" onClick={ this.handleSubmit } />

					<PlayerList
						listNames={listNames}
					/>

        </form>
      </div>
    );
  }
}

export default Form;
