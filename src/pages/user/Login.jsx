import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  // url 이동
  const navigate = useNavigate();

  return (
    <LoginBackground style={{ backgroundImage: 'url(./images/bg3.jpg' }}>
      {/* 로그인 section */}
      <LoginSection>
        {/* logo Image */}
        <SimpleLogo src="/images/logo_simple.svg" alt="log_simple" />
        {/* 안내문구 */}
        <InfoPhrase> Welcome to Four-plan management !</InfoPhrase>
        {/* 로그인 form */}
        <LoginForm />
        {/* SignUp Btn => signUp Page 이동 */}
        <SignUpBtn onClick={() => navigate('/signup')}>Sign Up</SignUpBtn>
      </LoginSection>
    </LoginBackground>
  );
}

export const LoginBackground = styled.div`
  // 전체 화면 채우기
  min-width: 100%;
  min-height: 100vh;
  padding: 15vh;
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginSection = styled.section`
  width: 500px;
  height: 500px;
  padding: 30px 10px;
  margin: 0 auto;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  boxsizing: border-box;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

export const SimpleLogo = styled.img`
  width: 60px;
  margin: 20px;
`;

export const InfoPhrase = styled.p`
  color: ${props => props.theme.style.text};
  font-weight: 700;
`;

export const SignUpBtn = styled.button`
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
