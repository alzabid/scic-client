/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import useAxios from "../Hooks/useAxios";
import useTasksQuery from "../Hooks/useTasksQuery";
import Tasklist from "./Tasklist";


const Tasks = ({ status }) => {
  const axios = useAxios();
    const { tasks, refetch } = useTasksQuery();
    
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    axios.patch(`/tasks/${id}`, { status }).then((res) => {
      refetch();
    });
  };
  console.log(tasks);
  const todos = tasks.filter((task) => task.status === status);
    return (
        <div ref={drop} className={`${isOver ? "" : ""}`}>
              
      <div className=" flex flex-col gap-5 border-2 p-2 min-h-96 min-w-80">
        <h1 className="text-3xl text-center font-bold my-2">{status}</h1>
        
        {todos.map((task, index) => (
          <Tasklist
            key={index}
            task={task}
            refetch={refetch}
            status={status}
          ></Tasklist>
        ))}
    </div>
    </div>
        
    );
};

export default Tasks;