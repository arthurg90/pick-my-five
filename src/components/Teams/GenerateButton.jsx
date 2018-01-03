import React, { Component } from "react";

const GenerateButton = ({players, value, type, className }) => (
  <div>
    <input className={ className } type={ type } value= { value } />
  </div>
);

export default GenerateButton;


{/* <input className={ className } type={ type } value= { value } disabled={ players.count() < 10 } /> */}


//
// const GenerateButton = ({players, value, type, className }) => (
//   <div className="form-group">
//     {/* <input className={ className } type={ type } value={ value } disabled={ players.count() < 10 } /> */}
//   </div>
// );
//
//
