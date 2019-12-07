import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://api.k780.com',
    timeout:5000,
  })

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
  })

  return instance(config)
}
