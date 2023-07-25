import React from 'react'

import logo from '../assets/images/logo_full.svg'
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as URL from '../constants/url/urlFront';

function Header() {
  return (
    <HEADER_Container>
      <NavLink to={URL.URL_HOME}>
        <IMG_Logo src={logo} alt="logo" />
      </NavLink>
      <NavLink to={URL.URL_MANAGERS}>Responsables</NavLink>
      <NavLink to={URL.URL_INTERN}>Stagiaires</NavLink>
      <NavLink to={URL.URL_TEAMS}>Equipes</NavLink>
      <NavLink to={URL.URL_REVIEWS}>Reviews</NavLink>
      <NavLink to={URL.URL_DAYLIES}>Daylies</NavLink>
      <NavLink to={URL.URL_LOGIN}><button>Se connecter</button></NavLink>
    </HEADER_Container>
  )
}

export default Header

const HEADER_Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--background-color-lightest);
  height: 90px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 5%;
  padding-right: 5%;
`;

const IMG_Logo = styled.img`
  width: 90px;
  height: 73px;
`;