import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

export default function Main() {
  const [schedule, setSchedule] = useState();

  const colorArray = ['lightgray', '#FF9AA2', '#B5EAD7', '#C7CEEA', '#FFB7B2'];

  useEffect(() => {
    fetch('/user/schedule.json')
      .then(res => res.json())
      .then(res => res.users)
      .then(users =>
        users.map(user => {
          let index;
          if (user.Schedule.type === 'annual') {
            index = 0;
          } else if (user.Schedule.type === 'duty') {
            index = 1;
          } else if (user.department === '개발팀') {
            index = 2;
          } else if (user.department === '인사팀') {
            index = 3;
          } else {
            index = 4;
          }
          if (user.Schedule.type === 'plan') {
            return {
              title: user.department + ' : ' + user.Schedule.content,
              start: user.Schedule.start_date.replace('Z', ''),
              end: user.Schedule.end_date.replace('Z', ''),
              color: colorArray[index],
            };
          } else {
            return {
              title: user.name,
              start: user.Schedule.start_date.substr(0, 10),
              end: user.Schedule.end_date.substr(0, 10),
              color: colorArray[index],
            };
          }
        })
      )
      .then(data => setSchedule(data));
  }, []);

  return (
    <div style={{ width: '60%', color: 'red' }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        dayMaxEventRows={3}
        initialView="dayGridMonth"
        allDay="false"
        isEnd="true"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek', // user can switch between the two
        }}
        events={schedule}
        displayEventTime="false"
        displayEventEnd="true"
        defaultTimedEventDuration="00:00"
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }}
      />
    </div>
  );
}
