import axios from 'axios';
import { getCookie } from '../cookie';

const accessToken = getCookie('accessToken');

export default class Service {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://54.180.182.33:8080/',
      headers: {},
    });
  }

  setAuthToken(accessToken) {
    this.client.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  }

  // 로그인
  async login(data) {
    return this.client.post('/login', data);
  }

  // 회원가입
  async signup(data) {
    return this.client.post('/signup', data);
  }

  // 전체 스케쥴
  async schedule() {
    // console.log('Fetching!!!!!!!!🔥');
    return this.client.get(`/schedule`).then(res => console.log(res));
  }

  // 개인정보수정
  async updateUserInfo(data) {
    try {
      await this.client.post(`/account/update/${data.accountId}`, data);
      return '개인 정보 수정 완료';
    } catch (error) {
      console.error(error);
      return `${error.response.data.message}`;
    }
  }

  // 연차등록
  async registerSchedule(data) {
    try {
      await this.client.post('/schedule/save', data);
      return '등록 성공';
    } catch (error) {
      console.error(error);
      return `${error.response.data.message}`;
    }
  }

  // 연차수정
  async updateSchedule(dataId, data) {
    try {
      await this.client.post(`/schedule/update/${dataId}`, data);
      return '수정 성공';
    } catch (error) {
      console.error(error);
      return `${error.response.data.message}`;
    }
  }

  // 연차삭제
  async deleteSchedule(data) {
    try {
      await this.client.post(`/schedule/delete/${data.id}`, data);
      return '삭제 성공';
    } catch (error) {
      console.error(error);
      return `${error.response.data.message}`;
    }
  }

  // 오늘의 당직
  async todayDuty() {
    return this.client.get('/schedule/today-duty').then(res => res.data.data);
  }

  // 권한 변경
  async changeRole(data) {
    return this.client
      .post(`/admin/role/${data.id}`, data)
      .then(res => res.data.message);
  }

  // (관리자) 연차/당직 조회 요청
  async checkSchedule(id) {
    return this.client.get(`/schedule/${id}`);
  }
}
