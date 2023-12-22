import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "./useAxios";


const useTasksQuery = () => {
  const axios = useAxios();
    const { user } = useContext(AuthContext);
    
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/task?email=${user.email}`);
      return res.data;
    },
  });

  return { tasks, refetch };
};

export default useTasksQuery;