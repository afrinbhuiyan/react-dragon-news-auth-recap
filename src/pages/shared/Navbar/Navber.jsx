import { Link, NavLink } from "react-router-dom";
import UserDefaultPicture from "../../../assets/user.png"
import './Navbar.css'

const Navber = () => {
    const navLinks = <>
        <li><NavLink to={'/'} >Home</NavLink></li>
        <li><NavLink to={'/about'} >About</NavLink></li>
        <li><NavLink to={'/career'} >Career</NavLink></li>
        <li><NavLink to={'/login'} >Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={UserDefaultPicture} />
                        </div>
                    </div>
                    <Link className="bg-[#111111be] text-white py-2 px-10 hover:bg-[#e93c3c]" to={'/login'} ><button>Login</button></Link>
                </div>
            </div>
            );
};

            export default Navber;