import React from 'react';
import styled from 'styled-components';
import { useService } from '../../context/context';
import UserSearchList from './UserSearchList';

export default function Management() {
  const { user } = useService();
  return (
    <div>
      {user.role === 'USER_ADMIN' && (
        <Container>
          <UserSearchList />
        </Container>
      )}
      {user.role !== 'USER_ADMIN' && <Container>너 누구야</Container>}
    </div>
  );
}

const Container = styled.div`
  position: relative;
  width: 1050px;
  height: inherit;
  margin-left: 25px;
  padding: 50px;
`;
