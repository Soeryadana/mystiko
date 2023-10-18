// import NavLink from "../elements/NavLink";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-base-100  m-0 lg:px-24 shadow-md flex justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/encrypt">Encrypt</Link>
              </li>
              <li>
                <Link to="/decrypt">Decrypt</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl w-[70%] md:w-[40%] lg:w-[35%] hidden lg:flex"
          >
            <img src="/image/mystiko-brand.png" alt="mystiko.io" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#241a70] text-2xl">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#493e9c" : "",
                    color: isActive ? "#fff" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/encrypt"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#493e9c" : "",
                    color: isActive ? "#fff" : "",
                  };
                }}
              >
                Encrypt
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/decrypt"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#493e9c" : "",
                    color: isActive ? "#fff" : "",
                  };
                }}
              >
                Decrypt
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl w-[35%] md:w-[20%] lg:hidden flex justify-end"
        >
          <img src="/image/mystiko-brand.png" alt="mystiko.io" />
        </Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
