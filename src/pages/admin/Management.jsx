import React from 'react';
import styled from 'styled-components';
import AdminAnnual from '../../components/AdminAnnual';
import AdminDuty from '../../components/AdminDuty';

export default function Management() {
  return (
    <Container>
      <AdminDuty />
      <AdminAnnual />
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  position: relative;
  width: 1050px;
  height: inherit;
  margin-left: 25px;
  padding: 50px;
`;
