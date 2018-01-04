import React, { Component } from "react";

const GenerateButton = ({players, value, type, className, onClick }) => (
  <div>
    <input className={ className } type={ type } value= { value } onClick={ onClick } disabled={ players.count() < 10 } />
  </div>
);

export default GenerateButton;


{/* <input className={ className } type={ type } value= { value } disabled={ players.count() < 10 } /> */}
