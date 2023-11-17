import React from 'react';
import styled from 'styled-components';
import imageSrc from '../../images/icono2.png';

const Input = styled.input`
    border: 1px solid #334258;
    height: 35%;
    border-radius: 3rem;
    width: 50%;
    padding: 1rem;
    background-color:#CAD8DB;
    color:#334258;
    margin-left: 3rem;
`;
const IconoSerch = styled.button`
    height: 2rem;
    
    border-radius: 50%;
    padding: 3px;
    background-color: #334258;
    width: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    &:hover {
    background-color: #2980b9;
  }
`;

const InputAtom = () => {
  return (
    <div id='no'>
        <Input type='text' placeholder='Buscar articulo'></Input>
        <IconoSerch><img src={imageSrc} alt="serch" /></IconoSerch>
    </div>
  );
};

export default InputAtom;
