import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home";


const MainLayout = () => {
    return (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
};

export default MainLayout;