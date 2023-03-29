import React from 'react';
import styled from 'styled-components';

export default function DashBoard({ children }) {
  return (
    <Container className="test">
      <DashBoardContainer>{children}</DashBoardContainer>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  position : absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const DashBoardContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 1450px;
  height: 900px;
  background-color: white;
  border-radius: ${props => props.theme.style.borderRadius};
  -webkit-box-shadow: 2px 5px 15px 5px #b6cfe3;
  box-shadow: 2px 5px 15px 5px #b6cfe3;
`;
