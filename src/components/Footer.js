import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  margin: 20px
`;

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer</h1>
    </Wrapper>
  );
};

export default Footer;
