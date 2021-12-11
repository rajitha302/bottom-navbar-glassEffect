import React from 'react';
import styled from 'styled-components';
import { Home, Settings, Layers, Image } from 'react-feather';

const Wrapper = styled.footer`
border-radius: 6px;
border: 1px solid rgba(43, 43, 43, 0.568);
position: relative;
margin: 15px;
padding: 10px;
overflow: hidden;
display: flex;
justify-content: space-around;

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
      <Home color="#fff" size={28} strokeWidth={1.5} />
      <Layers color="#fff" size={28} strokeWidth={1.5} />
      <Image color="#fff" size={28} strokeWidth={1.5} />
      <Settings color="#fff" size={28} strokeWidth={1.5} />
    </Wrapper>
  );
};

export default BottomNav;
