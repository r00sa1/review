import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="nav-container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/Etusivu">Etusivu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Joululahjapaperit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Koristenauhat</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Joulukortit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Ostoskori</Link>
          </li>

        </ul>
      </div>
    </header>
  );
}