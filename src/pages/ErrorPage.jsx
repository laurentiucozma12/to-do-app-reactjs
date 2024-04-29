import { useLocation } from 'react-router-dom';

export default function ErrorPage() {
  const location = useLocation();

  return (
    <div id="error-page" className="text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Could not find {location.pathname}</i>
      </p>
    </div>
  );
}
