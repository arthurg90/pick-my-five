import React from "react";
import Form from "./Form/Form";

const AddPlayer = ({ onSubmit }) => (
	<div>
		<h2>Add New Task</h2>
		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } fieldsPriority={ fieldsPriority } button="Add Task"/>
	</div>

);


export default Add;
