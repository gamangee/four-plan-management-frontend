import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import getDayOff from '../utility/dayOff';
import AnnualDatePicker from './AnnualDatePicker';
import UserBtn from './UserBtn';

const BTN_SIZE_M = { width: '120px', height: '50px' };

export default function UserRegister({
  startDay,
  setStartDay,
  endDay,
  setEndDay,
  btnTitle,
  submitData,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const onClickChecked = () => {
    if (startDay === undefined || endDay === undefined) {
      setIsChecked(false);
      return;
    }
    setIsChecked(prev => !prev);
  };

  return (
    <AnnualRegister>
      <DisabledClick type={btnTitle}>
        <AnnualDatePicker
          setStartDay={setStartDay}
          setEndDay={setEndDay}
          type={btnTitle}
        />
      </DisabledClick>
      <SelectDates>
        <SelectDate>
          <DateLabel>연차 시작일 :</DateLabel>
          <Input value={startDay || ''} readOnly />
        </SelectDate>
        <SelectDate>
          <DateLabel>연차 종료일 :</DateLabel>
          <Input value={endDay || ''} readOnly />
        </SelectDate>
        <SelectDate>
          <DateLabel>총 연차 일수 :</DateLabel>
          <Input readOnly value={getDayOff(startDay, endDay) || ''} />
        </SelectDate>
        <Check>
          <CheckInput
            type="checkbox"
            id="checked"
            disabled={isChecked ? '' : 'disabled'}
          />
          <CheckLabel
            htmlFor="checked"
            isChecked={isChecked}
            onClick={onClickChecked}
          >
            위의 내용을 확인하였습니다.
          </CheckLabel>
        </Check>
        <UserBtn
          title={btnTitle}
          size={BTN_SIZE_M}
          isChecked={isChecked}
          submitData={submitData}
        />
      </SelectDates>
    </AnnualRegister>
  );
}

const AnnualRegister = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  border: 8px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 100%;
  min-width: 900px;
  height: 550px;
  padding: 50px;
`;

const DisabledClick = styled.div`
  pointer-events: ${props => (props.type === '삭제하기' ? 'none' : 'auto')};
`;

const SelectDates = styled.div`
  width: 40%;
`;

const SelectDate = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;

const Label = styled.label`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  font-weight: 600;
  white-space: nowrap;
`;

const DateLabel = styled(Label)`
  width: 200px;
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

const Check = styled.div`
  margin: 20px 0 40px;
`;

const CheckInput = styled.input`
  width: 16px;
  height: 16px;
`;

const CheckLabel = styled.label`
  color: ${props =>
    props.isChecked ? props.theme.style.text : props.theme.style.lightGray};
  margin-top: 30px;
  font-weight: 700;
  margin-left: 6px;
`;
