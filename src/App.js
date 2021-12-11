import React from 'react';
import './style.css';
import BottomNav from './components/BottomNav';
import Bubbles from './components/Bubbles';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
background: #000;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;

export default function App() {
  return (
    <Container>
      <Bubbles />
      <BottomNav />
    </Container>
  );
}
