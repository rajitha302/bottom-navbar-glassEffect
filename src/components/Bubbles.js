import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse1 = keyframes`
  0% {
    transform: scale(0.85);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.85);
  }
`;

const pulse2 = keyframes`
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
`;

const Circle1 = styled.div`
background: #6c2beb;
width: 24px;
height: 24px;
border-radius: 50%;
filter: blur(8px);
position: absolute;
left: 35%;
bottom: 5px;
transform: scale(1);
animation: ${pulse2} 2s linear infinite;
`;

const Circle2 = styled.div`
background: #6c2beb;
width: 34px;
height: 34px;
border-radius: 50%;
filter: blur(5px);
position: absolute;
left: 75%;
bottom: 10px;
transform: scale(1);
animation: ${pulse1} 3s linear infinite;
`;

const Circle3 = styled.div`
background: #6c2beb;
width: 200px;
height: 140px;
border-radius: 50%;
filter: blur(80px);
position: absolute;
right: 0;
top: 5px;
transform: scale(1);
animation: ${pulse1} 3s linear infinite;
`;

const Circle4 = styled.div`
background: #6c2beb;
width: 200px;
height: 180px;
border-radius: 50%;
filter: blur(130px);
position: absolute;
left: 0;
top: 70%;
transform: scale(1);
animation: ${pulse2} 2s ease-in-out infinite;
`;

const Bubbles = () => {
  return (
    <>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
    </>
  );
};

export default Bubbles;
