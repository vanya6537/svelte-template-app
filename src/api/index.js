import axios from 'axios';

import { Endpoints } from './endpoints';

export const BASE_URL = 'https://hr.oat.taocloud.org/v1';

export const AXIOS_BASE_SETTINGS = {
  headers: {
    // accept: '*/*',
    'content-type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
  },
};

const request = axios.create({
  ...AXIOS_BASE_SETTINGS,
});

const Api = {
  getUsers: async ({ name, limit, offset }) => {
    try {
      return await request
        .get(`${BASE_URL}${Endpoints.users}`, {
          params: { name, limit, offset },
        })
        .then(({ data }) => data)
        .catch((err) => err);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getUserById: async ({ userId }) => {
    try {
      return await request.get(`${BASE_URL}${Endpoints.userById(userId)}`).then(({ data }) => data);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default Api;
