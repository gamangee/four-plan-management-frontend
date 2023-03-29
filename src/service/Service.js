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

  async registerSchedule(data) {
    try {
      await this.client.post('/schedule/save', data, config);
      return alert('등록 성공');
    } catch (error) {
      return alert(error);
    }
  }

  async updateSchedule(dataId, data) {
    try {
      await this.client.post(`/schedule/update/${dataId}`, data, config);
      return alert('수정 성공');
    } catch (error) {
      return alert(error);
    }
  }

  async deleteSchedule(data) {
    try {
      await this.client.post(`/schedule/delete/${data.id}`, data, config);
      return alert('삭제 성공');
    } catch (error) {
      return alert(error);
    }
  }
}
