import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { registerSchedule } from '../service/Service';
import UserModal from './UserModal';

export default function UserBtn({
  title,
  size,
  isOpen,
  handleOpen,
  isChecked,
  submitData,
}) {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const closeModal = () => setIsOpenModal(false);

  const { mutate, isSuccess, isError } = useMutation(registerSchedule);

  const submit = () => {
    mutate(submitData);
  };

  return (
    <>
      <Btn
        onClick={!isChecked ? handleOpen : submit}
        size={size}
        isOpen={isOpen}
        disabled={title.length > 2 && !isChecked}
      >
        {title}
      </Btn>
      {isSuccess && (
        <UserModal
          isOpen={isOpenModal}
          onClose={closeModal}
          status="success"
          title={title}
        />
      )}
      {isError && (
        <UserModal
          isOpen={isOpenModal}
          onClose={closeModal}
          status="fail"
          title={title}
        />
      )}
    </>
  );
}

const Btn = styled.button`
  background-color: ${props =>
    props.isOpen ? props.theme.style.text : props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props =>
    props.isOpen ? props.theme.style.white : props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  width: ${props => props.size.width};
  height: ${props => props.size.height};
  outline: none;
  border: none;
  white-space: nowrap;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${props => props.theme.style.text};
    color: ${props => props.theme.style.white};
  }

  &:disabled {
    background-color: ${props => props.theme.style.lightGray};
    color: ${props => props.theme.style.white};
    cursor: auto;
  }
`;
