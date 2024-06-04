import React from "react";
import ResponseNavbar from "../shared/ResponseNavbar";

const ResponseComponent = ({
  responseData,
  imageUrl,
  handleDownload,
}) => {
  console.log("dataa:", responseData);
  console.log("from:", responseData.from_sequence);
  console.log("image: ", imageUrl);
  return (
    <div className="">
      {responseData && (
        <>
          <ResponseNavbar
            from={responseData.from_sequence}
            to={responseData.to_sequence}
          />
          {imageUrl ? (
            <img
              src={imageUrl}
              className="h-96 mx-auto rounded-lg"
              alt="Response"
            />
          ) : (
            <p>No image available</p>
          )}
          <div className="flex justify-center dark pt-4">
            <button
              class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-primary-400 to-secondry-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
              onClick={handleDownload}
            >
              <div className="relative flex items-center px-5 py-2.5 bg-white dark:bg-black group-hover:bg-opacity-0 rounded-md">
                <svg
                  class="w-6 h-6 mr-2 text-gray-800 dark:text-white transition-all ease-in duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                  />
                </svg>
                <span class="relative transition-all ease-in duration-75">
                  Download nii
                </span>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResponseComponent;
