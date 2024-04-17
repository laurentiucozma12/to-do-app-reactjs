import PropTypes from 'prop-types';

export default function Navbar({ handleThemeSwitch }) {
  console.log(handleThemeSwitch);
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

Navbar.propTypes = {
  handleThemeSwitch: PropTypes.func.isRequired,
};
