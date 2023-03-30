import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AnnualDatePicker({ setStartDay, setEndDay }) {
  const date = new Date();

  const isWeekday = date => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  const [startDate, setStartDate] = useState(date);
  const [endDate, setEndDate] = useState(null);

  let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  };

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setStartDay(
      start?.toLocaleDateString('ko-kr', options).replaceAll('. ', '-')
    );
    setEndDay(end?.toLocaleDateString('ko-kr', options).replaceAll('. ', '-'));
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
