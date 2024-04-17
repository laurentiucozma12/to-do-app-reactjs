import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <div
      className=" h-screen bg-[#ebd7fa] text-[#595014] 
                  dark:bg-[#301c4d] dark:text-[#fafab5]"
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
