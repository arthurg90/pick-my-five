import React from "react";
import Teams from "./Teams/Teams";

// const fields = [
// 	{ name: "player", value:"", className:"form-control" }
// ];

const Generate = ({ players, onSubmit }) => (
	<div>
		<Teams onSubmit={ onSubmit } className="panel-body" />



	</div>

);

export default Generate;
