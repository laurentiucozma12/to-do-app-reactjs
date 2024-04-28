import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

export default function Navbar() {
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
      <nav className="flex h-12 justify-between bg-indigo-100 px-3 py-2 dark:bg-indigo-700">
        <Link to={'/'} className="flex flex-col justify-center">
          <div className="flex">
            <img
              className="mr-2 h-5 w-5 xl:h-7 xl:w-7"
              src="/src/assets/react.webp"
              alt="react icon"
            />
            <p className="text-sm font-bold duration-700 hover:text-blue-700 dark:text-white hover:dark:text-[#60DAF9] xl:text-xl">
              To Do App React JS
            </p>
          </div>
        </Link>
        <div className="flex flex-col justify-center text-sm xl:text-base">
          <div>
            <Link
              to={'/'}
              className="mr-2 duration-700 hover:text-blue-700 dark:text-white hover:dark:text-[#60DAF9]"
            >
              Home
            </Link>
            <Link
              to={'/contact'}
              className="mr-2 duration-700  hover:text-blue-700 dark:text-white hover:dark:text-[#60DAF9]"
            >
              Contact
            </Link>
            {theme === 'dark' ? (
              <MoonOutlined
                onClick={handleThemeSwitch}
                className="text-lg text-white duration-700 hover:dark:text-[#60DAF9]"
              />
            ) : (
              <SunOutlined
                onClick={handleThemeSwitch}
                className="text-lg duration-700 hover:text-orange-600"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
