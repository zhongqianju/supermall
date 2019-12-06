import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://api.k780.com',
    timeout:5000,
  })
}