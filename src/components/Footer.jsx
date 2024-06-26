export default function Footer() {
  const today = new Date();
  return (
    <>
      <footer className="bg-indigo-100 px-3 py-1 text-center text-sm duration-700 hover:text-blue-700 dark:bg-indigo-700 dark:text-white hover:dark:text-blue-200 xl:py-2 xl:text-base">
        <a href="https://linkedin.com/in/laurentiu-cozma" target="_blank">
          {today.getFullYear()} Copyright Laurențiu Cozma
        </a>
      </footer>
    </>
  );
}
