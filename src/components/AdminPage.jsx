import React from 'react';
import styled from 'styled-components';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { FiLogOut } from '@react-icons/all-files/fi/FiLogOut';

export default function UserMyPage({ selectItem, select }) {
  return (
    <Title>
      <div>Management</div>
      <HighLight className={select === 'management' ? 'active' : ''} />
      <AdminPageItems onClick={selectItem}>
        <Item data-id="management">
          <FiUser />
          <ItemText>Management</ItemText>
        </Item>
        <LogOut data-id="">
          <FiLogOut />
          <ItemText>LOGOUT</ItemText>
        </LogOut>
      </AdminPageItems>
    </Title>
  );
}

const Title = styled.div`
  position: relative;
  width: 230px;
  height: 33px;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  line-height: 36px;
`;

const AdminPageItems = styled.ul`
  display: absolute;
  text-align: left;
  margin: 10px 0 0 30px;
`;

const Item = styled.li`
  ${props => props.theme.variables.flex('row', '', 'center')}
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
