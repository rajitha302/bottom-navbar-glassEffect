import React from 'react';
import './style.css';
import BottomNav from './components/BottomNav';
import Bubbles from './components/Bubbles';
import Cards from './components/Cards';
import Header from './components/Header';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
background: #000;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Cards />
      <Bubbles />
      <BottomNav />
    </Container>
  );
}
