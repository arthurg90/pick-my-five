import React from "react";

// a simple Input component
export default ({ value, name, onChange, className }) => (
    <div className="form-group">
        <input className={ className } type="text" placeholder="Enter a player name..." value={ value } id ={ name } onChange={ onChange } />
    </div>
);
