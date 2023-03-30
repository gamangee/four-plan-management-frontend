import React from 'react';
import styled from 'styled-components';
import { FiUser, FiCalendar } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';

export default function UserMyPage({ selectItem, select }) {
  return (
    <MyPage>
      <div>My Page</div>
      <HighLight
        className={
          select === 'userinfo'
            ? 'active'
            : select === 'userannaul'
            ? 'active'
            : ''
        }
      />
      <MyPageItems onClick={selectItem}>
        <Item data-id="userinfo">
          <FiUser />
          <ItemText>내 정보 수정</ItemText>
        </Item>
        <Item data-id="userannaul">
          <FiCalendar />
          <ItemText>연차 관리</ItemText>
        </Item>
        <LogOut data-id="">
          <MdLogout />
          <ItemText>로그 아웃</ItemText>
        </LogOut>
      </MyPageItems>
    </MyPage>
  );
}

const MyPage = styled.div`
  position: relative;
  width: 230px;
  height: 33px;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  line-height: 36px;
`;

const MyPageItems = styled.ul`
  display: absolute;
  text-align: left;
  margin: 10px 0 0 30px;
`;

const Item = styled.li`
  ${props => props.theme.variables.flex('row', 'c', 'center')}
  cursor: pointer;
`;

const ItemText = styled.div`
  position: relative;
  top: 2px;
  margin-left: 10px;
`;

const LogOut = styled.li`
  ${props => props.theme.variables.flex('row', '', 'center')}
  position : absolute;
  bottom: -380px;
  cursor: pointer;
`;

const HighLight = styled.div`
  position: absolute;
  top: 7px;
  right: 40px;
  width: 19px;
  height: 19px;
  background-color: ${props =>
    props.className === 'active' ? '#81d923' : props.theme.style.skyblue};
  border-radius: 50%;
`;
