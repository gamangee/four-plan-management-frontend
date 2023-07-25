import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';
import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
import { setCookie } from '../../cookie';
import { useService } from '../../context/context';

export default function SignUp() {
  // context
  const { service } = useService();
  // url 이동
  const navigate = useNavigate();
  // pw 보이기
  const [isVisiblePw, setIsVisiblePw] = useState(false);
  // pwCheck 보이기
  const [isVisiblePwCheck, setIsVisiblePwCheck] = useState(false);
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
    if (data.password !== data.pwCheck) {
      setError('pwCheck', {
        message: '비밀번호가 일치하지 않습니다.',
      });
      setValue('pwCheck', '');
    } else {
      clearErrors('pwCheck');
      onSubmit(data);
    }
  };

  // onSubmit : 등록
  const onSubmit = data => {
    // data : 회원가입 한 user data
    service
      .signup({
        accountId: data.accountId,
        password: data.password,
        name: data.name,
        email: data.email,
      })
      .then(res => {
        if (res.status === 200) {
          const accessToken = res.data.accessToken;
          setCookie('accessToken', accessToken);
          setIsSuccess(true);
        }
      })
      .catch(e => {
        const message = e.response.data;
        if (message === 'existId' || message === 'duplicateId') {
          setError('accountId', {
            message: '이미 존재하는 아이디 입니다.',
          });
        } else if (message === 'checkEmail' || message === 'checkName') {
          setError('email', {
            message: '일치하는 사용자 정보가 없습니다. 인사과에 문의하세요.',
          });
        } else {
          setError('pwCheck', {
            message: '내용 확인 후, 다시 작성 부탁드립니다.',
          });
        }
      });
  };

  return (
    <Wrapper style={{ backgroundImage: 'url(./images/bg3.jpg)' }}>
      <SignUpContainer>
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
            name="accountId"
            placeholder="Please enter your ID"
            {...register('accountId', {
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
          {errors.accountId && (
            <WarningPhrase>{errors.accountId.message}</WarningPhrase>
          )}
          {/* email */}
          <SignUpInput
            type="email"
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
              name="password"
              placeholder="Please enter your Password"
              {...register('password', {
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
          {errors.password && (
            <WarningPhrase>{errors.password.message}</WarningPhrase>
          )}
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
      </SignUpContainer>
      {isSuccess && (
        <ModalContainer>
          <Modal>
            가입완료
            <AcceptBtn onClick={() => navigate('/')}>확인</AcceptBtn>
          </Modal>
        </ModalContainer>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
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

const SignUpContainer = styled.section`
  width: 500px;
  padding: 30px 10px;
  margin: 0 auto;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  boxsizing: border-box;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

const SimpleLogo = styled.img`
  width: 60px;
  margin: 15px;
`;

const InfoPhrase = styled.p`
  color: ${props => props.theme.style.text};
  font-weight: 700;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  margin: 20px 0 0;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

const SignUpInput = styled.input`
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

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  z-index: 9;
`;

export const Modal = styled.div`
  width: 300px;
  height: 150px;
  ${props => props.theme.variables.flex('column', '', 'center')};
  text-align: center;
  line-height: 100px;
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  font-weight: 600;
  background-color: ${props => props.theme.style.white};
  border: 8px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const AcceptBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: ${props => props.theme.style.BtnborderRadius};
  background-color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textsm};
  color: ${props => props.theme.style.white};
  border: 0;
  position: absolute;
  bottom: 15px;

  &:hover {
    background-color: ${props => props.theme.style.blue};
  }
`;
