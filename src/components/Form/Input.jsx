import React from "react";
// a simple Input component with error validation for blank input
export default ({ value, name, onChange, className }) => (
    <div className="form-group">
        <input data-error="Please fill out this field." required className={ className } type="text" placeholder="Enter a player name..." value={ value } id ={ name } onChange={ onChange } />
        <div className="help-block with-errors"></div>
    </div>
);
