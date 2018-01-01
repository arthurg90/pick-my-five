import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);

		this.state = {
		fields: props.fields.slice(),
	};
};

//below handles the event behaviour for submitting items into the list

	submit(e) {
		e.preventDefault(); //prevents default reloading behaviour
		const fields = this.state.fields;

		let data = fields.reduce((data, {name, value}) => {
			data[name] = value;
			return data;
		}, {});

		// console.log(fields);
		this.props.onSubmit(data);
}

//below handles the event of typing into the input box so there's visual feedback
	change(e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({fields: fields});
	}

  render() {
		const { fields, className } = this.props;

		// const isEnabled = fields.value == "";

    return (
			<form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
				{ this.state.fields.map(({ name, value, className }, i) => (
					<Input
					onChange={ (e) => this.change(e, i) }
					value={ value }
					key={ i }
					name={ name }
					className={ className }
					/>
				))}

			<input className="btn btn-success" type="submit" value="+" />

      </form>
    )
  }
}

export default Form;

/*
const isEnabled =
players.length <= 10;

disabled={ !isEnabled }


<input className="btn btn-success" type="submit" disabled={this.state.players.length >= 10} value="+" onClick={ this.onSubmit } />


//logic to display items in list
// { players.count() ?
// 		<ul className="list-group">
// 			{ players.map((value, index) => (
// 				<li key={index}>
// 					{value}
// 				</li>
// 				))}
// 		</ul>
// 	:
// 	<p>No Players to display</p>
// }
*/
