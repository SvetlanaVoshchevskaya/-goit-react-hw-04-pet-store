import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets">Pets</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </header>
);
export default Nav;
