import React from 'react';
import styled from 'styled-components';

export default function UserBtn({
  title,
  method,
  size,
  isOpen,
  handleOpen,
  isChecked,
}) {
  return (
    <Btn
      onClick={handleOpen}
      size={size}
      isOpen={isOpen}
      disabled={title.length > 2 && !isChecked}
    >
      {title}
    </Btn>
  );
}

const Btn = styled.button`
  background-color: ${props =>
    props.isOpen ? props.theme.style.text : props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props =>
    props.isOpen ? props.theme.style.white : props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  outline: none;
  border: none;
  width: ${props => props.size.width};
  height: ${props => props.size.height};
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
