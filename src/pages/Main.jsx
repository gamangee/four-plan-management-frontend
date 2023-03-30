import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useService } from '../context/context';
import UserSearch from './UserSearch';

// export const D = {
//   PAGE_LIST: "PAGE_LIST",
//   PAGE_EXCEL: "PAGE_EXCEL",
//   PAGE_REGISTER: "PAGE_REGISTER",
//   PAGE_UPDATE: "PAGE_UPDATE",
//   PAGE_DELETE: "PAGE_DELETE"
// };

export default function Main() {
  const [selected, setSelected] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]); // 클릭해서 담은 값

  const colorArray = ['#D3D3D3', '#FF9AA2', '#B5EAD7', '#C7CEEA', '#FFB7B2'];
  const { service } = useService();
  const options = {
    staleTime: 60 * 1000,
  };

  // js 데이터 객체 지역에 맞춰서 (시간))
  function scheduleList() {
    return service.schedule().then(users => {
      if (selected === '전체') {
        return users.map(user => {
          return {
            ...user,
            title: user.name,
            start: user.Schedule.start_date.slice(0, 10),
            end: user.Schedule.end_date.slice(0, 10),
            color: colorArray[colorSelect(user)],
          };
        });
      } else if (selected === '부서') {
        return users
          .filter(user => user.Schedule.type === 'plan')
          .map(user => {
            return {
              title: user.department + ' : ' + user.Schedule.content,
              start: user.Schedule.start_date.replace('Z', ''),
              end: user.Schedule.end_date.replace('Z', ''),
              color: colorArray[colorSelect(user)],
            };
          });
      } else if (selected === '유저') {
        return users.map(user => {
          return {
            ...user,
            title: user.name,
            start: user.Schedule.start_date.slice(0, 10),
            end: user.Schedule.end_date.slice(0, 10),
            color: colorArray[colorSelect(user)],
          };
        });
      }
      return users
        .filter(user => selected.includes(user.Schedule.account_id))
        .map(user => ({
          ...user,
          title: user.name,
          start: user.Schedule.start_date.substr(0, 10),
          end: user.Schedule.end_date.substr(0, 10),
          color: colorArray[colorSelect(user)],
        }));
    });
  }

  const { data: schedule } = useQuery(
    ['schedule', selected],
    () => scheduleList(),

    options
  );

  const selectFilter = e => {
    console.log('selectFilter');
    const textContent = e.target.textContent;
    if (textContent !== '유저') {
      setSelected(textContent);
      setIsModalOpen(false);
    } else {
      setSelected(textContent);
      setSelectedUser(selectedUser);
      return setIsModalOpen(true);
    }
  };

  // console.log('스케쥴 :', schedule);

  return (
    <Container>
      <FlexContainer1>
        <ContentName>Calendar</ContentName>
        <BtnGroup>
          <Btn
            className={`${selected === '전체' ? 'active' : ''}`}
            onClick={selectFilter}
          >
            전체
          </Btn>
          <Btn
            className={`${selected === '부서' ? 'active' : ''}`}
            onClick={selectFilter}
          >
            부서
          </Btn>
          <Btn onClick={selectFilter}>유저</Btn>
        </BtnGroup>
        {isModalOpen && (
          <UserSearch
            setIsModalOpen={setIsModalOpen}
            scheduleList={scheduleList}
            schedule={schedule}
            setSelected={setSelected}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            isModalOpen={isModalOpen}
          />
        )}
      </FlexContainer1>
      <FlexContainer2>
        <FullCalendar
          contentHeight="550px"
          plugins={[dayGridPlugin]}
          dayMaxEventRows={3}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek',
          }}
          events={schedule}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }}
        />
      </FlexContainer2>
    </Container>
  );
}
const Container = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  position : relative;
  margin-left: 25px;
`;

const ContentName = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 200px;
  height: 40px;
  border: none;
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
`;
const FlexContainer1 = styled.div`
  position: relative;
  ${props => props.theme.variables.flex('column', 'space-between', '')}
  box-sizing : border-box;
  padding: 20px 0;
  flex-grow: 1;
  width: 1050px;
  height: 200px;
  color: ${props => props.theme.style.text};
`;
const FlexContainer2 = styled.div`
  flex-grow: 3;
  width: 1050px;
  height: 600px;
  border: 2.5px solid ${props => props.theme.style.skyblue};
  border-radius: 5px;
`;
const BtnGroup = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 300px;
`;

const Btn = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  background-color: ${props =>
    props.className === 'active' ? '#a8d3f4' : props.theme.style.skyblue};
  border-radius: 10px;
  color: ${props =>
    props.className === 'active'
      ? props.theme.style.white
      : props.theme.style.text};

  &:hover {
    background-color: #a8d3f4;
    // background-color: ${props => props.theme.style.skyblue};
  }
`;
function colorSelect(user) {
  let index = 0;

  if (user.Schedule.type === 'duty') {
    index = 1;
  } else if (user.department === '개발팀') {
    index = 2;
  } else if (user.department === '인사팀') {
    index = 3;
  } else {
    index = 4;
  }
  return index;
}
