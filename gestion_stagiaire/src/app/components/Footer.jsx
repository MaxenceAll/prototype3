import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components';

function Footer() {
  return (
    <FOOTER_Container>
      <NavLink to={"/contact"}>Contacter l'administrateur</NavLink>
      <span>V1.0 - Insy2s - 2023</span>
    </FOOTER_Container>
  )
}

export default Footer

const FOOTER_Container = styled.footer`
  margin-top: auto;
  background-color:var(--main-color);
  color: var(--background-color-lightest);
  height: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  border-top: 10px solid var(--secondary-color);
`;