import React from "react";

// a simple Input component
export default ({ value, name, onChange, className }) => (
    <div className="form-group">
        <input className={ className } type="text" placeholder="Enter a player name..." value={ value } id ={ name } onChange={ onChange } />
    </div>
);



/* <input className="btn btn-success" type="submit" disabled={this.state.players.length >= 10} value="+" onClick={ this.onSubmit } /> */
