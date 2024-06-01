import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 items-center">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-6" />
          <div className="text-center">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
