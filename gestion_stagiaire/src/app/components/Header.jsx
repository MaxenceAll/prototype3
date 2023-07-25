import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo_full.svg';
import * as URL from '../constants/url/urlFront';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-lightest dark:bg-background-dark h-90 text-center flex items-center justify-evenly px-5 shadow-md">
      <NavLink to={URL.URL_HOME}>
        <img src={logo} alt="logo" className="w-90 h-73" />
      </NavLink>
      <NavLink to={URL.URL_MANAGERS}>Responsables</NavLink>
      <NavLink to={URL.URL_INTERN}>Stagiaires</NavLink>
      <NavLink to={URL.URL_TEAMS}>Equipes</NavLink>
      <NavLink to={URL.URL_REVIEWS}>Reviews</NavLink>
      <NavLink to={URL.URL_DAYLIES}>Daylies</NavLink>
      <NavLink to={URL.URL_TEST}>Test page</NavLink>
      <NavLink to={URL.URL_LOGIN}>
        <button className="btn btn-primary">
          Se connecter
        </button>
      </NavLink>
    </header>
  );
}

export default Header;
