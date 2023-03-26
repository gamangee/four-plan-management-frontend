import React, { useState } from 'react';
import styled from 'styled-components';
import AnnualDatePicker from '../../components/AnnualDatePicker';
import getDayOff from '../../utility/dayOff';

export default function UserAnnaul() {
  const [isChecked, setIsChecked] = useState(false);
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  const onClickChecked = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <Container>
      <DashBoard>
        <SideBar />
        <UserInfoContainer>
          <Tab>연차 관리</Tab>
          <AnnualInput>
            <Label htmlFor="register">연차 등록일</Label>
            <Input
              id="register"
              value={`${startDay || ''} ~ ${endDay || ''}`}
              readOnly
            />
            <BtnAlign>
              <Btn>등록</Btn>
              <Btn>수정</Btn>
              <Btn>삭제</Btn>
            </BtnAlign>
          </AnnualInput>
          <AnnualRegister>
            <AnnualDatePicker setStartDay={setStartDay} setEndDay={setEndDay} />
            <SelectDates>
              <SelectDate>
                <DateLabel>연차 시작일 :</DateLabel>
                <Input defaultValue={startDay || ''} readOnly />
              </SelectDate>
              <SelectDate>
                <DateLabel>연차 종료일 :</DateLabel>
                <Input defaultValue={endDay || ''} readOnly />
              </SelectDate>
              <SelectDate>
                <DateLabel>총 연차 일수 :</DateLabel>
                <Input
                  readOnly
                  defaultValue={getDayOff(startDay, endDay) || ''}
                />
              </SelectDate>
              <Check>
                <CheckInput type="checkbox" id="checked" />
                <CheckLabel
                  htmlFor="checked"
                  isChecked={isChecked}
                  onClick={onClickChecked}
                >
                  위의 내용을 확인하였습니다.
                </CheckLabel>
              </Check>
              <RegistBtn>등록하기</RegistBtn>
            </SelectDates>
          </AnnualRegister>
        </UserInfoContainer>
      </DashBoard>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.mainBg};
  padding: 50px 0;
`;

const DashBoard = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')};
  background-color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  margin: 0 auto;
  width: 1400px;
  height: 900px;
  padding: 20px;
`;

const SideBar = styled.div`
  background-color: ${props => props.theme.style.white};
  border-radius: ${props => props.theme.style.borderRadius};
  border: 8px solid ${props => props.theme.style.skyblue};
  width: 300px;
  height: 860px;
`;

const UserInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', '')};
  width: 100%;
  height: inherit;
  min-width: 600px;
  padding: 50px;
  position: relative;
`;

const Tab = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 230px;
  height: 40px;
  font-weight: 700;
  position: absolute;
  top: 50px;
  left: 50px;
`;

const AnnualInput = styled.div`
  width: 300px;
  margin: 80px 0 50px;
`;

const Label = styled.label`
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  font-weight: 600;
  white-space: nowrap;
`;

const Input = styled.input`
  color: ${props => props.theme.style.text};
  border: 2px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  outline: none;
  width: 100%;
  padding: 10px 20px;
  margin: 10px 0 20px;
  transition: all 0.4s ease;
  text-align: center;

  &:focus {
    border: 2px solid ${props => props.theme.style.text};
  }

  &::placeholder {
    color: ${props => props.theme.style.lightGray};
    letter-spacing: 1px;
  }
`;

const Btn = styled.button`
  background-color: ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textmd};
  outline: none;
  border: none;
  width: 80px;
  height: 50px;
  white-space: nowrap;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${props => props.theme.style.text};
    color: ${props => props.theme.style.white};
  }
`;

const BtnAlign = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;

const AnnualRegister = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  border: 8px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  color: ${props => props.theme.style.text};
  width: 100%;
  min-width: 900px;
  height: 550px;
  padding: 50px;
`;

const SelectDates = styled.div`
  width: 40%;
`;

const SelectDate = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;

const DateLabel = styled(Label)`
  width: 200px;
`;

const Check = styled.div`
  margin: 20px 0 40px;
`;

const CheckInput = styled.input`
  width: 16px;
  height: 16px;
`;

const CheckLabel = styled.label`
  color: ${props =>
    props.isChecked ? props.theme.style.text : props.theme.style.lightGray};
  margin-top: 30px;
  font-weight: 700;
  margin-left: 6px;
`;

const RegistBtn = styled(Btn)`
  width: 120px;
  height: 50px;
`;
