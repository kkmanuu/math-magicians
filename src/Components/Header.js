import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  // Define the menu items in an array
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/calculator', label: 'Calculator' },
    { path: '/quotes', label: 'Quotes' },
  ];

  return (
    <div>
      <div className="header">
        <h1>Math Magicians</h1>
        <div className="ulDiv">
          <ul>
            {/* Map over the menuItems array to generate list items */}
            {menuItems.map((menuItem) => (
              <li key={menuItem.path}>
                <Link to={menuItem.path}>{menuItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
