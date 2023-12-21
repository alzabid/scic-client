/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";


const Form = ({ onAddTask }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAddTask(data);
    reset(); 
  };
  return (
    <div className="">
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
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* <label>Title</label>
        <input {...register("title", { required: true })} /> */}

          {/* <label>Description:</label>
        <input {...register("description")} /> */}

          {/* <label>Deadline:</label>
        <input type="date" {...register("deadline")} /> */}

          {/* <label>Priority:</label>
        <select {...register("priority")}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select> */}

          <button className="btn btn-info" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
