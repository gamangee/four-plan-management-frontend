import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminAnnual from '../../components/AdminAnnual';
import { useService } from '../../context/context';

export default function Management() {
  const { user, service } = useService();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch('/user/checkSchedule.json')
      .then(res => res.json())
      .then(data => setSchedule(data.Schedule));
  }, []);

  // const filterSchedule = schedule?.filter(user => user.type === 'YEARLY');
  // setSchedule(filterSchedule);

  return (
    <Container>
      <AdminAnnual />
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  position: relative;
  width: 1050px;
  height: inherit;
  margin-left: 25px;
  padding: 50px;
`;
