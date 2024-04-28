import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div
        className="flex-grow bg-indigo-200 text-black
                  dark:bg-indigo-800 dark:text-white"
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
