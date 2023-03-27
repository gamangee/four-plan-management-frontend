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
  const [formData, setFormData] = useState({});

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
    setFormData(data);
  };
  return (
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
  );
}

const UserInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  height: inherit;
  min-width: 600px;
  padding: 50px;
  position: relative;
`;

const Tab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 230px;
  height: 40px;
  font-weight: 700;
  position: absolute;
  top: 50px;
  left: 50px;
`;

const UserInformation = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  width: 100%;
`;

const ProfileImg = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  padding: 60px 30px;
  width: 320px;
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
  ${props => props.theme.variables.flex('column', 'space-between', '')};
  width: 100%;
  padding: 0 50px;
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
  width: 450px;
  margin-right: 20px;
  padding: 10px 20px;
  transition: all 0.4s ease;

  &:focus {
    border: 2px solid ${props => props.theme.style.text};
  }

  &::placeholder {
    color: ${props => props.theme.style.lightGray};
    letter-spacing: 1px;
  }
`;

const Btn = styled.button`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  outline: none;
  border: none;
  width: 80px;
  height: 40px;
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
  top: 13px;
  left: 410px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: ${props =>
      props.isVisible ? props.theme.style.lightGray : props.theme.style.text};
  }
`;
