import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import convertToKoreanTime from '../utility/koreanTime';
import { useService } from '../context/context';
import UserModal from './UserModal';

export default function AdminAnnual({ annual }) {
  const { service } = useService();

  const [datepickerDate, setDatepicker] = useState({});
  const [formatDay, setFormatDay] = useState({});
  const [yearDay, setYearDay] = useState('');
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState({});

  useEffect(() => {
    if (annual) {
      setDatepicker({
        startDate: new Date(annual.start_date),
        endDate: new Date(annual.end_date),
      });
      setFormatDay({
        startDay: convertToKoreanTime(datepickerDate?.startDate),
        endDay: convertToKoreanTime(datepickerDate?.endDate),
      });
      setYearDay(
        `${convertToKoreanTime(annual.start_date)} ~ ${convertToKoreanTime(
          annual.end_date
        )}`
      );
      setValue({
        id: annual.id,
        start_date: annual.start_date,
        end_date: annual.end_date,
        scheduleType: 'YEARLY',
      });
    } else {
      setDatepicker({
        startDate: '',
        endDate: '',
      });
      setFormatDay({
        startDay: '',
        endDay: '',
      });
      setYearDay('');
    }
  }, [annual]);

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
      ${convertToKoreanTime(start)} ~ ${
      convertToKoreanTime(end) === '1970년 1월 1일 (목)'
        ? ''
        : convertToKoreanTime(end)
    }
    `);

    // data 담기
    setValue(prev => ({
      ...prev,
      start_date: new Date(start).toISOString().slice(0, 19),
      end_date: new Date(end).toISOString().slice(0, 19),
    }));
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
      setYearDay(
        `${formatDay.startDay} ~ ${
          formatDay.endDay === '1970년 1월 1일 (목)' ? '' : formatDay.endDay
        }`
      );
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
      {annual && (
        <>
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
        </>
      )}
      {!annual && <NoLeft>연차가 없습니다.</NoLeft>}
    </ManagementAnnual>
  );
}

const NoLeft = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  width: 420px;
  height: 380px;
`;

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
  font-size: ${props => props.theme.style.textmd};
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 40px;
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
