import React from "react";

// a simple Input component
export default ({ value, onChange }) => (
    <div className="form-group">
        <input className="form-control" type="text" placeholder="Submit a player name..." value={ value } onChange={ onChange } />
    </div>
);