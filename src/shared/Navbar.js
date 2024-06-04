import React from "react";
// import logo from '../assets/brain-icon.svg'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
      <nav class="">
        <div class="max-w-screen-xl flex items-center justify-center mx-auto p-4">
          <a
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              class="h-32"
              alt="Flowbite Logo"
            />
            {/* <span class="self-center text-6xl font-semibold whitespace-nowrap text-white">
              Braini
            </span> */}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
