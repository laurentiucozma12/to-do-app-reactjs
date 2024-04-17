import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState(null);

  // Check if your browser prefers light / dark mode and loads it first
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div
        className=" h-screen bg-[#ebd7fa] text-[#595014] 
                  dark:bg-[#301c4d] dark:text-[#fafab5]"
      >
        <Navbar handleThemeSwitch={handleThemeSwitch} />
        <Main />
        <Footer />
      </div>
    </>
  );
}
