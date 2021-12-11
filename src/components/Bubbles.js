import React from 'react';
import styled from 'styled-components';

const Circle1 = styled.div`
background: blue;
width: 24px;
height: 24px;
border-radius: 50%;
filter: blur(2px);
position: absolute;
left: 50%;
bottom: 5px;
border: 1px solid rgba(43, 43, 43, 0.568);
`;

const Circle2 = styled.div`
background: blue;
width: 34px;
height: 34px;
border-radius: 50%;
filter: blur(5px);
position: absolute;
left: 75%;
bottom: 10px;
border: 1px solid rgba(43, 43, 43, 0.568);
`;

const Circle3 = styled.div`
background: blue;
width: 34px;
height: 34px;
border-radius: 50%;
filter: blur(2px);
position: absolute;
left: 15%;
bottom: 55px;
border: 1px solid rgba(43, 43, 43, 0.568);
`;

const Bubbles = () => {
  return (
    <>
      <Circle1 />
      <Circle2 />
      <Circle3 />
    </>
  );
};

export default Bubbles;
