/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useAxios from "../Hooks/useAxios";

const Create = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const taskInfo = {
      email: user?.email,
      name: user?.displayName,
      photoURL: user?.photoURL,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
      status:"Todo",
    };
    axios.post("/task", taskInfo).then((res) => {
      console.log(res.data);
      reset();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "You successfully added task !",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-5 pt-8 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  gap-5 p-5 backdrop-blur-sm bg-white bg-opacity-30 shadow-lg rounded-lg"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Task Title</span>
            </label>

            <input
              type="text"
              placeholder="Task Title"
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
              placeholder="Task Description"
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
              placeholder="Task Deadline"
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
              {...register("priority")}
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>
          <button className="btn btn-info" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
