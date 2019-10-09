import React from 'react';
import './header.css';

const Header = () => {

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <h1>LOGO PLACEHOLDER</h1>
          {/* insert logo image here. container will force resizing*/}
        </div>
        <div className="nav-container">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/admin">Admin</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
