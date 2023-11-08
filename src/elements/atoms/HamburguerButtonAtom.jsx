import React from 'react';
import styled from 'styled-components';

const Boton = styled.button`
  width: 60px;
  height: 60px;

  background-color: #334258;
  color: white;
  font-size: 16px;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const HamburguerButtonAttom = () => {
  return <Boton>¡Haz Clic!</Boton>;
};

export default HamburguerButtonAttom;
