import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useService } from '../../context/context';
import ChangeRole from '../../components/ChangeRole';
import styled from 'styled-components';
import AdminAnnual from '../../components/AdminAnnual';
import AdminDuty from '../../components/AdminDuty';
import UserSearchList from './UserSearchList';

export default function Management() {
  const id = 1;
  const role = 'ROLE_USER';

  const [selectedUser, setSelectedUser] = useState();
  const [schedule, setSchedule] = useState({});

  const { service, user } = useService();

  const { data: userList } = useQuery(['userList'], () => {
    return service.searchUserList('길동');
  });

  const [duty, setDuty] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setDuty(
        selectedUser[0].schedules.filter(user => user.type === 'DUTY')[0]
      );
    } else {
      setDuty({});
    }
  }, [selectedUser]);

  console.log(duty);
  return (
    <>
      {user.role === 'ROLE_ADMIN' && (
        <Container>
          <UserSearchList
            userList={userList}
            selectedUser={selectedUser} //나중에 지워야함
            setSelectedUser={setSelectedUser}
          />
          <Div>
            <AdminDuty duty={duty} />
            <AdminAnnual annual={duty} />
          </Div>
          <ChangeRole role={role} id={id} />
        </Container>
      )}
      {user.role !== 'ROLE_ADMIN' && <Container>너 누구야</Container>}
    </>
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
  position: relative;
  top: 8px;
  width: 100%;
  ${props => props.theme.variables.flex('', 'space-between', '')};
  margin-bottom: 30px;
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
