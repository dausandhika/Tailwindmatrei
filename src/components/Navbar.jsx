import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

const Navbar = () => {

    const [getTheme, setTheme] = useContext(ThemeContext);
    const root = window.document.documentElement;

    console.log(getTheme)
    const handleTheme = () => {
        if (getTheme == "light"){
            setTheme("dark");
            root.classList.remove("light");
            root.classList.add("dark");
        } else {
            setTheme("light")
            root.classList.remove("dark");
            root.classList.add("light");
        }
    }

  return (
    <div>
        <div className="navbar bg-base-100 dark:bg-slate-900 dark:text-white">
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
                <li><Link to ="/profil">Item 1</Link></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><>Item 3</></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link to ="/">Item 1</Link></li>
            <li><Link to ="/profil">Item 3</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
        <label className="grid cursor-pointer place-items-center">
            <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                onChange={() => handleTheme()}
                checked={getTheme == "light" ? false : true}
                />
                
            <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </label>
        </div>
        </div>
    </div>
  )
}

export default Navbar