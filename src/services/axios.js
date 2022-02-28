import axios from "axios"

export default function request(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:9001/',
      timeout: 10000
    })
    // 配置
    instance.interceptors.request.use(config => {
      // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
      // 3.对请求的参数进行序列化(看服务器是否需要序列化)
      // config.data = qs.stringify(config.data)
      return config;
    }, error => {
      return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
      // Do something before response is sent
      return response.data;
    }, error => {
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '请求错误'
            break
          case 401:
            error.message = '未授权的访问'
            break;
          default:
            error.message = '其他错误信息'
        }
      }
      return Promise.reject(error);
    });
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  });
}