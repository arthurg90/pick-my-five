import React, { Component } from "react";

const GenerateButton = ({players, value, type, className }) => (
  <div className="form-group">
    <input className={ className } type={ type } value={ value } disabled={ players.count() < 10 } />
  </div>
);

export default GenerateButton;

/* <form>
  <input className="btn btn-warning" type="submit" value="Generate Teams" onClick={ this.clicked } />
</form> */
