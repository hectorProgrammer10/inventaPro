import React from 'react';
import styled from 'styled-components';
import HamburguerButtonAttom from '../atoms/HamburguerButtonAtom';
// import '../../styles/molecules/HeaderStyle.css';

const HeaderMolecule = () => {
  return (
    <>
        <HeaderContainer>
          <HamburguerButtonAttom />
        </HeaderContainer>
    </>
  );
};

export default HeaderMolecule;

const HeaderContainer = styled.div`
  background-color: #12acf9;
  height: 15%;
`;