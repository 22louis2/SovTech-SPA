import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center p-4 text-white">
      <h4 className="text-lg">SovTech</h4>
      <div>
        <ul className="space-x-2 flex md:space-x-4">
          {location.pathname !== "/" && (
            <li className="headerLink">
              <Link to="/">Categories</Link>
            </li>
          )}
          
          {location.pathname !== "/people" && (
            <li className="headerLink">
              <Link to="/people">People</Link>
            </li>
          )}

          {location.pathname !== "/search" && (
            <li className="headerLink">
              <Link to="/search">Search</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
