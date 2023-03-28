import axios from 'axios';

const config = {
  headers: { 'content-type': 'application/json' },
};

export default class Service {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://c07f9dfe-726b-48c1-b276-4c4c6e89ee87.mock.pstmn.io',
    });
  }
  async schedule() {
    // console.log('Fetching!!!!!!!!🔥');
    return axios.get(`/user/schedule.json`).then(res => res.data.users);
  }

  updateUserInfo(data) {
    return this.client.post(`/account/update/${data.accountId}`, data, config);
  }

  registerSchedule(data) {
    return this.client.post('/schedule/save', data, config);
  }

  updateSchedule(data) {
    return this.client.post(`/schedule/update/${data.id}`, data, config);
  }

  deleteSchedule(data) {
    return this.client.post(`/schedule/delete/${data.id}`, data, config);
  }
}
