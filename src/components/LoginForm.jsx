import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { setCookie } from '../cookie';

export default function LoginForm() {
  // url 이동
  const navigate = useNavigate();
  // pw 보이기
  const [isVisiblePw, setIsVisiblePw] = useState(false);
  // 로그인 입력한 user data
  const [userLogin, setUserLogin] = useState(false);
  // 로그인 성공여부
  const [isSuccess, setIsSuccess] = useState(false);

  // 입력값 : react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // onValid : 검사
  const onValid = data => {
    onSubmit(data);
  };

  // onSubmit : 등록
  const onSubmit = data => {
    setUserLogin(data);
  };

  // *****
  // API연결
  // userLogin : {accountId, password} => API => status & setCookie("accessToken", accessToken)

  // useEffect(() => {
  //   axios({
  //     url: '',
  //     method: 'POST',
  //     headers: { Authorization: 'Bearer [JWT token]' },
  //     data: userLogin,
  //     withCredentials: true,
  //   })
  //     .then(res => {
  //       const accessToken = res.data.access;
  //       setCookie('accessToken', accessToken);
  //       navigate('/main');
  //     })
  //     .catch(e => alert(e.message));
  // }, [userLogin]);

  useEffect(() => {
    // 로그인 유저 정보가 있을 때 요청 전송
    userLogin &&
      axios('http://localhost:3000/user/userToken.json')
        .then(res => {
          // 토큰 저장
          setCookie('accessToken', res.data.accessToken);
          setIsSuccess(true);
          navigate('/main', { state: userLogin.id });
        })
        .catch(e => setIsSuccess(false));
  }, [userLogin]);

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      {/* id */}
      <LoginInput
        type="text"
        id="id"
        placeholder="Please enter your ID"
        {...register('id', {
          required: '아이디를 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: '아이디 입력이 잘못되었습니다.',
          },
        })}
      />
      {errors.id && <WarningPhrase>{errors.id.message}</WarningPhrase>}
      {/* pw */}
      <Div>
        <LoginInput
          type={isVisiblePw ? 'text' : 'password'}
          id="pw"
          placeholder="Please enter your Password"
          {...register('pw', {
            required: '비밀번호를 입력해주세요.',
          })}
        />
        <Icon onClick={() => setIsVisiblePw(!isVisiblePw)}>
          {isVisiblePw ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Icon>
      </Div>
      {errors.pw && <WarningPhrase>{errors.pw.message}</WarningPhrase>}
      {/* 로그인 안내 문구 */}
      {isSuccess && (
        <WarningPhrase>아이디 또는 비밀번호가 일치하지 않습니다.</WarningPhrase>
      )}
      {/* signin btn */}
      <SignInBtn disabled={isSubmitting}>Sign In</SignInBtn>
    </Form>
  );
}

export const Form = styled.form`
  width: 100%;
  margin: 20px 0 0;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

export const LoginInput = styled.input`
  width: 80%;
  height: 50px;
  padding: 10px;
  margin-bottom: 20px;
  color: ${props => props.theme.style.text};
  fontsize: ${props => props.theme.style.textMedium};
  border: 0;
  border-radius: ${props => props.theme.style.BtnborderRadius};
  outline: none;
  &:focus {
    color: ${props => props.theme.style.text};
  }
`;

export const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  ${props => props.theme.variables.flex('column', '', 'center')};
  position: relative;
`;

export const Icon = styled.div`
  color: ${props => props.theme.style.lightGray};
  position: absolute;
  cursor: pointer;
  top: 25%;
  right: 15%;
  transition: 0.4s ease;
  &:hover {
    color: ${props => props.theme.style.text};
  }
`;

export const WarningPhrase = styled.p`
  color: ${props => props.theme.style.warning};
  margin-bottom: 20px;
  font-size: 12px;
`;

export const SignInBtn = styled.button`
  width: 80%;
  height: 50px;
  padding: 5px;
  margin-bottom: 20px;
  fontsize: ${props => props.theme.style.textMedium};
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.blue};
  border: 0;
  border-radius: ${props => props.theme.style.BtnborderRadius};
  transition: 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.style.text};
  }
`;
