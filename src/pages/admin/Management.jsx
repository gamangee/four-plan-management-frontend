import React, { useState } from 'react';
import ChangeRole from '../../components/ChangeRole';
import styled from 'styled-components';
import AdminAnnual from '../../components/AdminAnnual';
import AdminDuty from '../../components/AdminDuty';

export default function Management() {
  const id = 1;
  const role = 'ROLE_USER';

  const [selectedUser, setSelectedUser] = useState({
    id: '1',
    name: '홍길동',
    accountId: 'abc123',
    role: 'ROLE_USER',
    email: 'gildong123@naver.com',
    department: '개발팀',
    position: '팀장',
    yearly: '30',
    duty: false,
    schedules: [
      {
        id: '1',
        accountId: 'abc123',
        type: 'YEARLY',
        content: null,
        start_date: '2023-03-23T00:00:00Z',
        end_date: '2023-03-24T00:00:00Z',
        created_at: '2023-03-15T15:25:00Z',
        modified_at: '2023-03-15T15:25:00Z',
      },
      {
        id: '2',
        accountId: 'abc123',
        type: 'DUTY',
        content: null,
        start_date: '2023-03-30T00:00:00Z',
        end_date: '2023-03-30T23:59:59Z',
        created_at: '2023-03-20T15:25:00Z',
        modified_at: '2023-03-20T15:25:00Z',
      },
    ],
  });

  const yearly = selectedUser.schedules.filter(
    schedule => schedule.type === 'YEARLY'
  )[0];

  const duty = selectedUser.schedules.filter(
    schedule => schedule.type === 'DUTY'
  )[0];

  return (
    <Container>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <div>안녕안녕</div>
      <Div>
        <AdminDuty duty={duty} />
        <AdminAnnual yearly={yearly} />
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
