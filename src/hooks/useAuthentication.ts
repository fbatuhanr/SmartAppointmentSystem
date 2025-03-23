import { useAppDispatch } from "@/src/hooks/useRedux";
import { setAccessToken, clearAccessToken } from "@/src/redux/features/authSlice";
import useAxios from "@/src/hooks/useAxios";
import { isApiError } from "@/src/helpers/apiHelpers";
import { errorMessages } from "@/src/constants/errorMessages";
import { successMessages } from "../constants/messages";

const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const axiosInstance = useAxios();

  const loginCall = async (
    email: string,
    password: string
  ): Promise<string> => {
    const data = { Email: email, Password: password };
    try {
      const response = await axiosInstance.post("doctor/login", data);
      
      dispatch(setAccessToken(response.data.authToken));
      return response.data.message || successMessages.default;
    } catch (error: unknown) {
      const errorMessage =
        isApiError(error) && error.response?.data?.message
          ? error.response.data.message
          : errorMessages.default;

      throw errorMessage;
    }
  };

  const signupCall = async (
    fullName: string,
    email: string,
    password: string
  ): Promise<string> => {
    
    const data = { Name: fullName, Email: email, Password: password };
    try {
      const response = await axiosInstance.post("doctor/signup", data);
      return response.data.message;
    } catch (error: unknown) {
      const errorMessage =
        isApiError(error) && error.response?.data?.message
          ? error.response.data.message
          : errorMessages.default;

      throw errorMessage;
    }
  };

  const logoutCall = async () => {
    try {
      await axiosInstance.post("doctor/logout");
      dispatch(clearAccessToken());
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return { loginCall, signupCall, logoutCall };
};

export default useAuthentication;