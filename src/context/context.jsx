import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Service from '../service/Service';

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [user, setUser] = useState({});
  const service = new Service();

  // const [value, setValue] = useState({
  //   id: user.id,
  //   start_date: startDay,
  //   end_date: endDay,
  //   scheduleType: 'YEARLY',
  // });

  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    axios.get('/user/userLogin.json').then(res => setUser(res.data.user));
    axios.get('/user/schedule.json').then(res => setSchedule(res.data.users));
  }, []);
  // useEffect(() => {
  //   axios.get('/user/userLogin.json').then(res => setUser(res));
  // }, []);

  useEffect(() => {
    if (user.length > 0) {
      const newUser = schedule.filter(
        user => user.Schedule.account_id === user.accountId
      );
      setUser(newUser);
    }
  }, [user]);

  // console.log(user);

  return (
    <ApiContext.Provider value={{ service, user, setUser }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useService() {
  return useContext(ApiContext);
}
