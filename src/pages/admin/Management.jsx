import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useService } from '../../context/context';
import ChangeRole from '../../components/ChangeRole';
import styled from 'styled-components';
import AdminAnnual from '../../components/AdminAnnual';
import AdminDuty from '../../components/AdminDuty';
import UserSearchList from './UserSearchList';

export default function Management() {
  const [selectedUser, setSelectedUser] = useState(); // 선택한 유저 값
  const [schedule, setSchedule] = useState({});
  const [searchUser, setSearchUser] = useState(''); // search에서 검색한 값
  const [isSearch, setIsSearch] = useState(false);
  const { service } = useService();

  const { data: userList } = useQuery(['userList', searchUser], () => {
    return service.searchUserList(searchUser);
  });

  const { user } = useService();

  useEffect(() => {
    if (selectedUser) {
      const dutySchedule = selectedUser[0].schedules.find(
        schedule => schedule.type === 'DUTY'
      );
      const yearlySchedule = selectedUser[0].schedules.find(
        schedule => schedule.type === 'YEARLY'
      );
      setSchedule({ dutySchedule, yearlySchedule, id: selectedUser[0].id });
      setIsSearch(true);
    } else {
      setSchedule({});
    }
  }, [selectedUser]);
  return (
    <>
      {user.role === 'ROLE_ADMIN' && (
        <Container>
          <UserSearchList
            userList={userList}
            selectedUser={selectedUser} //나중에 지워야함
            setSelectedUser={setSelectedUser}
            searchUser={searchUser}
            setSearchUser={setSearchUser}
          />
          <ChangeRole selectedUser={selectedUser} />
          <Div>
            <AdminDuty
              id={schedule.id}
              duty={schedule.dutySchedule}
              isSearch={isSearch}
            />
            <AdminAnnual
              id={schedule.id}
              annual={schedule.yearlySchedule}
              isSearch={isSearch}
            />
          </Div>
        </Container>
      )}
      {user.role !== 'ROLE_ADMIN' && (
        <WarnContainer>
          <P>권한이 없습니다. 로그인 후, 다시 시도해주세요.</P>
          <Img src="../images/security_icon.png" alt="security icon" />
          <A href="/admin">If you're an administrator ? Click here !</A>
        </WarnContainer>
      )}
    </>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')};
  position: relative;
  width: 1050px;
  height: 100%;
  margin-left: 25px;
`;

const Div = styled.div`
  position: fixed;
  top: 270px;
  width: inherit;
  ${props => props.theme.variables.flex('', '', '')};
  margin-bottom: 30px;
  color: ${props => props.theme.style.text};
`;

const WarnContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  width: 1450px;
  height: 900px;
  background-color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  position: absolute;
  z-index: 1;
`;

const Img = styled.img``;

const P = styled.p`
  color: ${props => props.theme.style.warning};
  font-weight: 600;
`;

const A = styled.a`
  color: ${props => props.theme.style.lightGray};
  transition: 0.3s ease;
  &:hover {
    color: ${props => props.theme.style.text};
  }
`;
