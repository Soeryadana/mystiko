import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <>
      <li>
        {/* <Link to={href} className="text-[#241a70] text-2xl">{children}</Link> */}
        <a href={href} className="text-[#241a70] text-2xl">{children}</a>
      </li>
    </>
  );
};

export default NavLink;
