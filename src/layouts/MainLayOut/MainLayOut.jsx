import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer/Footer";
import Header from "../../components/shared/Header/Header";

const MainLayOut = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
