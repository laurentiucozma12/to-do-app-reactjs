import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div
      className=" h-screen bg-indigo-200 text-black 
                  dark:bg-indigo-800 dark:text-white"
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
