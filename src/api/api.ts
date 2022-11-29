import axios from "axios";

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
    getProfile:(userId:string)=>{
        return instance.get(`/profile/${userId}`)
    }
}

export const authMe = () => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,)
        .then(response => response.data)
}
export const followersAPI = {
    followRequestUser: (userId: number) => {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollowRequestUser: (userId: number) => {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}

