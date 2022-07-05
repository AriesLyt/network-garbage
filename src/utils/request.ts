import axios from "axios";

const baseURL:any = "/api"

axios.defaults.withCredentials = true

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 10000
})

service.interceptors.request.use(config => {
  console.log(config);
  return config 
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export function get(url:string, params:any = {})  {
  try{
   return service({
     url,
     params,
     method:'GET',
   })
  }catch(error){
    console.error('get:', error);
  }
}

export function post(url:string, data: any={}){
  console.log('post send?')
  try {
    return service({
      url,
      data,
      method: 'POST',
    });
  } catch (error) {
    console.error('post:', error);
  }
}