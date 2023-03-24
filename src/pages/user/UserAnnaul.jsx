import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';

// import ko from 'date-fns/locale/ko';
// registerLocale('ko', ko);

import { CalendarWrapper } from '../../styles/CalenderWrapper';

export default function UserAnnaul() {
  // 달력 날짜 변경 시 기준점이 되는 날짜
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <CalendarWrapper>
        <DatePicker
          // locale="ko" // 달력 한글화
          selected={startDate} // 날짜 state
          onChange={onChange} // 날짜 설정 콜백 함수
          startDate={startDate}
          endDate={endDate}
          inline
          selectsRange
          popperModifiers={{
            // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
            preventOverflow: {
              enabled: true,
            },
          }}
        />
      </CalendarWrapper>
    </>
  );
}
