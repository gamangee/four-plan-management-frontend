import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getDayOff from '../utility/dayOff';
import AnnualDatePicker from './AnnualDatePicker';
import { useService } from '../context/context';
import UserModal from './UserModal';

// 모달창이 열리면 SelectDates 컴포넌트가 움직이는 이슈

export default function UserRegister({
  originalDay,
  setOriginalDay,
  formatDay,
  setFormatDay,
  value,
  selected,
  setYearDay,
}) {
  const { service } = useService();

  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [annualDays, setAnnualDays] = useState(
    getDayOff(originalDay.startDay, originalDay.endDay)
  );

  const onClickChecked = () => {
    if (formatDay.startDay === undefined || formatDay.endDay === undefined) {
      setIsChecked(false);
      return;
    }
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
    setAnnualDays(getDayOff(originalDay.startDay, originalDay.endDay));
  }, [originalDay]);

  const handleSubmit = () => {
    if (selected === '등록') {
      service
        .registerSchedule({
          start_date: value.start_date,
          end_date: value.end,
          scheduleType: value.scheduleType,
        })
        .then(res => setStatus(res))
        .catch(() => setFetchError(true));
    }
    if (selected === '수정') {
      service
        .updateSchedule(value.id, {
          id: value.id,
          start_date: value.start_date,
          end_date: value.end,
          scheduleType: value.scheduleType,
        })
        .then(res => setStatus(res))
        .catch(() => setFetchError(true));
    }
    if (selected === '삭제') {
      service
        .deleteSchedule({
          id: value.id,
        })
        .then(res => setStatus(res))
        .catch(() => setFetchError(true));
    }

    if (selected !== '삭제') {
      setYearDay(`${formatDay.startDay} ~ ${formatDay.endDay}`);
    } else {
      setYearDay('');
    }
    setAnnualDays('');
    setIsOpen(true);
    setIsChecked(false);
    setSubmitted(true);
    setFormatDay({
      startDay: '',
      endDay: '',
    });
  };

  return (
    <AnnualRegister selected={selected} isChecked={isChecked}>
      <DisabledClick type={selected}>
        <AnnualDatePicker
          setOriginalDay={setOriginalDay}
          setFormatDay={setFormatDay}
        />
      </DisabledClick>
      <SelectDates>
        <SelectDate>
          <DateLabel>연차 시작일 :</DateLabel>
          <Input value={formatDay.startDay || ''} readOnly />
        </SelectDate>
        <SelectDate>
          <DateLabel>연차 종료일 :</DateLabel>
          <Input value={formatDay.endDay || ''} readOnly />
        </SelectDate>
        <SelectDate>
          <DateLabel>총 연차 일수 :</DateLabel>
          <Input value={annualDays || ''} readOnly />
        </SelectDate>
        <Check>
          <CheckInput
            type="checkbox"
            id="check"
            disabled={isChecked ? '' : 'disabled'}
          />
          <CheckLabel
            htmlFor="check"
            isChecked={isChecked}
            disabled={isChecked ? '' : 'disabled'}
            onClick={onClickChecked}
          >
            위의 내용을 확인하였습니다.
          </CheckLabel>
        </Check>
        <Btn
          disabled={isChecked ? '' : 'disabled'}
          isChecked={isChecked}
          selected={selected}
          onClick={() => {
            handleSubmit();
          }}
        >
          {selected + '하기'}
        </Btn>
      </SelectDates>
      {submitted && (
        <UserModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setStatus('');
            setSubmitted(false);
            setFetchError(false);
          }}
          status={status}
        />
      )}
      {fetchError && (
        <UserModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setSubmitted(false);
            setFetchError(false);
          }}
          status={status}
        />
      )}
    </AnnualRegister>
  );
}

const AnnualRegister = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  border: 8px solid ${props => props.theme.style.skyblue};
  border: 8px solid
    ${props =>
      props.isChecked
        ? (props.selected === '등록' && props.theme.style.skyblue) ||
          (props.selected === '수정' && props.theme.style.text) ||
          (props.selected === '삭제' && props.theme.style.warning)
        : props.theme.style.lightGray};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 1000px;
  height: 550px;
  padding: 50px;
  position: fixed;
  top: 300px;
  left: 380px;
  transition: all 0.4s ease-in-out;
`;

const DisabledClick = styled.div`
  pointer-events: ${props => (props.type === '삭제' ? 'none' : 'auto')};
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

const Btn = styled.button`
  background-color: ${props =>
    props.isChecked
      ? (props.selected === '등록' && props.theme.style.skyblue) ||
        (props.selected === '수정' && props.theme.style.text) ||
        (props.selected === '삭제' && props.theme.style.warning)
      : props.theme.style.lightGray};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props =>
    props.isChecked
      ? (props.selected === '등록' && props.theme.style.text) ||
        props.theme.style.white
      : props.theme.style.white};
  font-size: ${props => props.theme.style.textmd};
  width: 120px;
  height: 50px;
  outline: none;
  border: none;
  white-space: nowrap;
  transition: all 0.4s ease-in-out;
`;
