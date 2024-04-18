import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <main className="px-3 py-2">
        <Outlet />
      </main>
    </>
  );
}
