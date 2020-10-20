import axios from "axios";

// axios的全局配置
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const http = axios.create({
  baseURL: "/api",
  timeout: 5000,
  withCredentials: true, //跨域携带 cookie
  xsrfCookieName: "xsrf-token", //当创建实例的时候配置默认配置
});

export default http;
