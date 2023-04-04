import React, { useRef } from 'react';
import styled from 'styled-components';

export default function UserSearchList({
  userList,
  selectedUser,
  setSelectedUser,
  searchUser,
  setSearchUser,
}) {
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    // console.log(value);
    setSearchUser(value);
  };

  // 민시후
  const handleChecked = e => {
    const selectId = e.target.id;
    const index = userList.findIndex(user => user.id === Number(selectId));
    const schedule = userList[index].schedules;
    if (!('schedules' in userList[index])) {
      return;
    }
    if (schedule === null) {
      alert('해당 유저는 스케줄이 없습니다.');
      return;
    }

    if (index > -1 && selectedUser) {
      const user = userList[index];
      // console.log(user);
      setSelectedUser([user]);
    } else {
      setSelectedUser([userList[index]]);
    }
  };
  // console.log(userList);

  return (
    <Container>
      <SearchUserList>
        <Title>사용자 검색</Title>
        <Form onSubmit={onSubmit}>
          <SearchBox placeholder="search user .." ref={inputRef} />
          <UserList>
            {userList &&
              userList.map(user => (
                <Li key={user.id}>
                  <Checkbox
                    type="radio"
                    id={user.id}
                    name="userList"
                    onChange={handleChecked}
                  />
                  <Label htmlFor={user.id}>
                    <Name> 이름 : {user.name}</Name>
                    <Department>부서 : {user.department}</Department>
                    <Position>직책 : {user.position}</Position>
                  </Label>
                </Li>
              ))}
          </UserList>
        </Form>
      </SearchUserList>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 1050px;
`;

const SearchUserList = styled.div`
  ${props => props.theme.variables.flex('column', 'space-between', 'center')}
  position: fixed;
  top: 50px;
  width: 700px;
  height: 195px;
  background-color: ${props => props.theme.style.white};
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  opacity: 1;
  font-size: 20px;
  color: ${props => props.theme.style.text};
`;

const Title = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  width: 140px;
  height: 35px;
  border-radius: ${props => props.theme.style.borderRadius};
  background-color: ${props => props.theme.style.text};
  color: ${props => props.theme.style.white};
  font-size: ${props => props.theme.style.textmd};
  text-align: center;
  font-weight: 600;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Form = styled.form`
  ${props => props.theme.variables.flex('column', '', '')}
  height: 100%;
`;

const SearchBox = styled.input`
  width: 256px;
  height: 50px;
  border: 2px solid white;
  margin: 20px 0 10px 20px;
  outline: none;
  text-indent: 22px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.style.lightGray};
  font-size: 20px;
  color: ${props => props.theme.style.text};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.style.skyblue};
    border-color: ${props => props.theme.style.text};
  }
`;

const UserList = styled.ul`
  padding: 15px;
  width: 650px;
  height: 300px;
  border-radius: 10px;
  overflow-y: scroll;
  margin-bottom: 10px;

  /* 스크롤바 없애기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const Checkbox = styled.input`
  // & + Label {
  //   cursor: pointer;
  // }

  // & + Label > div {
  //   vertical-align: middle;
  //   padding-left: 5px;
  // }

  // & + Label:before {
  //   position : absolute;
  //   left : 5px;
  //   content: '';
  //   display: inline-block;
  //   width: 17px;
  //   height: 17px;
  //   border: 2px solid ${props => props.theme.style.text};
  //   border-radius: 4px;
  //   vertical-align: middle;
  //   margin-left :10px;
  // }

  // &:checked + Label:before{
  // width: 17px;
  // height: 17px;
  // content: '';
  // background-color: ${props => props.theme.style.text};
  // border-color: ${props => props.theme.style.text};
  // background-repeat: no-repeat;
  // background-position: 50%;
`;

const Li = styled.li`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  position : relative;
  margin-bottom: 10px;
`;
const Label = styled.label`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width : 630px;
  padding-bottom: 8px;
  border-bottom: 3px solid ${props => props.theme.style.skyblue};
`;

const Name = styled.div``;
const Info = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;

const Department = styled.div`
  margin-left: 12px;
`;
const Position = styled.div`
  margin-left: 12px;
`;
