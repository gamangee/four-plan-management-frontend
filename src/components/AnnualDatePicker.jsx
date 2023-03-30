import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import convertToKoreanTime from '../utility/koreanTime';

export default function AnnualDatePicker({ setOriginalDay, setFormatDay }) {
  const date = new Date();

  const isWeekday = date => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  const [datepickerDate, setDatepicker] = useState({
    startDate: date,
    endDate: null,
  });

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

    // 연차일수 계산용
    setOriginalDay({ startDay: start, endDay: end });
  };

  return (
    <DatePicker
      inline
      selectsRange
      disabledKeyboardNavigation
      onChange={onChange}
      startDate={datepickerDate.startDate}
      endDate={datepickerDate.endDate}
      filterDate={isWeekday}
    />
  );
}
