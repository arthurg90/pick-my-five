import React from "react";
//Generate button Element accepts props from generate component
const GenerateButton = ({players, value, type, className, onClick }) => (
  <div>
    <input className={ className } type={ type } value= { value } onClick={ onClick } disabled={ players.count() < 10 } />
  </div>
);

export default GenerateButton;
