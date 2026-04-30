import axiosInstance from "../../../shared/api/axios"
export const userApi = async () => {
    const response = await axiosInstance.get('/api/users/me')
    return response.data
}