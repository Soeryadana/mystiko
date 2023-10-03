import NavLink from "../elements/NavLink";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 px-24 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl w-1/6">
          <img src="/image/mystiko-brand.png" alt="mystiko.io"  />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/encrypt">Encrypt</NavLink>
          <NavLink href="/decrypt">Decrypt</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
