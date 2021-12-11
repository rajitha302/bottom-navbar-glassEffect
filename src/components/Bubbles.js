import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
background: blue;
width: 24px;
height: 24px;
border-radius: 50%;
filter: blur(2px);
position: absolute;
left: 50%;
bottom: 2px;
border: 1px solid rgba(43, 43, 43, 0.568);
`;

const Bubbles = () => {
  return (
    <>
      <Circle />
    </>
  );
};

export default Bubbles;
