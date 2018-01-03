import React from "react";
// import Teams from "./Teams/Teams";
import GenerateButton from "../containers/GenerateButton"
const Generate = ({ players, value, type, className, onClick }) => (
	<div>
		<GenerateButton className="btn btn-warning" type="submit" value="Generate Teams" onClick={ onClick }/>
	</div>

);

export default Generate;


/* <Teams onSubmit={ onSubmit } className="panel-body" /> */
