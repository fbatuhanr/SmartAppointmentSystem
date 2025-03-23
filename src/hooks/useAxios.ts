import axios from 'axios';

const useAxios = () => {
    const axiosInstance = axios.create({
        baseURL: 'https://smartappointmentsystem.up.railway.app/api', // @TODO :: process.env.API_URL
        withCredentials: true, // Required to send cookies
    });
    return axiosInstance;
}
export default useAxios;
