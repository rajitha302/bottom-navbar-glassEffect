import React from 'react';
import './style.css';
import Footer from './components/Footer';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
background: #1f1f1f;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;

export default function App() {
  return (
    <Container>
      <Footer />
    </Container>
  );
}
