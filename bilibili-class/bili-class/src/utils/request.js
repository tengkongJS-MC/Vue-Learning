import axios from "axios";
import qs from "querystring";

// 该文件来自于视频教程：https://www.bilibili.com/video/BV17RcMzrE4W?spm_id_from=333.788.player.switch&vd_source=acd7758fa7d74e4a5fcc5f6054b819d1&p=11

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log('400 错误：请求语义有误，请检查参数是否正确。', info);
      break;
    case 401:
      console.log('401 错误：用户未认证（未登录），请先登录。', info);
      // 通常做法：跳转到登录页
      // window.location.href = '/login';
      break;
    case 403:
      console.log('403 错误：用户无权限访问该资源。', info);
      // 可跳转至无权限提示页
      break;
    case 404:
      console.log('404 错误：请求的资源不存在。', info);
      // 可展示 404 页面
      break;
    case 405:
      console.log('405 错误：请求方法不允许。', info);
      break;
    case 408:
      console.log('408 错误：请求超时，请稍后重试。', info);
      break;
    case 429:
      console.log('429 错误：请求过于频繁，请稍后再试。', info);
      break;
    case 500:
      console.log('500 错误：服务器内部错误，请联系管理员。', info);
      // 可跳转至 500 页面
      break;
    case 502:
      console.log('502 错误：网关错误，请稍后重试。', info);
      break;
    case 503:
      console.log('503 错误：服务不可用，请稍后重试。', info);
      break;
    case 504:
      console.log('504 错误：网关超时，请稍后重试。', info);
      break;
    default:
      console.log(`未知错误 ${status}：${info || '无额外信息'}`);
  }
};

const instance = axios.create({
    //网络请求的公共配置
    timeout:5000
})

//拦截器最常用的
//发送数据之前
instance.interceptors.request.use(
    (config) => {

        if (config.method === "post"){
            config.data = qs.stringify(config.data);
        }
        //config 包含着网络请求的所有信息
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
//获取数据之前
instance.interceptors.response.use(
    (response) => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
    },
    (error) => {
        const { response } = error;
        //错误的处理才是我们最需要关注的
        errorHandle(response.status,response.info);
    }
)


export default instance;