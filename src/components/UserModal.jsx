import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';

export default function UserModal({ isOpen, onClose, status }) {
  if (!isOpen) return null;

  return (
    <>
      <Container onClick={onClose} />
      <ModalWrapper>
        <TextAlign>
          <Text>{status}</Text>
          <Btn onClick={onClose}>확인</Btn>
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

const Btn = styled.div`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  outline: none;
  border: none;
  width: 120px;
  height: 50px;
  white-space: nowrap;
  transition: all 0.4s ease;
  margin-left: auto;

  &:hover {
    background-color: ${props => props.theme.style.text};
    color: ${props => props.theme.style.white};
  }
`;

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
