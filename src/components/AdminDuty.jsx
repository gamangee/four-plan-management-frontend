import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import convertToKoreanTime from '../utility/koreanTime';
import { useService } from '../context/context';
import UserModal from './UserModal';

export default function AdminAnnual({ duty, isSearch }) {
  const date = new Date();
  const { service } = useService();
  const [startDate, setStartDate] = useState(date);
  const [dutyDay, setDutyDay] = useState('');
  const [formatDay, setFormatDay] = useState('');
  const [value, setValue] = useState({});
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (duty) {
      setStartDate(new Date(duty.start_date));
      setDutyDay(convertToKoreanTime(duty.start_date));
      setFormatDay(convertToKoreanTime(duty.start_date));
      setValue({
        id: duty.id,
        start_date: duty.start_date,
        end_date: duty.end_date,
        scheduleType: 'DUTY',
      });
    } else {
      setValue({
        id: '',
        start_date: '',
        end_date: '',
        scheduleType: 'DUTY',
      });
    }
  }, [duty]);

  const isWeekday = date => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  const onChange = date => {
    setStartDate(date);
    setFormatDay(convertToKoreanTime(date));
    setDutyDay(convertToKoreanTime(date));
    setValue(prev => ({
      ...prev,
      start_date: new Date(date).toISOString().slice(0, 19),
      end_date: new Date(date).toISOString().slice(0, 19),
    }));
  };

  const handleSubmit = select => {
    // 당직 등록
    if (select === '등록') {
      service
        .registerSchedule({
          start_date: value.start_date,
          end_date: value.start_date,
          scheduleType: value.scheduleType,
        })
        .then(res => setStatus(res));
    }

    // 당직 수정
    if (select === '수정') {
      service
        .updateSchedule(value.id, {
          id: value.id,
          start_date: value.start_date,
          end_date: value.start_date,
          scheduleType: value.scheduleType,
        })
        .then(res => setStatus(res));
    }

    // 당직 삭제
    if (select === '삭제') {
      service
        .deleteSchedule({
          id: value.id,
        })
        .then(res => setStatus(res));
    }

    if (select !== '삭제') {
      setDutyDay(formatDay);
    } else {
      setDutyDay('');
    }

    setIsOpen(true);
    setSubmitted(true);
    setFormatDay('');
  };

  return (
    <ManagementAnnual>
      <ManagementTab>당직관리</ManagementTab>
      {duty && <Input readOnly value={dutyDay} />}
      {!duty && !isSearch && <Input readOnly value="사용자를 검색하세요." />}
      {!duty && isSearch && <Input readOnly value="당직이 없습니다." />}
      <BtnAlign>
        {duty && (
          <Btn
            onClick={e => {
              handleSubmit(e.target.textContent);
            }}
          >
            수정
          </Btn>
        )}
        {!duty && isSearch && (
          <Btn
            onClick={e => {
              handleSubmit(e.target.textContent);
            }}
          >
            등록
          </Btn>
        )}
        {isSearch && (
          <Btn
            onClick={e => {
              handleSubmit(e.target.textContent);
            }}
          >
            삭제
          </Btn>
        )}
      </BtnAlign>
      <StyleDatePicker>
        <DatePicker
          inline
          disabledKeyboardNavigation
          selected={
            startDate instanceof Date && isNaN(startDate.getTime())
              ? new Date()
              : startDate
          }
          onChange={onChange}
          filterDate={isWeekday}
        />
      </StyleDatePicker>
      {submitted && (
        <UserModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setStatus('');
            setSubmitted(false);
          }}
          status={status}
        />
      )}
    </ManagementAnnual>
  );
}

const ManagementAnnual = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  position: relative;
  width: 45%;
  height: 440px;
  margin-right: 50px;
`;

const ManagementTab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.text};
  color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  font-size: ${props => props.theme.style.textmd};
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 35px;
  font-weight: 600;
  z-index: 1;
`;

const Input = styled.input`
  color: ${props => props.theme.style.text};
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
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
  width: 80px;
  height: 30px;
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
    margin-top: 10px;
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
