import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
	constructor(props) {
		super(props);

		//always bind this method
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
		fields: props.fields.slice(),
	};
};

//below handles the event behaviour for submitting items into the list


	handleSubmit(e) {
		e.preventDefault();

		const fields = this.state.fields;

		const data = fields.reduce((data, field) => {
			data[field.name] = field.value;
			return data;
		}, {});

		this.props.onSubmit(data);
		console.log(data);
	}

//below handles the event of typing into the input box so there's visual feedback
	handleChange( e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		this.setState({fields: fields});
	}

  render() {

		const { className, button } = this.props;

    return (

			<form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
				{ this.state.fields.map(({ name, value, className }, i) => (
					<Input
					onChange={ (e) => this.handleChange(e, i) }
					value={ value }
					key={ i }
					name={ name }
					className={ className }
					/>

				))}

			<button className="btn btn-success"> { button } </button>


        </form>
    )
  }
}

export default Form;

/*
// listNames var
// const listNames = this.state.players.map((value, index) =>
// 	<li key={index}>
// 		{value}
// 	</li>
// );


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
