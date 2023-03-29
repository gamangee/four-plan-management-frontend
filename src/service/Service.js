import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/json',
    // Authorization: 'Bearer [JWT token]',
  },
};

export default class Service {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3000/',
    });
  }
  async schedule() {
    // console.log('Fetching!!!!!!!!🔥');
    return this.client.get(`/user/schedule`).then(res => res.data.users);
  }

  updateUserInfo(data) {
    return this.client.post(`/account/update/${data.accountId}`, data, config);
  }

  async registerSchedule(data) {
    try {
      await this.client.post('/schedule/save', data, config);
      return alert('등록 성공');
    } catch (error) {
      return alert(error);
    }
  }

  async updateSchedule(dataId, data) {
    return this.client
      .post(`/schedule/update/${dataId}`, data, config)
      .then(() => alert('수정 성공'))
      .catch(error => alert(error));
  }

  async deleteSchedule(data) {
    return this.client
      .post(`/schedule/delete/${data.id}`, data, config)
      .then(() => alert('삭제 성공'))
      .catch(error => alert(error));
  }
}
