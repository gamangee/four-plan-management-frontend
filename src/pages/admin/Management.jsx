import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useService } from '../../context/context';
import UserSearchList from './UserSearchList';

export default function Management() {
  const [selectedUser, setSelectedUser] = useState({});

  const { service, user } = useService();

  const { data: userList } = useQuery(['userList'], () => {
    return service.searchUserList('길동');
  });

  console.log(selectedUser);
  return (
    <>
      {user.role === 'ROLE_ADMIN' && (
        <Container>
          <ContentName>Management</ContentName>
          <UserSearchList
            userList={userList}
            selectedUser={selectedUser} //나중에 지워야함
            setSelectedUser={setSelectedUser}
          />
        </Container>
      )}
      {user.role !== 'ROLE_ADMIN' && <Container>너 누구야</Container>}
    </>
  );
}

const Container = styled.div`
  position: relative;
  width: 1050px;
  height: inherit;
  margin-left: 25px;
  color: ${props => props.theme.style.text};
`;

const ContentName = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position : relative;
  top: 70px;
  width: 200px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
`;
