import React from 'react';
import { Link } from 'react-router-dom';

const ThemeMenu = () => {
  return (
    <div className="menu-page">
      <h2>Themes and Essays</h2>
      <ul>
        <li><Link to="/themes/theme">Theme 1</Link></li>
      </ul>
    </div>
  )
}

export default ThemeMenu;