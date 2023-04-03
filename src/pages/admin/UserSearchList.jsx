import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function UserSearchList({
  userList,
  selectedUser,
  setSelectedUser,
}) {
  const [searchUser, setSearchUser] = useState(''); // search에서 검색한 값
  // const [select, setUserList] = useState(); // searchUser를 통해서 정렬 값

  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    setSearchUser(value);
  };

  const handleChecked = e => {
    const selectId = e.target.id;
    const index = userList.findIndex(user => user.id === selectId);
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
      console.log(user);
      setSelectedUser([user]);
    } else {
      setSelectedUser([userList[index]]);
    }
  };

  return (
    <Container>
      <SearchUserList>
        <Form onSubmit={onSubmit}>
          <SearchBox placeholder="search user .." ref={inputRef} />
          <UserList>
            {searchUser &&
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
  position: relative;
  top: -20px;
  width: 700px;
  height: 195px;
  background-color: ${props => props.theme.style.white};
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};

  z-index: 10;
  opacity: 1;
  font-size: 20px;
  color: ${props => props.theme.style.text};
`;

const Form = styled.form`
  ${props => props.theme.variables.flex('column', '', '')}
  height: 100%;
`;

const SearchBox = styled.input`
  width: 256px;
  height: 50px;
  border: 2px solid white;
  margin: 20px 0 30px 20px;
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
  overflow: scroll;
  margin-bottom: 10px;
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
  border-bottom: 3px solid ${props => props.theme.style.lightGray};
  padding-left 30px;
  }
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
