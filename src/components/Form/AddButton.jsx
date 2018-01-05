import React from "react";

const AddButton = ({ className, type, value, disabled, players}) => (
  <div className="form-group">
    <input className={ className } type={ type } value={ value } disabled={ players.count() >= 10 }/>
  </div>
);
export default AddButton;
