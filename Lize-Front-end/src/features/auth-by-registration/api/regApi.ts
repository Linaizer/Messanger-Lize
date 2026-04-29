import axiosInstance from "../../../shared/api/axios";

const regApi = async (name: string, email: string, password: string) => {
    const respone = await axiosInstance.post('/api/auth/register', {
        name, email, password
    })
    return respone.data
}

export default regApi