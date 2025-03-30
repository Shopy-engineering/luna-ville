
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartIcon from "./CartIcon";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-40 w-full bg-white border-b">
        <div className="flex items-center justify-end p-2 md:mr-6">
          <CartIcon />
        </div>
        <Navbar />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
