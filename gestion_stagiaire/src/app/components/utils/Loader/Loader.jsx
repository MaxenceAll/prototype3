import React from 'react'
import './Loader.css'
import { styled } from 'styled-components';

function Loader() {
  return (
    <DIV_LoaderContainer>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </DIV_LoaderContainer>

  )
}

export default Loader

const DIV_LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items:center;
`;
