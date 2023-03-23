import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginForm() {
  // 로그인 성공여부
  const [isSuccess, setIsSuccess] = useState(false);
  // 유저정보
  const [userInfo, setUserInfo] = useState();
  // url 이동
  const navigate = useNavigate();

  return (
    <Form>
      <LoginInput type="text" placeholder="Please enter your ID" />
      <LoginInput type="password" placeholder="Please enter your Password" />
      {/* 로그인 안내 문구 */}
      {isSuccess && (
        <WarningPhrase>아이디 또는 비밀번호가 일치하지 않습니다.</WarningPhrase>
      )}
      {/* signin btn */}
      <SignInBtn
        type="submit"
        onClick={() => {
          !isSuccess && navigate('/main', { state: { userInfo } });
        }}
      >
        Sign In
      </SignInBtn>
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
`;
