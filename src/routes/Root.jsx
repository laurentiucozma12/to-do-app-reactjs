import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div
      id="rootChild"
      className=" h-screen bg-indigo-200 text-black 
                  dark:bg-indigo-800 dark:text-white"
    >
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
