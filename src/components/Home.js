import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation (if using React Router)

const CustomComponent = () => {
    return (
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <div className="max-w-md mx-auto mt-8">
            <div className="flex justify-center">
              <Link
                to="/"
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                Go to FormComponent
              </Link>
            </div>
            <div class="inline-flex items-center justify-center w-full">
              <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span class="absolute px-3 font-medium  -translate-x-1/2 bg-gray-800 left-1/2 text-white dark:bg-gray-900">
                or
              </span>
            </div>
            <div className="flex flex-wrap justify-between">
              <button className="w-1/3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 mx-2">
                Button 1
              </button>
              <button className="w-1/3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 mx-2">
                Button 2
              </button>
              <button className="w-1/3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 mx-2">
                Button 3
              </button>
              <button className="w-1/3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 mx-2">
                Button 4
              </button>
              <button className="w-1/3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 mx-2">
                Button 5
              </button>
              <button className="w-1/3 bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 mx-2">
                Button 6
              </button>
              {/* Add more buttons here */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomComponent;
  
  
