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
  // 회원가입 한 user data
  const [userSignup, setUserSignup] = useState();
  // 회원가입 완료 여부
  const [isSuccess, setIsSuccess] = useState(false);

  // 입력값 : react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    setValue,
  } = useForm();

  // onValid : 검사
  const onValid = data => {
    if (data.pw !== data.pwCheck) {
      setError('pwCheck', {
        message: '비밀번호가 일치하지 않습니다.',
      });
      setValue('pwCheck', '');
    } else {
      clearErrors('pwCheck');
      onSubmit(data);
    }
  };

  // ******
  // onSubmit : 등록
  const onSubmit = data => {
    // console.log('signUp onSubmit', data);
    setUserSignup(data);
  };

  // API 연결하기
  // userSignup 데이터 => API 전송 {accountId, password, name, email}
  //      => statuscode 200 && status success => setIsSuccess(true)

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
              required: '필수 입력 항목입니다.',
              pattern: {
                value: /^[a-zA-Z가-힣]+$/,
                message: '이름을 정확히 입력해주세요.',
              },
            })}
          />
          {errors.name && <WarningPhrase>{errors.name.message}</WarningPhrase>}
          {/* id */}
          <SignUpInput
            type="text"
            name="id"
            placeholder="Please enter your ID"
            {...register('id', {
              required: '필수 입력 항목입니다.',
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: '아이디는 영문 혹은 숫자의 조합으로 입력해주세요.',
              },
              minLength: {
                value: 2,
                message: '아이디는 2자 이상, 10자 이하로 입력해주세요.',
              },
              maxLength: {
                value: 10,
                message: '아이디는 2자 이상, 10자 이하로 입력해주세요.',
              },
            })}
          />
          {errors.id && <WarningPhrase>{errors.id.message}</WarningPhrase>}
          {/* email */}
          <SignUpInput
            type="text"
            name="email"
            placeholder="Please enter your E-mail"
            {...register('email', {
              required: '필수 입력 항목입니다.',
              pattern: {
                value:
                  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,3})(\]?)$/,
                message: '이메일 형식이 맞지 않습니다.',
              },
            })}
          />
          {errors.email && (
            <WarningPhrase>{errors.email.message}</WarningPhrase>
          )}
          {/* password */}
          <Div>
            <SignUpInput
              type={isVisiblePw ? 'text' : 'password'}
              name="pw"
              placeholder="Please enter your Password"
              {...register('pw', {
                required: '필수 입력 항목입니다.',
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상, 15자 이하로 입력해주세요.',
                },
                maxLength: {
                  value: 15,
                  message: '비밀번호는 8자 이상, 15자 이하로 입력해주세요.',
                },
              })}
            />
            <Icon onClick={() => setIsVisiblePw(!isVisiblePw)}>
              {isVisiblePw ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Icon>
          </Div>
          {errors.pw && <WarningPhrase>{errors.pw.message}</WarningPhrase>}
          {/* check password */}
          <Div>
            <SignUpInput
              type={isVisiblePwCheck ? 'text' : 'password'}
              name="pwCheck"
              placeholder="Please check your Password"
              {...register('pwCheck', {
                required: '필수 입력 항목입니다.',
              })}
            />
            <Icon onClick={() => setIsVisiblePwCheck(!isVisiblePwCheck)}>
              {isVisiblePwCheck ? <AiFillEye /> : <AiFillEyeInvisible />}
            </Icon>
          </Div>
          {errors.pwCheck && (
            <WarningPhrase>{errors.pwCheck.message}</WarningPhrase>
          )}
          <SignUpBtn disabled={isSubmitting}>Sign Up</SignUpBtn>
        </Form>
      </SignUpSection>
    </SignUpBackground>
  );
}

export const SignUpBackground = styled.div`
  // 전체 화면 채우기
  min-width: 100%;
  min-height: 100vh;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
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
  &:hover {
    color: ${props => props.theme.style.text};
  }
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
  transition: 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.style.text};
  }
`;
