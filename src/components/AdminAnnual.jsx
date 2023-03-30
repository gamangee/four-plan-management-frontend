import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export default function AdminAnnual() {
  return (
    <ManagementAnnual>
      <ManagementTab>연차관리</ManagementTab>
      <Title>연차 등록일</Title>
      <Input readOnly value={`2023년 3월 23일 ~ 2023년 3월 24일`} />
      <BtnAlign>
        <Btn>수정</Btn>
        <Btn>삭제</Btn>
      </BtnAlign>
      <StyleDatePicker>
        <DatePicker inline selectsRange disabledKeyboardNavigation />
      </StyleDatePicker>
    </ManagementAnnual>
  );
}

const ManagementAnnual = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  position: relative;
  width: 45%;
  padding: 16px;
`;

const ManagementTab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.text};
  color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  font-size: ${props => props.theme.style.textlg};
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 46px;
  font-weight: 600;
  z-index: 1;
`;

const Title = styled.h1`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  margin: 16px 0 10px;
  font-weight: 600;
`;

const Input = styled.input`
  color: ${props => props.theme.style.text};
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 16px;
`;

const BtnAlign = styled.div`
  ${props => props.theme.variables.flex('', 'space-evenly', 'center')};
  width: 100%;
`;

const Btn = styled.button`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  width: 100px;
  height: 40px;
  margin: 14px 0;
  outline: none;
  border: none;
  justify-content: space-around;
  white-space: nowrap;
  transition: all 0.4s ease-in-out;
`;

const StyleDatePicker = styled.div`
  .react-datepicker__month-container {
    width: 350px;
    height: 300px;
    border-radius: 16px;
  }

  .react-datepicker__current-month {
    font-size: 20px;
    margin: 8px 0;
  }

  .react-datepicker__day-name {
    font-size: 14px;
    margin: 8px;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .react-datepicker__month {
    font-size: 20px;
  }

  .react-datepicker__week {
    margin: 0;
  }

  .react-datepicker__day {
    width: 41px;
    line-height: 26px;
  }
  .react-datepicker__day:hover {
    color: ${props => props.theme.style.white};
    border-radius: 30px;
    background-color: #d20811;
  }
`;
