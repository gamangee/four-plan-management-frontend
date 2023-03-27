import axios from 'axios';

export default class Service {
  async schedule() {
    console.log('Fetching!!!!!!!!🔥');
    return axios.get(`/user/schedule.json`).then(res => res.data.users);
  }
}
