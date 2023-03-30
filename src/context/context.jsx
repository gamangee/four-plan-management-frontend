import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Service from '../service/Service';

export const ApiContext = createContext();

export const color = {
  ANNAUL_COLOR: '#D3D3D3', //휴가
  DUTY_COLOR: '#FF9AA2', // 당직
  DEV_DEPT_COLOR: '#B5EAD7', //개발x팀
  HR_DEPT_COLOR: '#C7CEEA', //인사
  DESIGN_DEPT_COLOR: '#FFB7B2', //디자인
};

export function ApiProvider({ children }) {
  const [user, setUser] = useState({});

  const service = new Service();

  // useEffect(() => {
  //   axios.get('/user/userLogin.json').then(res => setUser(res));
  // }, []);

  return (
    <ApiContext.Provider value={{ service, user, color, setUser }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useService() {
  return useContext(ApiContext);
}
