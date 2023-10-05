// import NavLink from "../elements/NavLink";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <>
      <nav className="navbar bg-base-100 px-24 shadow-md">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl w-1/6">
            <img src="/image/mystiko-brand.png" alt="mystiko.io" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-[#241a70] text-2xl">
            <li>
              <NavLink to="/" style={({isActive}) => {
                  return {
                    backgroundColor: isActive ? "#493e9c" : "",
                    color: isActive ? "#fff" : "",
                  };
              } }  
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/encrypt" style={({isActive}) => {
                  return {
                    backgroundColor: isActive ? "#493e9c" : "",
                    color: isActive ? "#fff" : "",
                  };
              } }  
              >Encrypt</NavLink>
            </li>
            <li>
              <NavLink to="/decrypt" style={({isActive}) => {
                  return {
                    backgroundColor: isActive ? "#493e9c" : "",
                    color: isActive ? "#fff" : "",
                  };
              } }  
              >Decrypt</NavLink>
            </li>
            
            {/* <NavLink href="/">Home</NavLink>
          <NavLink href="/encrypt">Encrypt</NavLink>
          <NavLink href="/decrypt">Decrypt</NavLink> */}
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
