import axios from 'axios';

const useAuthCall = () => {
  const register = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/users`);
      console.log(response);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  return { register };
};

export default useAuthCall;
