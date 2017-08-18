import React from 'react';
import { Route, Switch } from 'react-router-dom';

//note: &#9776; is a special unicode value which renders to the 
//icon of the three horizonal bars representing the menu
const Nav = (props) => (
  <div className="nav">
    <ul>
      <div className="title">Trek Tracker</div>
      <div className="dropdown">
        <button className="dropbtn">&#9776;</button>
        <div className="dropdown-content">
          <a href='/upload'>Upload</a>
          <a href='/profile'>Profile</a>
          <a href='/logout'>Logout</a>
        </div>
      </div>
    </ul>
  </div>
);

export default Nav;