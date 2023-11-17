import React from 'react';
import styled from 'styled-components';
import imageSrc from '../../images/Logo.svg';

const Logo = styled.img`
  height: 100%;
  width: 35%;
  margin-right: 50%;
 display: inline;
  border-radius: 1rem;
  
`;

const LogoAtom = () => {
  return <Logo src={imageSrc} alt='logo'></Logo>;
};

export default LogoAtom;
