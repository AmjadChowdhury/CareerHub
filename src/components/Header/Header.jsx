import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const links = <>
     <NavLink to="/"><li className="md:btn md:text-xl font-bold mr-1 rounded-lg p-2 mb-1">Home</li></NavLink>
     <NavLink to="/applied"><li className="md:btn md:text-xl font-bold mr-1 rounded-lg p-2 mb-1">Applied Jobs</li></NavLink>
     <NavLink to="/blog"><li className="md:btn md:text-xl font-bold rounded-lg p-2">Blog</li></NavLink>
    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl font-extrabold text-blue-950">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-blue-700 text-xl text-white font-bold">Hire me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
