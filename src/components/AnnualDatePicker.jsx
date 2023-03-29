import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import convertToKoreanTime from '../utility/koreanTime';

export default function AnnualDatePicker({
  setStartDay,
  setEndDay,
  setOriginalDay,
}) {
  const date = new Date();

  const isWeekday = date => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(null);

  const onChange = dates => {
    const [start, end] = dates;
    // 데이트 피거용
    setStartDate(start);
    setEndDate(end);
    // input창에 한국 시간 표시용
    setStartDay(convertToKoreanTime(start));
    setEndDay(convertToKoreanTime(end));
    // 연차일수 계산용
    setOriginalDay({ startDay: start, endDay: end });
  };
  return (
    <DatePicker
      inline
      selectsRange
      disabledKeyboardNavigation
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      filterDate={isWeekday}
    />
  );
}
