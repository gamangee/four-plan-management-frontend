import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import convertToKoreanTime from '../utility/koreanTime';

export default function AnnualDatePicker({
  originalDay,
  setOriginalDay,
  setFormatDay,
  setValue,
  setYearDay,
}) {
  const date = new Date();

  const isWeekday = date => {
    const day = date.getDay(date);
    return day !== 0 && day !== 6;
  };

  const [datepickerDate, setDatepicker] = useState({
    startDate: originalDay?.start_date,
    endDate: originalDay?.end_date,
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

    // 연차등록일 input
    setYearDay(`${convertToKoreanTime(start)} ~ ${convertToKoreanTime(end)}`);

    // 연차일수 계산용
    setOriginalDay({ startDay: start, endDay: end });

    // server에 보낼 data
    setValue(prev => ({
      ...prev,
      start_date: new Date(start).toISOString().slice(0, 19) + 'Z',
      end_date: new Date(end).toISOString().slice(0, 19) + 'Z',
    }));
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
