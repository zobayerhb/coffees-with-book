import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayouts = () => {
  return (
    <div>
      {/* navbar */}
      <NavBar />
      {/* section */}
      <div className="min-h-[calc(100vh-292px)] container mx-auto py-10">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayouts;
