import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';
import {
  deleteSchedule,
  registerSchedule,
  updateSchedule,
} from '../service/Service';
import UserModal from './UserModal';

export default function UserBtn({
  title,
  size,
  isOpen,
  handleOpen,
  isChecked,
  submitData,
  selected,
  setSelected,
}) {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const closeModal = () => setIsOpenModal(false);

  const { mutate, isSuccess, isError } = useMutation(variables => {
    switch (variables.action) {
      case '등록':
        return registerSchedule(variables.data);
      case '수정':
        return updateSchedule(variables.data);
      case '삭제':
        return deleteSchedule(variables.data);
      default:
        throw new Error('Invalid action');
    }
  });

  const submit = selected => {
    mutate({ selected, data: submitData });
  };

  return (
    <>
      <Btn
        onClick={!isChecked ? () => setSelected(title) : () => submit(title)}
        // onClick={() => setSelected(title)}
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
