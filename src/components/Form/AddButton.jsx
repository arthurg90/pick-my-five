import React from "react";
//this element accepts player prop from state and accepts props from the Form element
const AddButton = ({ className, type, value, disabled, players}) => (
  <div className="form-group">
    <input className={ className } type={ type } value={ value } disabled={ players.count() >= 10 }/>
  </div>
);
export default AddButton;
