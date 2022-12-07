import axios from "axios";
import {UserLoginType} from "../redux/authReducer";

const key = 'f267d306-2e26-49e4-8305-d841bf1e2061'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {'API-KEY': key}
});
export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    followRequestUser: (userId: number) => {
        return instance.post(`/follow/${userId}`)
    },
    unfollowRequestUser: (userId: number) => {
        return instance.delete(`/follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`/profile/${userId}`)
    },
    getStatus:(userId:string)=>{
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus:(status:string)=>{
        return instance.put(`/profile/status`, {status})
    }
}
export const loginAPI={
    login: (email:string,password:string,rememberMe:boolean=false) => {
        return instance.post(`/auth/login`, {email,password,rememberMe})
    },
    logout: () => {
        return instance.delete(`/auth/login`)
    },
    authMe: () => {
        return instance.get(`/auth/me`,)
            .then(response => response.data)
    }
}



