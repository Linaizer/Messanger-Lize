import axiosInstance from "../../../shared/api/axios";

export const chatApi = async()=>{
    const  response = await axiosInstance.get('/api/chats')
    return response.data
}