import axios from 'axios'

export default function request(url, options = {}) {
  const defaultOptions = {
    url,
    timeout: 60000,
    method: "GET",
    data: (options && options.body) || {},
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
  }

  if (newOptions.method === 'GET') {
    newOptions.params = {
      _t: Date.parse(new Date()) / 1000,
      ...newOptions.params
    }
  }

  return axios.request(newOptions)
    .then(checkStatus)
    .catch((error) => {
      const { response = {} } = error
      return { success: false, ...response };
    });
}

function checkStatus(response) {
  if (Object.keys(response).length === 0) {
    const error = new Error('接口错误')
    error.name = '接口错误1'
    error.response = response;
    throw error;
  }
  if (response.ERRORCODE === '0') {
    const error = new Error(response.RESULT || '接口错误')
    error.name = '接口错误2'
    error.response = response;
    throw error;
  }
  response.success = true
  return response;
}