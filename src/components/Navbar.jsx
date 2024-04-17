import { useState, useEffect } from 'react';

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
      <nav className="flex justify-between py-2">
        <a href="/">To Do App React JS</a>
        <input
          type="checkbox"
          id="check"
          // className="hidden"
          onClick={handleThemeSwitch}
        />
      </nav>
    </>
  );
}
