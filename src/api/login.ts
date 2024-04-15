import axios from '../utils/request';
import {LoginData} from "../types.ts";

// pc端固定客户端授权id
//const clientId = import.meta.env.VITE_APP_CLIENT_ID;
const clientId = "Y29kZS1zdG9ybSUzQWNvZGUtc3Rvcm0="

export function login(data: LoginData) {
    const params = {
        appId: data.clientId || clientId,
        account: data.account,
        password: data.password || 'password'
    }
    return axios.post('/api/sys/user/login', params)
}