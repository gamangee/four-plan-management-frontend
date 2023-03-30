import axios from 'axios';
import { resolveConfig } from 'prettier';

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

  // 로그인
  async login(data) {
    return this.client.post('/login', data, config);
  }

  // 회원가입
  async signup(data) {
    return this.client.post('/signup', data, config).then(res => res.status);
  }

  // 전체 스케쥴
  async schedule() {
    // console.log('Fetching!!!!!!!!🔥');
    return this.client.get(`/schedule`).then(res => res.data.users);
  }

  // 개인정보수정
  async updateUserInfo(data) {
    try {
      await this.client.post(`/account/update/${data.accountId}`, data, config);
      return '개인 정보 수정 완료';
    } catch (error) {
      console.error(error);
      return `${error.response.data.message}`;
    }
  }

  // 연차등록
  async registerSchedule(data) {
    try {
      await this.client.post('/schedule/save', data, config);
      return alert('등록 성공');
    } catch (error) {
      return alert(error);
    }
  }

  // 연차수정
  async updateSchedule(dataId, data) {
    return this.client
      .post(`/schedule/update/${dataId}`, data, config)
      .then(() => alert('수정 성공'))
      .catch(error => alert(error));
  }

  // 연차삭제
  async deleteSchedule(data) {
    return this.client
      .post(`/schedule/delete/${data.id}`, data, config)
      .then(() => alert('삭제 성공'))
      .catch(error => alert(error));
  }
}
