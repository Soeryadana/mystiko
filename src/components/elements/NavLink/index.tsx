import React from "react";

interface NavLinkProps {
    href: string;
    children: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <>
      <li>
        <a href={href} className="text-[#241a70] text-2xl">{children}</a>
      </li>
    </>
  );
};

export default NavLink;
