import { LuBookOpen } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/books">Listed Books</NavLink>
            </li>
            <li>
                <NavLink to="/pages">Pages to read</NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                        <li>
                            <a className="btn bg-[#22be0b] text-white">
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a className="btn bg-[#5ac2d3] text-white">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
                <a className="text-3xl font-bold text-[#22be0b] flex items-center gap-2">
                    <LuBookOpen />
                    Boi Poka
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#22be0b] text-white mr-2 hidden md:flex">
                    Sign In
                </a>
                <a className="btn bg-[#5ac2d3] text-white ml-2 hidden md:flex">
                    Sign Up
                </a>
                <i className="w-[40px] h-[40px] border-2 border-[#22be0b] flex justify-center items-center rounded-full text-2xl text-[#22be0b] fa-solid fa-book-open-reader md:hidden"></i>
            </div>
        </div>
    );
};

export default NavBar;
