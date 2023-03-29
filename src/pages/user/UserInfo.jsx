import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styled from 'styled-components';
import { useService } from '../../context/context';
import UserModal from '../../components/UserModal';

// 1. 프로필 사진 -> context에서 관리하기
// 2. 통신 성공/실패 여부 -> UserModal 사용하기
// 3. input type password/text 리팩토링

const randomNums = () => {
  let result = Math.floor(Math.random() * 10 + 1);
  if (result < 10) {
    result = '0' + result;
  }
  return result;
};

export default function UserInfo() {
  const { user, service } = useService();

  const [index, setIndex] = useState(10);

  const [isVisible, setIsVisible] = useState({ A: false, B: false, C: false });

  const changeTypeA = () => {
    const newObj = { ...isVisible, A: !isVisible.A };
    setIsVisible(newObj);
  };

  const changeTypeB = () => {
    const newObj = { ...isVisible, B: !isVisible.B };
    setIsVisible(newObj);
  };

  const changeTypeC = () => {
    const newObj = { ...isVisible, C: !isVisible.C };
    setIsVisible(newObj);
  };

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIndex(randomNums());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setError,
    reset,
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
    reset();
    onSubmit(data);
  };

  const onSubmit = data => {
    service.updateUserInfo({
      accountId: user.accountId,
      email: data.email,
      password: data.currentPassword,
      newPassword: data.newPassword,
    });
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
          </Align>
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          <Label htmlFor="currentPassword">비밀번호</Label>
          <Align>
            <Input
              {...register('currentPassword', { required: true })}
              id="currentPassword"
              type={isVisible.A ? 'text' : 'password'}
              placeholder="•••••••••"
            />
            <Icon onClick={changeTypeA} isVisible={isVisible.A}>
              {isVisible.A ? <AiFillEye /> : <AiFillEyeInvisible />}
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
              type={isVisible.B ? 'text' : 'password'}
            />
            <Icon onClick={changeTypeB} isVisible={isVisible.B}>
              {isVisible.B ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Icon>
          </Align>
          <ErrorMessage>{errors?.newPassword?.message}</ErrorMessage>
          <Label htmlFor="checkPassword">새 비밀번호 확인</Label>
          <Align>
            <Input
              {...register('checkPassword', { required: true })}
              id="checkPassword"
              type={isVisible.C ? 'text' : 'password'}
            />
            <Icon onClick={changeTypeC} isVisible={isVisible.C}>
              {isVisible.C ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Icon>
          </Align>
          <ErrorMessage>{errors?.checkPassword?.message}</ErrorMessage>
          <Btn>수정하기</Btn>
        </ProfileContents>
      </UserInformation>
      {/* {isSubmitSuccessful && (
        <UserModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          status="성공"
        />
      )} */}
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  width: 1050px;
  height: 100%;
  margin-left: 25px;
  position: relative;
`;

const Tab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 200px;
  height: 40px;
  font-weight: 700;
  position: fixed;
  top: 50px;
  left: 380px;
`;

const UserInformation = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
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
  margin-bottom: 10px;
`;

const Input = styled.input`
  color: ${props => props.theme.style.text};
  border: 2px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  outline: none;
  width: 450px;
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
  width: 200px;
  height: 60px;
  white-space: nowrap;
  transition: all 0.4s ease;
  margin-left: auto;

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
