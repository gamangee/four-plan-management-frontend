import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';

export default function AdminLogin() {
  return (
    <LoginBackground style={{ backgroundImage: 'url(./images/bg3.jpg' }}>
      {/* 로그인 section */}
      <LoginSection>
        {/* logo Image */}
        <SimpleLogo src="/images/logo_simple.svg" alt="log_simple" />
        {/* 안내문구 */}
        <InfoPhrase>This is Admin Login Page !</InfoPhrase>
        {/* 로그인 form */}
        <LoginForm />
      </LoginSection>
    </LoginBackground>
  );
}

export const LoginBackground = styled.div`
  // 전체 화면 채우기
  width: 100vw;
  height: 100vh;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const LoginSection = styled.section`
  width: 500px;
  padding: 60px 10px;
  margin: 0 auto;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  boxsizing: border-box;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

export const SimpleLogo = styled.img`
  width: 60px;
  margin: 15px;
`;

export const InfoPhrase = styled.p`
  color: ${props => props.theme.style.text};
  font-weight: 700;
`;
