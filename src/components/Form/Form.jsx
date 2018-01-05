import React, { Component } from "react";
import Input from "./Input";
import AddButton from "../../containers/AddButton"

class Form extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.click = this.click.bind(this);

		this.state = {
		fields: props.fields.slice(),
		}

	};

//below handles reset button event to reset form:

click(e) {
	window.location.reload();
}

//below handles the event behaviour for submitting items into the list

submit(e) {
	e.preventDefault(); //prevents default reloading behaviour
	let fields = this.state.fields.slice();
	let data = fields.reduce((data, {name, value}) => {
		data[name] = value;
		return data;
	}, {});

	const blankFields = [
		{ name: "player", value:"", className:"form-control" }
	];

	this.setState({fields: blankFields}); //on Submit clear the input field
	this.props.onSubmit(data);
}

//below handles the event of typing into the input box so there's visual feedback
	change(e, i) {
		let fields = this.state.fields.slice();
		fields[i].value = e.target.value;
		console.log(fields[i].value);
		this.setState({fields: fields});
	}

//the props below are passed down to the AddButton and Input component, the Add component passes fields props to the form and is destructured
//TODO validate the input value so the button is disabled when the input is blank AND when there are 10 or more items

  render() {
		const { className } = this.props;
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

			<button onClick={ this.click } className="btn btn-info" type="button">Reset</button>

			<AddButton className="btn btn-success" type="submit" value="+"/>

      </form>
    )
  }
}

export default Form;
