import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Main() {
  return (
    <div style={{ width: '45%', color: 'red' }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: '미니 프로젝트',
            start: '2023-03-22',
            end: '2023-03-31',
          },
          { title: '만우절', start: '2023-04-01' },
        ]}
      />
    </div>
  );
}
