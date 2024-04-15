import axios from 'axios'
import { notification } from "antd";

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
})


instance.interceptors.request.use(
    //请求之前处理
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    //请求错误处理
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    //处理响应数据 ..状态码在200-299之间会认为是成功的响应
    res => {
        if (res.status){
            if (res.status === 200) {
                return res.data
            }
        }
    },
    //处理错误响应
    error => {
       const status = error.response.status
        if (status === 401){
            //没有权限
            localStorage.removeItem('token');
            //重定向到登录页面
            window.location.href = '/'

            notification.error(
                {
                    message: '登录过期',
                    description:
                    error.response.data.msg,
                },
            )
        }else if (status === 403){
            notification.error(
                {
                    message: '没有权限',
                    description:
                    error.response.data.msg,
                },
            )
        }else if (status === 500){
            notification.error(
                {
                    message: '服务器发生错误，请检查服务器',
                    description:
                    error.response.data.msg,
                },
            )
        }
        return Promise.reject(error)
    }
)


// const codeMessage = {
//     200: '服务器成功返回请求的数据。',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）。',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//     405: '请求方法不被允许。',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器。',
//     502: '网关错误。',
//     503: '服务不可用，服务器暂时过载或维护。',
//     504: '网关超时。',
// };

export default instance;