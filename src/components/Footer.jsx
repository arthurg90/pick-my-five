import React from 'react';
//reusable footer component with a dynamic date copyright notice
const Footer = ({notice, date}) => (
  <footer className="footer">
    <div className="container-footer">
      <p>{notice}{date}</p>
    </div>
  </footer>
);

export default Footer;
