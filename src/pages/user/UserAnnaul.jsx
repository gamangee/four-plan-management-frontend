import React, { useState } from 'react';
import styled from 'styled-components';
import { useService } from '../../context/context';
import UserRegister from '../../components/UserRegister';
import convertToKoreanTime from '../../utility/koreanTime';

export default function UserAnnaul() {
  const { user, service } = useService();
  const ANNUAL_DATA = user.Schedule;
  const [formatDay, setFormatDay] = useState({
    startDay: convertToKoreanTime(ANNUAL_DATA?.start_date),
    endDay: convertToKoreanTime(ANNUAL_DATA?.end_date),
  });
  const [yearDay, setYearDay] = useState('');

  if (formatDay.endDay === '1970년 1월 1일 (목)') {
    setFormatDay(prev => ({
      ...prev,
      endDay: '',
    }));
  }

  // console.log(service.client.defaults.headers);

  const [originalDay, setOriginalDay] = useState({
    startDay: ANNUAL_DATA?.start_date,
    endDay: ANNUAL_DATA?.end_date,
  });

  const [selected, setSelected] = useState('등록');

  const [value, setValue] = useState({
    id: user?.schedule?.id,
    start_date: originalDay.startDay,
    end_date: originalDay.endDay,
    scheduleType: 'YEARLY',
  });

  return (
    <UserInfoContainer>
      <Tab>연차 관리</Tab>
      <AnnualInput>
        <Label htmlFor="register">연차 등록일</Label>
        <Input id="register" value={yearDay} readOnly />
        <BtnAlign>
          <RegisterBtn
            selected={selected}
            onClick={e => setSelected(e.target.textContent)}
          >
            등록
          </RegisterBtn>
          <UpdateBtn
            selected={selected}
            onClick={e => setSelected(e.target.textContent)}
          >
            수정
          </UpdateBtn>
          <DeleteBtn
            selected={selected}
            onClick={e => setSelected(e.target.textContent)}
          >
            삭제
          </DeleteBtn>
        </BtnAlign>
      </AnnualInput>
      <UserRegister
        originalDay={originalDay}
        setOriginalDay={setOriginalDay}
        formatDay={formatDay}
        setFormatDay={setFormatDay}
        value={value}
        selected={selected}
        setYearDay={setYearDay}
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
`;

const RegisterBtn = styled(Btn)``;

const UpdateBtn = styled(Btn)`
  background-color: ${props => props.theme.style.text};
  color: ${props => props.theme.style.white};
`;

const DeleteBtn = styled(Btn)`
  background-color: ${props => props.theme.style.warning};
  color: ${props => props.theme.style.white};
`;
