import React, { Component } from "react";


// a simple add button component
// export default ({ value, type, className }) => (
//     <div className="form-group">
//         <input className={ className } type={ type } value={ value } disabled={ !isEnabled } />
//     </div>
// );


const AddButton = ({players, value, type, className}) => (
  <div className="form-group">
      <input className={ className } type={ type } value={ value } disabled={ players.length <= 10 ? "true" : "false" }/>
  </div>
);

export default AddButton;

// const isEnabled =
// players.length <= 10;
//
// disabled={ !isEnabled }
//
//
// <input className="btn btn-success" type="submit" disabled={this.state.players.length >= 10} value="+" onClick={ this.onSubmit } />
