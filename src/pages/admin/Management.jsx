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
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <Div>
        <AdminDuty />
        <AdminAnnual />
      </Div>
      <ChangeRole role={role} id={id} />
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')};
  position: relative;
  width: 1050px;
  height: inherit;
  margin-left: 25px;
  padding: 50px;
`;

const Div = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('', 'space-between', '')};
  margin-bottom: 30px;
`;
