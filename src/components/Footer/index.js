import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className ="neonBase" id="footer">
            <Link to="/contact">Contact</Link>
            <h6>Copywrite &copy; 2021</h6>   
    </div>
  );
};

export default Footer;