import React from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import styled from 'styled-components';

export default function UserInfo() {
  return (
    <Container>
      <DashBoard>
        <SideBar />
        <UserInfoContainer>
          <Tab>내 정보 수정</Tab>
          <UserInformation>
            <ProfileImg>
              <Image
                src="/images/profile/profile_img_02.jpg"
                alt="profile_img"
              />
              <UserName>홍길동</UserName>
              <UserDepartment>(개발팀/팀장)</UserDepartment>
              <BorderLine />
              <Infos>• 남은 연차 : XX일</Infos>
              <Infos>• 오늘은 당직 날이 아닙니다.</Infos>
            </ProfileImg>
            <ProfileContents>
              <Label htmlFor="email">이메일</Label>
              <Align>
                <Input
                  id="email"
                  type="email"
                  placeholder="user2023@fourplanner.com"
                />
                <Btn>수정</Btn>
              </Align>
              <Label htmlFor="currentPassword">비밀번호</Label>
              <Align>
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder="•••••••••"
                />
                <Btn>수정</Btn>
                <Icon>
                  <AiFillEyeInvisible />
                </Icon>
              </Align>
              <Label htmlFor="newPassword">새 비밀번호</Label>
              <Align>
                <Input id="newPassword" type="password" />
                <Icon>
                  <AiFillEyeInvisible />
                </Icon>
              </Align>
              <Label htmlFor="checkPassword">새 비밀번호 확인</Label>
              <Align>
                <Input id="checkPassword" type="password" />
                <Icon>
                  <AiFillEyeInvisible />
                </Icon>
              </Align>
            </ProfileContents>
          </UserInformation>
        </UserInfoContainer>
      </DashBoard>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.mainBg};
  padding: 50px 0;
`;

const DashBoard = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
  background-color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  margin: 0 auto;
  padding: 20px;
`;

const SideBar = styled.div`
  background-color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  border: 8px solid ${props => props.theme.style.skyblue};
  min-width: 250px;
  height: 80vh;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100%;
  padding: 60px;
`;

const Tab = styled.div`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 200px;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 70px;
`;

const UserInformation = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
`;

const ProfileImg = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  padding: 60px 20px;
  white-space: nowrap;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const UserName = styled.div`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textlg};
  font-weight: 600;
`;

const UserDepartment = styled.div`
  color: ${props => props.theme.style.lightGray};
  font-size: ${props => props.theme.style.textxs};
  margin-top: 10px;
  margin-bottom: 20px;
`;

const BorderLine = styled.div`
  background-color: ${props => props.theme.style.text};
  width: 100%;
  height: 2px;
  margin: 10px 0;
`;

const Infos = styled.div`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textlg};
  margin: 10px 0;
  font-weight: 600;
`;

const ProfileContents = styled.div`
  ${props => props.theme.variables.flex('column', 'center', '')};
  width: 100%;
  min-width: 300px;
  padding-left: 30px;
`;

const Label = styled.label`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  font-weight: 600;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: 2px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  outline: none;
  padding: 10px 20px;
  margin-right: 16px;
  transition: all 0.4s ease;

  &:focus {
    border: 2px solid ${props => props.theme.style.text};
  }

  &:placeholder {
  }
  color: ${props => props.theme.style.lightGray};
`;

const Btn = styled.button`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  outline: none;
  border: none;
  padding: 10px 20px;
  white-space: nowrap;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${props => props.theme.style.text};
    color: ${props => props.theme.style.white};
  }
`;

const Align = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
  position: relative;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  color: ${props => props.theme.style.lightGray};
  position: absolute;
  top: 30%;
  right: 32%;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${props => props.theme.style.black};
  }
`;
