import React from 'react';
import styled from 'styled-components';
import { Home, Settings, Layers, Image } from 'react-feather';

const Bottom = styled.div`
position: absolute;
`;

const Wrapper = styled.footer`
border-radius: 16px;
border: 1px solid rgba(43, 43, 43, 0.568);
position: relative;
margin: 15px;
padding: 15px;
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

const Title = styled.h5`
 color: #bcbcbc;
 position: relative;
 margin-top: 5px;
`;

const ButtonWrapper = styled.span`
display: block;
text-align: center;
`;

const HomeButton = () => {
  return (
    <ButtonWrapper>
      <div className="active">
        <Home color="#fff" size={24} strokeWidth={1.5} />
      </div>

      <Title className="activeText">Home</Title>
    </ButtonWrapper>
  );
};

const SecondButton = () => {
  return (
    <ButtonWrapper>
      <div>
        <Layers color="#bcbcbc" size={24} strokeWidth={1.5} />
      </div>

      <Title>Market</Title>
    </ButtonWrapper>
  );
};

const ThirdButton = () => {
  return (
    <ButtonWrapper>
      <div>
        <Image color="#bcbcbc" size={24} strokeWidth={1.5} />
      </div>

      <Title>Collections</Title>
    </ButtonWrapper>
  );
};

const FourthButton = () => {
  return (
    <ButtonWrapper>
      <div>
        <Settings color="#bcbcbc" size={24} strokeWidth={1.5} />
      </div>

      <Title>Settings</Title>
    </ButtonWrapper>
  );
};

const BottomNav = () => {
  return (
    <Wrapper>
      <HomeButton />
      <SecondButton />
      <ThirdButton />
      <FourthButton />
    </Wrapper>
  );
};

export default BottomNav;
