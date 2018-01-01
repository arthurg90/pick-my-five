import React from "react";

import Form from "./Form/Form";

const fields = [
	{ name: "player", value:"", className:"form-control" }
];

const Add = ({ onSubmit }) => (
	<div>
		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } />

		<h3>Player Roster:</h3>

	</div>

);

export default Add;
