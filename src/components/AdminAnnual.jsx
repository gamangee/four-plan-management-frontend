import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import convertToKoreanTime from '../utility/koreanTime';
import { useService } from '../context/context';
import UserModal from './UserModal';

export default function AdminAnnual({ yearly }) {
  const date = new Date();
  const { service } = useService();

  const [datepickerDate, setDatepicker] = useState({
    startDate: new Date(yearly.start_date),
    endDate: new Date(yearly.end_date),
  });

  const [formatDay, setFormatDay] = useState({
    startDay: convertToKoreanTime(datepickerDate?.startDate),
    endDay: convertToKoreanTime(datepickerDate?.endDate),
  });

  const [yearDay, setYearDay] = useState(
    `${convertToKoreanTime(yearly.start_date)} ~ ${convertToKoreanTime(
      yearly.end_date
    )}`
  );

  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const [value, setValue] = useState({
    id: yearly.id,
    start_date: '',
    end_date: '',
    scheduleType: 'YEARLY',
  });

  const isWeekday = date => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  if (formatDay.endDay === '1970년 1월 1일 (목)') {
    setFormatDay(prev => ({
      ...prev,
      endDay: '',
    }));
  }

  const onChange = dates => {
    const [start, end] = dates;
    // 데이트 피거용
    setDatepicker({
      startDate: start,
      endDate: end,
    });

    // input창에 한국 시간 표시용
    setFormatDay({
      startDay: convertToKoreanTime(start),
      endDay: convertToKoreanTime(end),
    });

    setYearDay(`
      ${convertToKoreanTime(start)} ~ ${convertToKoreanTime(end)}
    `);

    // data 담기
    setValue({
      id: '123',
      start_date: start,
      end_date: end,
      scheduleType: 'YEARLY',
    });
  };

  const handleSubmit = select => {
    // 연차 수정
    if (select === '수정') {
      service
        .updateSchedule(value.id, {
          id: value.id,
          start_date: value.start_date,
          end_date: value.end,
          scheduleType: value.scheduleType,
        })
        .then(res => setStatus(res));
    }

    // 연차 삭제
    if (select === '삭제') {
      service
        .deleteSchedule({
          id: value.id,
        })
        .then(res => setStatus(res));
    }

    if (select !== '삭제') {
      setYearDay(`${formatDay.startDay} ~ ${formatDay.endDay}`);
    } else {
      setYearDay('');
    }

    setIsOpen(true);
    setSubmitted(true);
    setFormatDay({
      startDay: '',
      endDay: '',
    });
  };

  return (
    <ManagementAnnual>
      <ManagementTab>연차관리</ManagementTab>
      <Input readOnly value={yearDay} />
      <BtnAlign>
        <Btn
          onClick={e => {
            handleSubmit(e.target.textContent);
          }}
        >
          수정
        </Btn>
        <Btn
          onClick={e => {
            handleSubmit(e.target.textContent);
          }}
        >
          삭제
        </Btn>
      </BtnAlign>
      <StyleDatePicker>
        <DatePicker
          inline
          selectsRange
          disabledKeyboardNavigation
          onChange={onChange}
          startDate={datepickerDate.startDate}
          endDate={datepickerDate.endDate}
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
