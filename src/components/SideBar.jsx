import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser, FiCalendar } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { useService } from '../context/context';

export default function SideBar() {
  const navigate = useNavigate();

  const { user } = useService();
  console.log(user);

  return (
    <Container>
      <LogoImg
        src="/images/logo_origin.svg"
        alt="logo"
        onClick={() => navigate('/main')}
      />
      <UserInfo>
        <Content>
          <UserProfile src="/images/profile/profile_img_06.jpg" />
          <UserInfoContainer>
            <UserName>홍길동</UserName>
            <Department>(개발팀 / 팀장)</Department>
          </UserInfoContainer>
        </Content>
        <RestYear>남은 연차 : XX일</RestYear>
      </UserInfo>
      <Calendar>
        <div>Calendar</div>
        <HighLight />
      </Calendar>
      <MyPage>
        <div>My Page</div>
        <MyPageItems>
          <Item onClick={() => navigate('/userinfo')}>
            <FiUser />
            <ItemText>내 정보 수정</ItemText>
          </Item>
          <Item onClick={() => navigate('/userannaul')}>
            <FiCalendar />
            <ItemText>연차 관리</ItemText>
          </Item>
          <LogOut onClick={() => navigate('/')}>
            <MdLogout />
            <ItemText>로그 아웃</ItemText>
          </LogOut>
        </MyPageItems>
      </MyPage>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 280px;
  height: 840px;
  text-align: center;
  background-color: white;
  color: ${props => props.theme.style.text};
  font-weight: 700;
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  margin: 20px;
`;

const LogoImg = styled.img`
  width: 190px;
  height: 76px;
  margin: 20px 0 23px 0;
  cursor: pointer;
`;

const UserInfo = styled.div`
  width: 230px;
  height: 150px;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
`;

const Content = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  margin: auto;
  width: 174px;
  height: 113px;
`;

const UserProfile = styled.img`
  display: inline-block;
  background-color: white;
  width: 79px;
  height: 79px;
  border: 2px solid ${props => props.theme.style.text};
  border-radius: 50%;
`;

const UserInfoContainer = styled.div`
  margin-left: 8px;
`;

const UserName = styled.div`
  margin-bottom: 6px;
  font-size: 18px;
`;

const Department = styled.div`
  font-size: 14px;
`;

const RestYear = styled.div`
  font-size: 18px;
`;

const Calendar = styled.div`
  position: relative;
  width: 230px;
  height: 33px;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  margin: 33px 0 33px 0;
  line-height: 36px;
`;

const HighLight = styled.div`
  position: absolute;
  top: 7px;
  right: 60px;
  width: 19px;
  height: 19px;
  background-color: #81d923;
  border-radius: 50%;
  margin-left: 5px;
`;

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
  bottom: -410px;
  cursor: pointer;
`;
