import React from 'react';
//A reusable header component taking props from the App parent component
const Header = ({ title, subtitle }) => (
    <div className='page-header'>
      <img className='logo' src={require('../img/FootyLogoWhite.png')} alt={'flying football logo'}/>
      <h1> {title} {subtitle ? <small> {subtitle} </small> : null} </h1>
    </div>
);

export default Header;
