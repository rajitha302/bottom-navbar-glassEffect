import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Menu } from 'react-feather';

const Wrapper = styled.header`
border: 1px solid rgba(43, 43, 43, 0.568);
position: relative;
padding: 15px;
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;

&:before {
  position: absolute;
  content: '';
  background: inherit;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
  filter: blur(40px);
  border-radius: 15px;
  margin: -20px;
}
`;

const Avatar = styled.img`
width: 32px;
height: 32px;
border-radius: 50px;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <Avatar src="https://img.artpal.com/734961/4-20-6-1-5-48-53m.jpg" />

        <Menu color="#fff" size={24} strokeWidth={1.5} />
      </Wrapper>
    </>
  );
};

export default Header;
