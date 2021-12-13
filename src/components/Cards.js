import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionHeading = styled.h2`
color: #fff;
`;

const Card = styled.div`
height: 20vh;
border-radius: 16px;
border: 1px solid rgba(43, 43, 43, 0.568);
position: relative;
margin: 15px;
padding: 15px;
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
  filter: blur(40px);
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

const ViewMoreBtn = styled.h5`
right: 0;
position:absolute;
`;

const Cards = () => {
  return (
    <Wrapper>
      <SectionHeading>Top Sales</SectionHeading>

      <Card>
        <ViewMoreBtn>View More</ViewMoreBtn>
      </Card>
    </Wrapper>
  );
};

export default Cards;
