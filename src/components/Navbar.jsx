import React from "react";

function Navbar() {
  return (
    <div className="navbar blue">
      <div className="flex-1 rounded-xl ">
        <a
          className="px-4 py-2 normal-case text-2xl rounded-xl hover:text-[#fdfafb] hover:bg-transparent ease-in-out duration-200 hover:scale-[101%] yellowtext"
          href="/"
        >
          react-auth-demo
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="/login"
              className="text-lg font-semibold  hover:text-[#fdfafb] "
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="text-lg font-semibold  hover:text-[#fdfafb]  "
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
