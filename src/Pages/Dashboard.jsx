import { FaRegUser } from "react-icons/fa";
import { RiMenuAddLine, RiTodoLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md"; 

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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-xl">
          {/* Sidebar here */}
          <li>
            <Link to="/dashboard/profile">
              <FaRegUser />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/dashboard/create">
              <MdAddToPhotos />
              Create Task
            </Link>
          </li>
          <li>
            <Link to="/dashboard/todo">
              <RiTodoLine />
              Todo List
            </Link>
          </li>
          <div className="divider "></div>
          <li>
            <Link to="/">
              <IoMdExit />
              Bact to Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
