import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function SignUp() {
  // url 이동
  const navigate = useNavigate();
  // pw 보이기
  const [isVisiblePw, setIsVisiblePw] = useState(false);
  // pwCheck 보이기
  const [isVisiblePwCheck, setIsVisiblePwCheck] = useState(false);

  // ******
  // 회원가입 완료 여부
  const [isSuccess, setIsSuccess] = useState(false);

  // 입력값 : react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
  } = useForm();

  // onValid : 검사
  const onValid = data => {
    if (data.pw !== data.pwCheck) {
      setError('pwCheck');
      setValue('pwCheck', '');
    } else {
      clearErrors('pwCheck');
      onSubmit(data);
    }
  };

  // ******
  // onSubmit : 등록 => API연결
  const onSubmit = data => {
    console.log('signUp onSubmit', data);
  };

  return (
    <SignUpBackground style={{ backgroundImage: 'url(./images/bg3.jpg' }}>
      <SignUpSection>
        <SimpleLogo src="/images/logo_simple.svg" alt="log_simple" />
        <InfoPhrase>
          When you complete your sign up process,
          <br />
          You can use our service !
        </InfoPhrase>
        <Form onSubmit={handleSubmit(onValid)}>
          {/* userName */}
          <SignUpInput
            type="text"
            name="name"
            placeholder="Please enter your Name"
            {...register('name', {
              required: true,
            })}
          />
          {errors.name && <WarningPhrase>필수 입력 항목입니다.</WarningPhrase>}
          {/* id */}
          <SignUpInput
            type="text"
            name="id"
            placeholder="Please enter your ID"
            {...register('id', {
              required: true,
              minLength: {
                value: 2,
              },
              maxLength: {
                value: 10,
              },
            })}
          />
          {errors.id && (
            <WarningPhrase>
              ID는 2자 이상, 10자 이하로 입력해주세요.
            </WarningPhrase>
          )}
          {/* email */}
          <SignUpInput
            type="text"
            name="email"
            placeholder="Please enter your E-mail"
            {...register('email', {
              required: true,
              pattern: {
                // 이메일 형식
                value:
                  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,3})(\]?)$/,
              },
            })}
          />
          {errors.email && (
            <WarningPhrase>이메일 형식에 맞지 않습니다.</WarningPhrase>
          )}
          {/* password */}
          <Div>
            <SignUpInput
              type={isVisiblePw ? 'text' : 'password'}
              name="pw"
              placeholder="Please enter your Password"
              {...register('pw', {
                required: true,
                minLength: {
                  value: 8,
                },
                maxLength: {
                  value: 15,
                },
              })}
            />
            <Icon onClick={() => setIsVisiblePw(!isVisiblePw)}>
              {isVisiblePw ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Icon>
          </Div>
          {errors.pw && (
            <WarningPhrase>
              비밀번호는 8자 이상, 15자 이하로 입력해주세요.
            </WarningPhrase>
          )}
          {/* check password */}
          <Div>
            <SignUpInput
              type={isVisiblePwCheck ? 'text' : 'password'}
              name="pwCheck"
              placeholder="Please check your Password"
              {...register('pwCheck', {
                required: true,
              })}
            />
            <Icon onClick={() => setIsVisiblePwCheck(!isVisiblePwCheck)}>
              {isVisiblePwCheck ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Icon>
          </Div>
          {errors.pwCheck && (
            <WarningPhrase>비밀번호가 일치하지 않습니다.</WarningPhrase>
          )}
          <SignUpBtn type="submit">Sign Up</SignUpBtn>
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
  position: absolute;
  top: 0;
  left: 0;
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
  outline: none;
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
