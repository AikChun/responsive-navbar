import React from 'react';
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo"><a href="/" >THE LOGO</a></div>
      <div>
        <ul>
          <li className="toolbar__navigation-items"><a href="/" >Products</a></li>
          <li className="toolbar__navigation-items"><a href="/" >Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;