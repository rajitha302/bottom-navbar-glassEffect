import React from 'react';
import styled from 'styled-components';
import { Home } from 'react-feather';

const Wrapper = styled.footer`
border-radius: 15px;
border: 1px solid rgba(43, 43, 43, 0.568);
position: relative;
margin: 20px;
padding: 10px;
overflow: hidden;

&:before {
  position: absolute;
  content: '';
  background: inherit;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
  filter: blur(80px);
  border-radius: 15px;
  margin: -20px;
}
`;

const Heading1 = styled.h1`
 color: #fff;
 position: relative;
`;

const Icon = styled.span`
color: #fff;
`;

const BottomNav = () => {
  return (
    <Wrapper>
      <Heading1>Mneu</Heading1>
      <Home />
    </Wrapper>
  );
};

export default BottomNav;
