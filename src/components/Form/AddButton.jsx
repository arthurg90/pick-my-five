import React, { Component } from "react";

const AddButton = ({players, value, type, className, fields}) => (
  <div className="form-group">
    <input className={ className } type={ type } value={ value } disabled={ players.count() >= 10 }/>
  </div>
);
export default AddButton;
