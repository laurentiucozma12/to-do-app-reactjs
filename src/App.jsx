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
    <main className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <button
        className="rounded-3xl bg-green-200 p-4"
        onClick={handleThemeSwitch}
      >
        Dark Mode
      </button>
    </main>
  );
}
