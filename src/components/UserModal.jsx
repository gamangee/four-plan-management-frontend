import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';
import UserBtn from './UserBtn';

export default function UserModal({ isOpen, onClose, status, title }) {
  if (!isOpen) return null;

  return (
    <>
      <Container onClick={onClose} />
      <ModalWrapper>
        <TextAlign>
          <Text>
            {status === 'success'
              ? `${title.slice(0, 2)} 완료!`
              : '날짜를 다시 선택해주세요.'}
          </Text>
          <Btn onClick={onClose}>
            <UserBtn title="확인" size={{ width: '80px', height: '50px' }} />
          </Btn>
        </TextAlign>
        <CloseBtn>
          <IoIosClose onClick={onClose} />
        </CloseBtn>
      </ModalWrapper>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 8;
  display: flex;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px;
  height: 200px;
  border-radius: 15px;
  z-index: 9;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const TextAlign = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  font-size: ${props => props.theme.style.textlg};
  height: 200px;
  margin-top: 6px;
`;

const Text = styled.div`
  margin-bottom: 20px;
`;

const Btn = styled.div``;

const CloseBtn = styled.button`
  color: ${props => props.theme.style.text};
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 26px;
  z-index: 10px;
`;
