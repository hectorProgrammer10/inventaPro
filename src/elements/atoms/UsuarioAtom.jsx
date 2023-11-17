import React from 'react';
import styled from 'styled-components';
import imageSrc from '../../images/userIcon.png';

const UsuarioBoton = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: #334258;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-left: 10%;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const UsuarioAtom = () => {
  return <UsuarioBoton><img src={imageSrc} alt="icoUsuario" /></UsuarioBoton>;
};

export default UsuarioAtom;
