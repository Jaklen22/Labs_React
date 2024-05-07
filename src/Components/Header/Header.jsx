import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const favoriteMoviesCount = useSelector(state => state.favoriteMovies.movies.length)

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to='/'>Movies favorites</Link>
        
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/movies'>Movies</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to='/favorites'>Favorites({favoriteMoviesCount})</NavLink>
            </li>
              <li className="nav-item">
              <NavLink className="nav-link" to='/articles'>Articles</NavLink>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
