import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
              className="mr-2"
              src="/src/assets/react.webp"
              alt="react icon"
              width="30"
            />
            <p className="text-xl font-bold duration-700 hover:text-blue-700 dark:text-white hover:dark:text-[#60DAF9]">
              To Do App React JS
            </p>
          </div>
        </Link>
        <div className="flex flex-col justify-center">
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
            <input
              type="checkbox"
              id="check"
              // className="hidden"
              onClick={handleThemeSwitch}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
