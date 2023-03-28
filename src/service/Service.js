import axios from 'axios';

export default class Service {
  async schedule() {
    // console.log('Fetching!!!!!!!!🔥');
    return axios.get(`/user/schedule.json`).then(res => res.data.users);
  }
}

export const client = axios.create({
  baseURL: 'https://87ab77be-f720-47c5-a4cc-e60ae02ad69f.mock.pstmn.io',
});

const config = {
  headers: { 'content-type': 'application/json' },
};

export const registerSchedule = data => {
  return client.post('/schedule/save', data, config);
};

export const updateSchedule = (data, id) => {
  return client.post(`/schedule/update/${id}`, data);
};

export const deleteSchedule = (data, id) => {
  return client.post(`/schedule/delete/${id}`, data);
};
