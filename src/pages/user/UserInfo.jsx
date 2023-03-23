import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styled from 'styled-components';

const randomNums = () => {
  let result = Math.floor(Math.random() * 10 + 1);
  if (result < 10) {
    result = '0' + result;
  }
  return result;
};

export default function UserInfo() {
  const [index, setIndex] = useState(10);
  const [isVisibleA, setIsVisibleA] = useState(false);
  const [isVisibleB, setIsVisibleB] = useState(false);
  const [isVisibleC, setIsVisibleC] = useState(false);

  const changeTypeA = () => {
    setIsVisibleA(prev => !prev);
  };

  const changeTypeB = () => {
    setIsVisibleB(prev => !prev);
  };

  const changeTypeC = () => {
    setIsVisibleC(prev => !prev);
  };

  useEffect(() => {
    setIndex(randomNums());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,

    setValue,
  } = useForm();

  const onValid = data => {
    if (data.newPassword !== data.checkPassword) {
      setError(
        'checkPassword',
        {
          message: '비밀번호가 일치하지 않습니다.',
        },
        { shouldFocus: true }
      );
    }
    setValue('email', '');
    setValue('currentPassword', '');
    setValue('newPassword', '');
    setValue('checkPassword', '');
  };

  return (
    <Container>
      <DashBoard>
        <SideBar />
        <UserInfoContainer>
          <Tab>내 정보 수정</Tab>
          <UserInformation>
            <ProfileImg>
              <Image
                src={`/images/profile/profile_img_${index}.jpg`}
                alt="profile_img"
              />
              <UserName>홍길동</UserName>
              <UserDepartment>(개발팀/팀장)</UserDepartment>
              <BorderLine />
              <Infos>• 남은 연차 : XX일</Infos>
              <Infos>• 오늘은 당직 날이 아닙니다.</Infos>
            </ProfileImg>
            <ProfileContents onSubmit={handleSubmit(onValid)}>
              <Label htmlFor="email">이메일</Label>
              <Align>
                <Input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: '이메일 형식에 맞지 않습니다.',
                    },
                  })}
                  id="email"
                  type="email"
                  placeholder="user2023@fourplanner.com"
                />
                <Btn>수정</Btn>
              </Align>
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
              <Label htmlFor="currentPassword">비밀번호</Label>
              <Align>
                <Input
                  {...register('currentPassword', { required: true })}
                  id="currentPassword"
                  type={isVisibleA ? 'text' : 'password'}
                  placeholder="•••••••••"
                />
                <Btn>수정</Btn>
                <Icon onClick={changeTypeA} isVisible={isVisibleA}>
                  {isVisibleA ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Icon>
              </Align>
              <ErrorMessage>{errors?.currentPassword?.message}</ErrorMessage>
              <Label htmlFor="newPassword">새 비밀번호</Label>
              <Align>
                <Input
                  {...register('newPassword', {
                    required: true,
                    minLength: {
                      value: 8,
                      message: '비밀번호가 너무 짧습니다. (최소 8자 이상)',
                    },
                  })}
                  id="newPassword"
                  type={isVisibleB ? 'text' : 'password'}
                />
                <Icon onClick={changeTypeB} isVisible={isVisibleB}>
                  {isVisibleB ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Icon>
              </Align>
              <ErrorMessage>{errors?.newPassword?.message}</ErrorMessage>
              <Label htmlFor="checkPassword">새 비밀번호 확인</Label>
              <Align>
                <Input
                  {...register('checkPassword', { required: true })}
                  id="checkPassword"
                  type={isVisibleC ? 'text' : 'password'}
                />
                <Icon onClick={changeTypeC} isVisible={isVisibleC}>
                  {isVisibleC ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Icon>
              </Align>
              <ErrorMessage>{errors?.checkPassword?.message}</ErrorMessage>
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

const ProfileContents = styled.form`
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
  color: ${props => props.theme.style.text};
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
    color: ${props => props.theme.style.lightGray};
  }
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

const ErrorMessage = styled.div`
  color: ${props => props.theme.style.warning};
  margin: -10px 0 30px;
`;

const Icon = styled.div`
  color: ${props =>
    props.isVisible ? props.theme.style.text : props.theme.style.lightGray};
  position: absolute;
  top: 30%;
  right: 32%;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${props =>
      props.isVisible ? props.theme.style.lightGray : props.theme.style.text};
  }
`;
