import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getProductLoacalStorage, getWisthListLocalStorage } from "../Utilites";
const Nabvar = () => {          
    const { pathname } = useLocation();
    const products = getProductLoacalStorage();
    const wihsList = getWisthListLocalStorage();
    return (
        <div className="w-11/12 mx-auto pt-3 mt-2">
            {
                pathname == '/' ?
                    <div className={`navbar bg-[#9538E2] rounded-t-xl `}>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
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
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base">
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-black px-2 py-2 rounded-md' : ''}`}
                                        to="/">Home</NavLink>
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'btn-sm' : ''}`}
                                        to="/statistic">Statistics</NavLink>
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'btn-sm' : ''}`}
                                        to="/dashboard">Dashboard</NavLink>
                                </ul>
                            </div>
                            <Link to='/' className="btn btn-ghost text-xl text-white">Gadget Heaven</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className={`menu menu-horizontal px-1 space-x-10 text-white text-base`}>
                                <NavLink
                                    className={({ isActive }) => `font-bold ${isActive ? 'bg-white text-black px-3 py-3 rounded-md' : 'white'}`}
                                    to="/">Home</NavLink>
                                <NavLink
                                    className={({ isActive }) => `font-bold ${isActive ? 'bg-white text-black px-3 py-3 rounded-md' : ''}`}
                                    to="/statistic">Statistics</NavLink>
                                <NavLink
                                    className={({ isActive }) => `font-bold ${isActive ? 'bg-white text-black px-3 py-3 rounded-md' : ''}`}
                                    to="/dashboard">Dashboard</NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end space-x-1 sm:space-x-4">
                            <div className="bg-white p-2 rounded-full flex items-center relative"><TiShoppingCart size={18} /><span className="absolute -top-3 right-0 font-semibold text-[#272525] text-lg">{products.length}</span> </div>
                            <div className="bg-white p-2 rounded-full relative"><AiOutlineUnorderedList size={18} /><span className="absolute -top-3 -right-1 font-semibold text-[#272525] text-lg">{wihsList.length}</span></div>
                        </div>
                    </div>
                    :
                    <div className={`navbar rounded-t-lg `}>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-black"
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
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base">
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-black px-3 py-3 rounded-md' : 'text-black'}`}
                                        to="/">Home</NavLink>
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-red-400 px-2 py-2 rounded-md' : 'text-black'}`}
                                        to="/statistic">Statistics</NavLink>
                                    <NavLink
                                        className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-black px-2 py-2 rounded-md' : 'text-black'}`}
                                        to="/dashboard">Dashboard</NavLink>
                                </ul>
                            </div>
                            <Link to='/' className="btn btn-ghost text-xl text-black">Gadget Heaven</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className={`menu menu-horizontal px-1 space-x-10 text-white text-base`}>
                                <NavLink
                                    className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-black px-3 py-3 rounded-md' : 'text-black'}`}
                                    to="/">Home</NavLink>
                                <NavLink
                                    className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-black px-3 py-3 rounded-md' : 'text-black'}`}
                                    to="/statistic">Statistics</NavLink>
                                <NavLink
                                    className={({ isActive }) => `font-bold ${isActive ? 'text-white bg-black px-3 py-3 rounded-md' : 'text-black'}`}
                                    to="/dashboard">Dashboard</NavLink>
                            </ul>
                        </div>
                        <div className="navbar-end space-x-1 sm:space-x-4">
                            <div className="bg-gray-300 p-2 rounded-full relative"><TiShoppingCart size={18} /><span className="absolute -top-4 -right-1 font-semibold text-black text-lg">{products.length}</span> </div>
                            <div className="bg-gray-300 p-2 rounded-full relative"><AiOutlineUnorderedList size={18} /><span className="absolute -top-4 -right-1 font-semibold text-black text-lg">{wihsList.length}</span> </div>
                        </div>
                    </div>
            }
        </div>
    );
};


export default Nabvar; 
