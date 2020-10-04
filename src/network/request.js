import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/h8/',
    timeout:500
  })

  //拦截器
  instance.interceptors.request.use(config => {
    return config
  },error => {

  })

  //响应器
  instance.interceptors.response.use(res => {
    return res.data
  },error => {

  })
  return instance(config)
}
