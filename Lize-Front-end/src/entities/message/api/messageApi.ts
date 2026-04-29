import axiosInstance from "../../../shared/api/axios";

export const messageApi = async (chatId: number) => {
    const response = await axiosInstance.get(`/api/chats/${chatId}/messages`)
    return response.data
}
