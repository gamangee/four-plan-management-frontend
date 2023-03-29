import React, { useState } from 'react';
import styled from 'styled-components';
import { useService } from '../../context/context';
import UserRegister from '../../components/UserRegister';
import { useEffect } from 'react';
import AnnualDatePicker from '../../components/AnnualDatePicker';
import { useService } from '../../context/context';
import getDayOff from '../../utility/dayOff';

export default function UserAnnaul() {
  const { user } = useService();
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const [selected, setSelected] = useState('등록');

  const [value, setValue] = useState({
    id: user.id,
    start_date: startDay,
    end_date: endDay,
    scheduleType: 'YEARLY',
  });

  // useEffect(() => {
  //   setValue({
  //     id: user.id,
  //     start_date: startDay,
  //     end_date: endDay,
  //     scheduleType: 'YEARLY',
  //   });
  // }, []);
  const { user } = useService();

  const onClickChecked = () => {
    setIsChecked(prev => !prev);
  };

  // console.log('user', user);
  const [selected, setSelected] = useState('등록');

  const [value, setValue] = useState({
    id: user.id,
    start_date: startDay,
    end_date: endDay,
    scheduleType: 'YEARLY',
  });

  // useEffect(() => {
  //   setValue({
  //     id: user.id,
  //     start_date: startDay,
  //     end_date: endDay,
  //     scheduleType: 'YEARLY',
  //   });
  // }, []);

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
          <Btn onClick={e => setSelected(e.target.textContent)}>등록</Btn>
          <Btn onClick={e => setSelected(e.target.textContent)}>수정</Btn>
          <Btn onClick={e => setSelected(e.target.textContent)}>삭제</Btn>
        </BtnAlign>
      </AnnualInput>
      <UserRegister
        startDay={startDay}
        setStartDay={setStartDay}
        endDay={endDay}
        setEndDay={setEndDay}
        selected={selected}
        setSelected={setSelected}
        value={value}
      />
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  position: relative;
  width: 1050px;
  height: inherit;
  margin-left: 25px;
  padding: 50px;
`;

const Tab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 200px;
  height: 40px;
  font-weight: 700;
  position: fixed;
  top: 50px;
  left: 380px;
`;

const AnnualInput = styled.div`
  width: 300px;
  margin: 80px 0 50px;
  position: fixed;
  top: 50px;
  left: 380px;
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

const Btn = styled.button`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  width: 80px;
  height: 50px;
  outline: none;
  border: none;
  white-space: nowrap;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${props => props.theme.style.text};
    color: ${props => props.theme.style.white};
  }
`;
