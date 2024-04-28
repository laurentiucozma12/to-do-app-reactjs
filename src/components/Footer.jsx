export default function Footer() {
  const today = new Date();
  return (
    <>
      <footer className="bg-indigo-100 px-3 py-2 text-center duration-700 hover:text-blue-700 dark:bg-indigo-700 dark:text-white hover:dark:text-blue-200">
        <a href="https://linkedin.com/in/laurentiu-cozma" target="_blank">
          {today.getFullYear()} Copyright Laurențiu Cozma
        </a>
      </footer>
    </>
  );
}
