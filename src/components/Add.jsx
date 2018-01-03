import React from "react";
import Form from "./Form/Form";
//this component renders Form components for Input and Button
const fields = [
	{ name: "player", value:"", className:"form-control" }
];

const Add = ({ onSubmit }) => (
	<div>
		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } />
	</div>
);

export default Add;
