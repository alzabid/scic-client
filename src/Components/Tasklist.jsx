/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useDrag } from "react-dnd";
import { MdAutoDelete } from "react-icons/md";


const Tasklist = ({ task, refetch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);
  const axios = useAxios();
  
    
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/task/${id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted",
            icon: "success",
          });
        });
      }
    });
  };


  return (
    <div
      ref={drag}
      className={`rounded-lg rounded-t-md border-t-4 border-primary-red p-7 ${
        isDragging ? "opacity-25" : "opacity-100"
      } shadow-xl cursor-grab`}
    >
      <div className="mb-8">
        <h3 className="mb-1.5 text-xl font-semibold text-neutral-darkBlue">
          Title: {task.title}
        </h3>
        <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-100">
          Priority:{" "}
          <span className="badge badge-secondary badge-outline">
            {task.priority}
          </span>
        </p>
        <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-80">
          Description: {task.description}
        </p>
        <p className="text-sm leading-6 tracking-wide text-neutral-darkBlue opacity-100">
          Deadline: {task.deadline}
        </p>
      </div>
      <button
        onClick={() => handleDelete(task._id)}
        className="btn btn-sm bg-red-500 "
      >
        Delete
        <MdAutoDelete />
      </button>
    </div>
  );
};

export default Tasklist;