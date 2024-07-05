//封装axios
import axios from 'axios'
//创建axios实例
const request = axios.create({
    baseURL: '/api',//基础路径
    timeout: 5000//超时时间
});
//请求拦截器
request.interceptors.request.use(config => {
    return config
})
//响应拦截器
request.interceptors.response.use(response => {
    //返回成功响应数据
    return response.data
}, error => {
    //处理失败的错误
    return Promise.reject(new error(error.message))
})
//对外暴露axios
export default request;