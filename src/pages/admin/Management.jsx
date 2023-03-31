import React from 'react';
import ChangeRole from '../../components/ChangeRole';
import styled from 'styled-components';
import AdminAnnual from '../../components/AdminAnnual';
import AdminDuty from '../../components/AdminDuty';

export default function Management() {
  const id = 1;
  const role = 'ROLE_USER';
  return (
    <Container>
      <AdminDuty />
      <AdminAnnual />
      <ChangeRole role={role} id={id} />
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
