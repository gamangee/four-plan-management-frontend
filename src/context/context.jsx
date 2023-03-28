import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Service from '../service/Service';

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [user, setUser] = useState({});
  const service = new Service();

  useEffect(() => {
    axios.get('/user/userLogin.json').then(res => setUser(res.data.user));
  }, []);

  return (
    <ApiContext.Provider value={{ service, user }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useService() {
  return useContext(ApiContext);
}
