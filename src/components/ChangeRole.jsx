import React, { useState } from 'react';
import styled from 'styled-components';
import { useService } from '../context/context';

export default function ChangeRole({ selectedUser }) {
  const id = 1;
  // const role = 'ROLE_USER';
  const role = '';
  const { service } = useService();
  const [status, setStatus] = useState(false);
  const [checkValue, setCheckValue] = useState();
  const [isChange, setIsChange] = useState(false);

  // API
  const onSubmit = e => {
    e.preventDefault();
    if (checkValue !== role) {
      service
        .changeRole({ id: id, role: checkValue })
        .then(res => setStatus(res));
    }
  };

  return (
    <div>
      <Container>
        <Title>권한관리</Title>
        {role ? (
          <Form>
            {/* 일반유저 */}
            <Radio>
              <input
                type="radio"
                name="role"
                id="userRadio"
                value="ROLE_USER"
                onChange={e => {
                  role !== e.target.value
                    ? setIsChange(true)
                    : setIsChange(false);
                  setCheckValue(e.target.value);
                }}
                checked={checkValue === 'ROLE_USER'}
              />
              <Label>일반사용자</Label>
            </Radio>
            {/* 관리자 */}
            <Radio>
              <input
                type="radio"
                name="role"
                id="adminRadio"
                value="ROLE_ADMIN"
                onChange={e => {
                  //   setIsChange(true);
                  role !== e.target.value
                    ? setIsChange(true)
                    : setIsChange(false);
                  setCheckValue(e.target.value);
                }}
                checked={checkValue === 'ROLE_ADMIN'}
              />
              <Label>관리자</Label>
            </Radio>
            <Btn
              onClick={e => {
                onSubmit(e);
              }}
              disabled={!isChange}
              id="button"
            >
              수정
            </Btn>
          </Form>
        ) : (
          <P>권한을 알 수 없습니다.</P>
        )}
      </Container>
      {/* 모달 */}
      {status && (
        <ModalContainer>
          <Modal>
            {status}
            <AcceptBtn onClick={() => setStatus(false)}>확인</AcceptBtn>
          </Modal>
        </ModalContainer>
      )}
    </div>
  );
}

const Container = styled.div`
  width: 330px;
  height: 125px;
  border: 10px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  position: fixed;
  bottom: 45px;
`;

const Title = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  width: 140px;
  height: 35px;
  border-radius: ${props => props.theme.style.borderRadius};
  background-color: ${props => props.theme.style.text};
  color: ${props => props.theme.style.white};
  font-size: ${props => props.theme.style.textmd};
  text-align: center;
  font-weight: 600;
  position: absolute;
  top: -20px;
  left: 30px;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  ${props => props.theme.variables.flex('column', 'center', '')};
  position: relative;
`;

const Radio = styled.div`
  width: 100%;
  height: 30%;
  margin-left: 20px;
  padding-top: 10px;
  color: ${props => props.theme.style.text};
`;

const Label = styled.label`
  margin-left: 5px;
`;

const Btn = styled.button`
  width: 60px;
  height: 30px;
  background-color: ${props =>
    props.disabled ? props.theme.style.lightGray : props.theme.style.skyblue};
  opacity: ${props => (props.disabled ? 0.7 : 1)};
  border: 0;
  border-radius: ${props => props.theme.style.BtnborderRadius};
  color: ${props =>
    props.disabled ? props.theme.style.white : props.theme.style.text};
  position: absolute;
  bottom: 10px;
  right: 12px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.style.blue};
    color: ${props => (props.disabled ? null : props.theme.style.white)};
  }
`;

const P = styled.p`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 115px;
  color: ${props => props.theme.style.text};
`;

const ModalContainer = styled.div`
  min-width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  z-index: 9;
`;

const Modal = styled.div`
  width: 400px;
  height: 200px;
  ${props => props.theme.variables.flex('column', '', 'center')};
  text-align: center;
  line-height: 100px;
  color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textlg};
  font-weight: 600;
  background-color: ${props => props.theme.style.white};
  border: 8px solid ${props => props.theme.style.skyblue};
  border-radius: ${props => props.theme.style.borderRadius};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const AcceptBtn = styled.button`
  width: 120px;
  height: 50px;
  border-radius: ${props => props.theme.style.BtnborderRadius};
  background-color: ${props => props.theme.style.text};
  font-size: ${props => props.theme.style.textsm};
  color: ${props => props.theme.style.white};
  border: 0;
  position: absolute;
  bottom: 30px;
  transition: 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.style.blue};
  }
`;
