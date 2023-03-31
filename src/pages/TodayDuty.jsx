import React from 'react';
import styled from 'styled-components';

export default function TodayDuty({ dutyList }) {
  return (
    <Container>
      <Title>오늘의 당직 😊</Title>
      <Line />
      {dutyList ? (
        <DutyList>
          {dutyList.map((duty, index) => (
            <Duty key={index}>
              {duty.name} ({duty.department} / {duty.position})
            </Duty>
          ))}
        </DutyList>
      ) : (
        <DutyList>오늘은 당직이 없는 날입니다.</DutyList>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  text-align: center;
  position: absolute;
  top: 36px;
  right: 36px;
  width: 250px;
  padding-bottom: 12px;
  border-radius: 20px;
  font-size: ${props => props.theme.style.textmd};
  font-weight: 500;
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.blue};
`;

const Title = styled.div`
  margin: 12px 0 8px 0;
  font-weight: 600;
`;
const Line = styled.div`
  width: 230px;
  height: 3px;
  background-color: ${props => props.theme.style.white};
  margin-bottom: 12px;
`;
const DutyList = styled.ul`
  font-size: ${props => props.theme.style.textsm};
  ${props => props.theme.variables.flex('column', '', 'flex-start')}
`;
const Duty = styled.li`
  list-style: disc;
  font-size: ${props => props.theme.style.textMedium};
  margin-bottom: 10px;
`;
