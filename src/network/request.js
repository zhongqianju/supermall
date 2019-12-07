import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/v1',
    timeout:5000
  });

  instance.interceptors.request.use(config =>{
    return config
  },error => {
    //发送不出去来到这儿
    console.log(error)
  });

  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err);
  });

  return instance(config)
}

export function requestOther() {
  const instanceOther = axios.create({
    baseURL:'http://api.k780.com',
    timeout:5000,
  })
}
