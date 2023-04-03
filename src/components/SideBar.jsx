import React, { useEffect, useState } from 'react';
import TodayDuty from '../pages/TodayDuty';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useService } from '../context/context';
import AdminPage from './AdminPage';
import UserMyPage from './UserMyPage';

export default function SideBar() {
  // 프로필 사진
  const { setIndex, index } = useService();

  const randomNums = () => {
    let result = Math.floor(Math.random() * 10 + 1);
    if (result < 10) {
      result = '0' + result;
    }
    return result;
  };

  useEffect(() => {
    setIndex(randomNums());
  }, []);

  const navigate = useNavigate();

  const [select, setSelect] = useState('main');

  const { user } = useService();

  function selectItem(e) {
    const data = e.target.parentNode.dataset.id;
    setSelect(data);
    if (data !== '') {
      navigate(`/${user.role === 'ROLE_ADMIN' ? 'admin/' : ''}${data}`);
    } else {
      navigate(`/${user.role === 'ROLE_ADMIN' ? 'admin' : ''}`);
    }
  }

  const location = useLocation();

  return (
    <Container>
      {location.pathname !== ('/' || '/admin' || '/signup') && (
        <>
          <TodayDuty />
          <LogoImg
            src="/images/logo_origin.svg"
            alt="logo"
            onClick={() =>
              user.role === 'ROLE_USER'
                ? navigate('/main')
                : navigate('/admin/main')
            }
          />
          <UserInfo>
            <Content>
              {user.role === 'ROLE_ADMIN' ? (
                <UserProfile src="/images/profile/admin_profile.jpg" />
              ) : (
                <UserProfile src={`/images/profile/profile_img_${index}.jpg`} />
              )}
              <UserInfoContainer>
                <UserName>{user.name}</UserName>
                <Department>
                  ({user.department}/ {user.position})
                </Department>
              </UserInfoContainer>
            </Content>
            <RestYear>남은 연차 : {user.yearly}일</RestYear>
          </UserInfo>
          <Title>
            <div>Calendar</div>
            <HighLight className={select === 'main' ? 'active' : ''} />
            <PageItems onClick={selectItem}>
              <Item data-id="main">
                <AiOutlineCalendar />
                <ItemText>Calendar</ItemText>
              </Item>
            </PageItems>
          </Title>
          {user.role === 'ROLE_USER' ? (
            <UserMyPage selectItem={selectItem} select={select} />
          ) : (
            <AdminPage selectItem={selectItem} select={select} />
          )}
        </>
      )}
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
  margin-left: 0;
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

const PageItems = styled.ul`
  width: 90px;
  display: absolute;
  text-align: left;
  margin: 10px 0 0 30px;
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

const Title = styled.div`
  position: relative;
  width: 230px;
  height: 33px;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  margin: 33px 0 63px 0;
  line-height: 36px;
  }
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

const Item = styled.li`
  ${props => props.theme.variables.flex('row', '', 'center')}
  cursor: pointer;
`;

const ItemText = styled.div`
  position: relative;
  top: 2px;
  margin-left: 10px;
`;
