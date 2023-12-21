import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:py-16 px-6 gap-10">
        <div className="flex-1 flex flex-col justify-between lg:pl-16 py-14  ">
          <h2 className="text-4xl">Title</h2>
          <p className="text-justify  my-5 max-w-[65ch]">
            An online group study website is a virtual platform designed to
            facilitate collaborative learning and study sessions among students
            or individuals with common educational goals. It typically offers
            work together on academic assignments, projects, or exam
            preparation. These websites promote a sense of community and
            accountability while providing a flexible and accessible environment
            for productive group study sessions.
          </p>
          <div className="flex gap-5">
            
            <Link to="/dashboard/profile" className="btn btn-sm lg:btn-md btn-outline">
              Explore More
            </Link>
          </div>
        </div>
        <div className="h-[400px] w-ful flex-1 overflow-hidden ">
          <img
            src="/banner.png"
            alt="landing"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
