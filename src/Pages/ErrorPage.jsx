import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Error from "../assets/404.json"


const ErrorPage = () => {
    return (
      <div className=" max-w-7xl mx-auto">
        <div className=" h-[80vh] flex flex-col justify-center items-center">
          <Lottie animationData={Error} loop={true}></Lottie>
          <Link to={"/"}>
            <button className="btn btn-sm md:btn-md btn-primary">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;