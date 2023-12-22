import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:py-16 px-6 gap-10">
        <div className="flex-1 flex flex-col justify-between lg:pl-16 py-14  ">
          <h2 className="text-4xl font-semibold">
            Empowering Your Productivity, <br /> One Task at a Time!
          </h2>
          <p className="text-justify  my-5 max-w-[65ch]">
            TaskMaster Pro is your ultimate task management solution, providing
            a streamlined platform to organize, prioritize, and accomplish your
            tasks efficiently. Seamlessly manage projects, set deadlines, and
            collaborate with your team to boost productivity. Experience the
            power of simplified task management with TaskMaster Pro.
          </p>
          <div className="flex gap-5">
            <Link
              to="/dashboard/profile"
              className="btn btn-sm lg:btn-md btn-outline"
            >
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
