import React from "react";
import Form from "./Form/Form";
//this component renders Form components for Input and Button

//fields the form takes
const fields = [
	{ name: "player", value:"", className:"form-control" }
];

const Add = ({ onSubmit }) => (
	<div>
		<h3>Start by adding some player names:</h3>
		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } />
	</div>
);

export default Add;
