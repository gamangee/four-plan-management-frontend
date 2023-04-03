import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <Container>
      <HomeLink href="./">
        <Phrase> Click here to go ... </Phrase>
        <img src="../images/logo_origin.svg" alt="four-plan logo_origin" />
      </HomeLink>
      <Img src="../images/notfound.jpg" alt="notfound" />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Phrase = styled.p`
  font-size: 18px;
  color: #2f8bcf;
  transition: 0.4s ease;
  &:hover {
    color: #2a62ff;
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 50vw;
  height: 70vh;
`;
