import React from 'react'
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <DIV_AppContainer>

      <Header />

      <MAIN_Container>
        <Outlet />
      </MAIN_Container>

      <Footer />
      
    </DIV_AppContainer>
  )
}

export default MainLayout

const DIV_AppContainer = styled.div`
  min-width: 100dvw;
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  background-color: var(--background-color);
`;


const MAIN_Container = styled.main`

`;

