/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpdateModal = ({ _id }) => {
    console.log(_id);
//   const { user } = useContext(AuthContext);
  const axios = useAxios();
//   const { id } = useParams();
  const { register, handleSubmit, } = useForm();

  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks", _id],
    queryFn: async () => {
      const res = await axios.get(`/tasks/${_id}`);
      return res.data;
    },
  });

  console.log(tasks);

  const { title, description, deadline, priority } = tasks;

    const onSubmit = (data) => {
      console.log(data);
    // const taskInfo = {
    //   email: user?.email,
    //   name: user?.displayName,
    //   photoURL: user?.photoURL,
    //   title: data.title,
    //   description: data.description,
    //   deadline: data.deadline,
    //   priority: data.priority,
    // };
    // axios.put("/task", taskInfo).then((res) => {
    //   console.log(res.data);
    //   reset();

    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "You successfully updated task !",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // });
  };
  return (
    <div>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Title</span>
            </label>

            <input
              type="text"
              defaultValue={title}
              className="input input-bordered w-full"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Description</span>
            </label>

            <input
              type="text"
              defaultValue={description}
              className="input input-bordered w-full"
              {...register("description", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Deadline</span>
            </label>

            <input
              type="date"
              defaultValue={deadline}
              className="input input-bordered w-full"
              {...register("deadline", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Deadline</span>
            </label>

            <select
              className="select select-bordered w-full max-w-xs"
              defaultValue={priority}
              {...register("priority")}
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <button className="btn btn-info w-full mt-4" type="submit">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
