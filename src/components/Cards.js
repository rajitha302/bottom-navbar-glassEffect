import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionHeading = styled.h2`
color: #fff;
`;

const Card = styled.div`
padding: 15px
`;

const Cards = () => {
  return (
    <>
      <SectionHeading>Recent</SectionHeading>
      <Card></Card>
    </>
  );
};

export default Cards;
