import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	};


	handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input className="form-control" type="text" placeholder="Submit a player name..." value={this.state.value} onChange={this.handleChange} />
          <input className="btn btn-success" type="submit" value="+" />
        </form>

        <h3>Player Roster:</h3>
        <ul>
          <li>Patrick Ramsey</li>
          <li>Star Fish</li>
          <li>Dutch Malloy</li>
          <li>Vic Tory</li>
          <li>Vera Log</li>
          <li>Dicky Bow</li>
          <li>King Plas</li>
          <li>Strong Bow</li>
          <li>Rick Astley</li>
          <li>Fish Goldman</li>
        </ul>
      </div>
    );
  }
}



export default Form;
