import { RiMenuAddLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <Outlet />
      </div>
      <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
        <RiMenuAddLine />
      </label>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/create">Create Task</Link>
          </li>
          <li>
            <Link to="/dashboard/todo">Todo List</Link>
          </li>
          <div className="divider "></div>
          <li>
            <Link to="/"> Exit</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;