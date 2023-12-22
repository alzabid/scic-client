import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://scic-server.vercel.app",
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
