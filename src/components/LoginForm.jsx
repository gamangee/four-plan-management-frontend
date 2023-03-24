import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  // url 이동
  const navigate = useNavigate();
  // pw 보이기
  const [isVisiblePw, setIsVisiblePw] = useState(false);

  // ******
  // 로그인 성공여부
  const [isSuccess, setIsSuccess] = useState(true);

  // 입력값 : react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();

  // onValid : 검사
  const onValid = data => {
    onSubmit(data);
  };

  // *****
  // onSubmit : 등록 => API연결
  const onSubmit = data => {
    console.log('loginForm onSubmit', data);
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      {/* id */}
      <LoginInput
        type="text"
        id="id"
        placeholder="Please enter your ID"
        {...register('id', {
          required: true,
          minLength: 1,
        })}
      />
      {errors.id && <WarningPhrase>아이디를 입력해주세요.</WarningPhrase>}
      {/* pw */}
      <Div>
        <LoginInput
          type={isVisiblePw ? 'text' : 'password'}
          id="pw"
          placeholder="Please enter your Password"
          {...register('pw', {
            required: true,
          })}
        />
        <Icon onClick={() => setIsVisiblePw(!isVisiblePw)}>
          {isVisiblePw ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Icon>
      </Div>
      {errors.pw && <WarningPhrase>비밀번호를 입력해주세요.</WarningPhrase>}
      {/* 로그인 안내 문구 */}
      {!isSuccess && (
        <WarningPhrase>아이디 또는 비밀번호가 일치하지 않습니다.</WarningPhrase>
      )}
      {/* signin btn */}
      <SignInBtn>Sign In</SignInBtn>
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
