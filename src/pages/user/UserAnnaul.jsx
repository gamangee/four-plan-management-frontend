import React, { useState } from 'react';
import styled from 'styled-components';
import UserBtn from '../../components/UserBtn';
import UserRegister from '../../components/UserRegister';

const BTN_SIZE_S = { width: '80px', height: '50px' };

export default function UserAnnaul() {
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isModifyOpen, setIsModifyOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  if (
    (isRegisterOpen && isModifyOpen && !isDeleteOpen) ||
    (!isRegisterOpen && isModifyOpen && isDeleteOpen) ||
    (isRegisterOpen && !isModifyOpen && isDeleteOpen)
  ) {
    setIsRegisterOpen(false);
    setIsModifyOpen(false);
    setIsDeleteOpen(false);
  }

  return (
    <UserInfoContainer>
      <Tab>연차 관리</Tab>
      <AnnualInput>
        <Label htmlFor="register">연차 등록일</Label>
        <Input
          id="register"
          value={`${startDay || ''} ~ ${endDay || ''}`}
          readOnly
        />
        <BtnAlign>
          <UserBtn
            title="등록"
            size={BTN_SIZE_S}
            isOpen={isRegisterOpen}
            handleOpen={() => setIsRegisterOpen(prev => !prev)}
          />
          <UserBtn
            title="수정"
            size={BTN_SIZE_S}
            isOpen={isModifyOpen}
            handleOpen={() => setIsModifyOpen(prev => !prev)}
          />
          <UserBtn
            title="삭제"
            size={BTN_SIZE_S}
            isOpen={isDeleteOpen}
            handleOpen={() => setIsDeleteOpen(prev => !prev)}
          />
        </BtnAlign>
      </AnnualInput>
      {isRegisterOpen && !isModifyOpen && !isDeleteOpen && (
        <UserRegister
          startDay={startDay}
          endDay={endDay}
          setStartDay={setStartDay}
          setEndDay={setEndDay}
          btnTitle="등록하기"
          btnMethod="POST"
        />
      )}
      {!isRegisterOpen && isModifyOpen && !isDeleteOpen && (
        <UserRegister
          startDay={startDay}
          endDay={endDay}
          setStartDay={setStartDay}
          setEndDay={setEndDay}
          btnTitle="수정하기"
          btnMethod="POST"
        />
      )}
      {!isRegisterOpen && !isModifyOpen && isDeleteOpen && (
        <UserRegister
          startDay={startDay}
          endDay={endDay}
          setStartDay={setStartDay}
          setEndDay={setEndDay}
          btnTitle="삭제하기"
          btnMethod="DELETE"
        />
      )}
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', '')};
  height: inherit;
  min-width: 600px;
  padding: 50px;
  position: relative;
`;

const Tab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 230px;
  height: 40px;
  font-weight: 700;
  position: absolute;
  top: 50px;
  left: 50px;
`;

const AnnualInput = styled.div`
  width: 300px;
  margin: 80px 0 50px;
`;

const Label = styled.label`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  font-weight: 600;
  white-space: nowrap;
`;

const Input = styled.input`
  color: ${props => props.theme.style.text};
  border: 2px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  outline: none;
  width: 100%;
  padding: 10px 20px;
  margin: 10px 0 20px;
  transition: all 0.4s ease;
  text-align: center;

  &:focus {
    border: 2px solid ${props => props.theme.style.text};
  }

  &::placeholder {
    color: ${props => props.theme.style.lightGray};
    letter-spacing: 1px;
  }
`;

const BtnAlign = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;
