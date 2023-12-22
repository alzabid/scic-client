import Tasks from "../Components/Tasks";

const TodoList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* box-1 */}
      <Tasks
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Todo"}
      ></Tasks>
      {/* box-2 */}
      <Tasks
        className="border-2 p-2 min-h-96 min-w-80"
        status={"OnGoing"}
      ></Tasks>
      {/* box-3 */}
      <Tasks
        className="border-2 p-2 min-h-96 min-w-80"
        status={"Complete"}
      ></Tasks>
    </div>
  );
};

export default TodoList;
