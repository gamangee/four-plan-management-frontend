import React, { useEffect, useRef, useState } from 'react';
import OutsideClick from './OutsideClick';
import styled from 'styled-components';

export default function UserSearch({
  setIsModalOpen,
  schedule,
  setSelected,
  selectedUser,
  setSelectedUser,
  isModalOpen,
}) {
  const [searchUser, setSearchUser] = useState([]); // 모달에서 입력한 값
  const [userList, setUserList] = useState(); // 이름 검색후 들어가있는 값.
  const ref = useRef();
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    setSearchUser(value);
  };

  console.log(schedule);

  // 모달창을 다시 열었을때 기존에 체크된 리스트를 다시 가져옴
  useEffect(() => {
    //selectedUser :  체크가 되어있는 유저들의 accountId

    if (selectedUser.length > 0) {
      const uniqueUsers = [];
      const accountIds = new Set();
      //체크가 되어있는 유저들의 accountId를 포함한 user의 정보
      const users = schedule.filter(user =>
        selectedUser.includes(user.schedule.accountId)
      );

      for (const user of users) {
        if (!accountIds.has(user.schedule.accountId)) {
          uniqueUsers.push(user);
          accountIds.add(user.schedule.accountId);
        }
      }
      console.log(uniqueUsers);
      setUserList(uniqueUsers);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (searchUser.length > 0) {
      const list = schedule.filter(user => user.name.includes(searchUser));
      console.log(list);
      const uniqueUsers = [];
      const accountIds = new Set();
      //체크가 되어있는 유저들의 accountId를 포함한 user의 정보

      for (const user of list) {
        if (!accountIds.has(user.schedule.accountId)) {
          uniqueUsers.push(user);
          accountIds.add(user.schedule.accountId);
        }
      }

      console.log(uniqueUsers);
      setUserList(uniqueUsers);
      // const list = schedule.filter(user => user.name.includes(searchUser));

      // console.log(list);
      // const newArray = [];
      // for (let i = 0; i < list.length; i++) {
      //   const current = list[i];
      //   const nextIndex = (i + 1) % list.length;
      //   const next = list[nextIndex];
      //   if (current.schedule.accountId !== next.schedule.accountId) {
      //     console.log(current);
      //     newArray.push(current);
      //   }
      // }
      // console.log(list);
      // setUserList(newArray);
    }
  }, [searchUser]);

  const handleChecked = e => {
    const accountId = e.target.dataset.id;

    console.log(accountId);
    const index = selectedUser.findIndex(e => e === accountId);
    if (index > -1) {
      const filter = selectedUser.filter(user => user !== accountId);
      console.log(filter);
      setSelectedUser(filter);
    } else {
      setSelectedUser(prev => [...prev, accountId]);
    }
  };

  OutsideClick(ref, () => {
    // setSelected('전체'); // 아무것도 클릭 안했을때..
    setIsModalOpen(false);
  });

  const listener = e => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref]);

  function onClickButton() {
    setIsModalOpen(false);
    console.log(selectedUser);
    setSelected(selectedUser);
  }

  return (
    <>
      <Container />
      <SearchUser ref={ref} setIsModalOpen={setIsModalOpen}>
        <Form onSubmit={onSubmit}>
          <InputBox ref={inputRef} placeholder="User Name" />
          <UserList>
            {userList &&
              userList.map((user, i) => (
                <Li key={user.start + user.end + user.title + i}>
                  <Checkbox
                    type="checkbox"
                    id={user.schedule.accountId}
                    data-id={user.schedule.accountId}
                    onChange={handleChecked}
                    checked={selectedUser.includes(user.schedule.accountId)}
                  />
                  <Label htmlFor={user.schedule.accountId}>
                    <Name> 이름 : {user.name}</Name>
                    <Info>
                      <Department>부서 : {user.department}</Department>
                      <Position>직책 : {user.position}</Position>
                    </Info>
                  </Label>
                </Li>
              ))}
          </UserList>
        </Form>
        <Btn onClick={() => onClickButton()}>확인</Btn>
      </SearchUser>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 101vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 8;
  display: flex;
`;

const SearchUser = styled.div`
  ${props => props.theme.variables.flex('column', 'space-between', 'center')}
  position: absolute;
  top: 150px;
  left: 20%;
  width: 400px;
  height: 500px;
  background-color: ${props => props.theme.style.white};
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  z-index: 10;
  opacity: 1;
  font-size: 20px;
  color: ${props => props.theme.style.text};
`;

const Form = styled.form`
  ${props => props.theme.variables.flex('column', '', 'center')}
  height: 100%;
`;

const InputBox = styled.input`
  width: 330px;
  height: 50px;
  border: 2px solid white;
  background-color: ${props => props.theme.style.mainBg};
  margin: 20px 0 30px 0;
  outline: none;
  border-radius: 10px;
  text-indent: 12px;
  font-size: ${props => props.theme.style.textMedium};
  color: ${props => props.theme.style.text};
  &:focus {
    border-color: ${props => props.theme.style.text};
  }
`;

const UserList = styled.ul`
  padding: 15px;
  width: 330px;
  height: 300px;
  border: 2px solid ${props => props.theme.style.mainBg};
  background-color: ${props => props.theme.style.mainBg};
  border-radius: 10px;
  overflow: scroll;
  margin-bottom: 10px;
`;

const Btn = styled.button`
  position: relative;
  width: 200px;
  height: 40px;
  bottom: 20px;
  background-color: ${props => props.theme.style.mainBg};
  border: none;
  border-radius: 10px;
`;

const Checkbox = styled.input`
  display: none;
  & + Label {
    cursor: pointer;
  }
  & + Label > div {
    vertical-align: middle;
    padding-left: 5px;
  }
  & + Label:before {
    position : absolute;
    left : 5px;
    content: '';
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 2px solid ${props => props.theme.style.text};
    border-radius: 4px;
    vertical-align: middle;
    margin-left :10px;
  }
  &:checked + Label:before{
  width: 17px;
  height: 17px;
  content: '';
  background-color: ${props => props.theme.style.text};
  border-color: ${props => props.theme.style.text};
  background-repeat: no-repeat;
  background-position: 50%;
`;

const Li = styled.li`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  position : relative;
  margin-bottom: 10px;
`;
const Label = styled.label`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width : 280px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${props => props.theme.style.lightGray};
  padding-left 30px;
  }
`;

const Name = styled.div`
  margin-bottom: 5px;
  padding: 5px;
`;
const Info = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;
const Department = styled.div``;
const Position = styled.div`
  margin-left: 12px;
`;
