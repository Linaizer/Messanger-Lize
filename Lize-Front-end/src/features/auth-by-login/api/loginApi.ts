import axiosInstance from "../../../shared/api/axios";

export const loginApi = async(email:string, password:string)=>{
    const response = await axiosInstance.post('/api/auth/login',{
       email,password
    })
    return response.data
}