import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Providers/AuthProvider";


const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
      <>
        <Helmet>
          <title> Profile</title>
        </Helmet>
        <div className="flex justify-center items-center h-screen">
          <div className="card w-72 bg-base-100 shadow-xl border-t-4 ">
            <figure>
              <div className="avatar mt-6">
                <div className="w-48 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title"> Name: {user?.displayName}</h2>
                
              </div>
              <p>Email: {user?.email}</p>
            
            </div>
          </div>
        </div>
      </>
    );
};

export default MyProfile;