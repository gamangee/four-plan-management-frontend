import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function SignUp() {
  // 입력값
  const [state, setState] = useState({
    name: '',
    id: '',
    email: '',
    pw: '',
    pwCheck: '',
  });
  // 비밀번호 일치 여부
  const [isEqual, setIsEqual] = useState(false);
  // 회원가입 완료 여부
  const [isSuccess, setIsSuccess] = useState(false);
  // url 이동
  const navigate = useNavigate();

  return (
    <SignUpBackground style={{ backgroundImage: 'url(./images/bg3.jpg' }}>
      <SignUpSection>
        <SimpleLogo src="/images/logo_simple.svg" alt="log_simple" />
        <InfoPhrase>
          When you complete your sign up process,
          <br />
          You can use our service !
        </InfoPhrase>
        <Form>
          {/* userName */}
          <SignUpInput
            type="text"
            placeholder="Please enter your Name"
          ></SignUpInput>
          {/* id */}
          <SignUpInput
            type="text"
            placeholder="Please enter your ID"
          ></SignUpInput>
          {/* email */}
          <SignUpInput
            type="text"
            placeholder="Please enter your E-mail"
          ></SignUpInput>
          {/* password */}
          <SignUpInput
            type="password"
            placeholder="Please enter your Password"
          ></SignUpInput>
          {/* check password */}
          <SignUpInput
            type="password"
            placeholder="Please check your Password"
          ></SignUpInput>
          {isEqual && (
            <WarningPhrase>비밀번호가 일치하지 않습니다.</WarningPhrase>
          )}
          <SignUpBtn>Sign Up</SignUpBtn>
        </Form>
      </SignUpSection>
    </SignUpBackground>
  );
}

export const SignUpBackground = styled.div`
  // 전체 화면 채우기
  min-width: 100%;
  min-height: 100vh;
  padding: 10vh;
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SignUpSection = styled.section`
  width: 500px;
  padding: 30px 10px;
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
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  margin: 20px 0 0;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

export const SignUpInput = styled.input`
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
