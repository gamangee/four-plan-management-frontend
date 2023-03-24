import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AnnualDatePicker({ setStartDay, setEndDay }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setStartDay(start?.toISOString().slice(0, 10));
    setEndDay(end?.toISOString().slice(0, 10));
  };

  return (
    <DatePicker
      inline
      dateFormat="yyyy.MM.dd (eee)"
      onChange={onChange}
      selected={startDate}
      selectsRange
      startDate={startDate}
      endDate={endDate}
      disabledKeyboardNavigation
    />
  );
}
