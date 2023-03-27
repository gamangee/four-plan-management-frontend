import React from 'react';
import styled from 'styled-components';

export default function TodayDuty() {
  return (
    <Container>
      <Title>오늘의 당직 😊</Title>
      <Line />
      <DutyList>
        <Duty>뽀로로 (개발팀 / 사원) </Duty>
        <Duty>펭수 (디자인팀 / 팀장) </Duty>
      </DutyList>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.blue};
`;

const Title = styled.div`
  margin: 12px 0 8px 0;
`;
const Line = styled.div`
  width: 180px;
  height: 3px;
  background-color: ${props => props.theme.style.white};
  margin-bottom: 12px;
`;
const DutyList = styled.ul``;
const Duty = styled.li`
  list-style: disc;
  font-size: ${props => props.theme.style.textMedium};
`;
