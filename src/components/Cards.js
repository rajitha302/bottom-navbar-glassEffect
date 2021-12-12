import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionHeading = styled.h2`
color: #fff;
`;

const Card = styled.div`
width: 50vw;
height: 20vh;
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

const Wrapper = styled.div`
padding: 15px
`;

const Flex = styled.div`
display: flex;
`;

const Cards = () => {
  return (
    <Wrapper>
      <SectionHeading>Recent Updates</SectionHeading>
      <Flex>
        <Card></Card>
        <Card></Card>
      </Flex>
    </Wrapper>
  );
};

export default Cards;
