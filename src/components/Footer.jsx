import React from 'react';
//reusable footer component with a dynamic date copyright notice
const Footer = ({notice, date}) => (
  <footer className="footer">
    <div className="container-footer">
      <p>{notice}{date}</p>
        <div className="socialLinks">
          <a href="https://github.com/arthurg90/pick-my-five"><img className='git' src={require('../img/git.png')} alt={'github cat logo'}/></a>
          <a href="https://www.linkedin.com/in/arthur-graham-33184658/"><img className='git' src={require('../img/linkedinWhite.png')} alt={'github cat logo'}/></a>
        </div>
    </div>
  </footer>
);

export default Footer;
