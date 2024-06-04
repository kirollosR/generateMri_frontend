import React, { useState } from "react";
import Upload from "./Upload";
import DemoData from "./DemoData";

const FormComponent = ({
  from,
  to,
  handleFromChange,
  handleToChange,
  handleFileChange,
  data,
  handleSubmit,
  selectedFile,
  handleSelectFile,
  selectedFileName,
}) => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChangeWrapper = (file) => {
    setIsFileUploaded(!!file);
    if (file) {
      handleSelectFile(null); // Deselect any selected demo file when a file is uploaded
    }
    handleFileChange(file);
  };

  const handleSelectFileWrapper = (file) => {
    setIsFileUploaded(false);
    handleSelectFile(file);
    // handleFileChange(file); // Deselect any uploaded file when a demo file is selected
  };

  return (
    <div>
      <form className="p-8 space-y-6 w-full md:w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="from" className="mb-1 block text-white">
              From
            </label>
            <select
              id="from"
              name="from"
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onChange={handleFromChange}
              value={from}
            >
              <option value="">Select</option>
              <option value="t1">T1</option>
              <option value="t2">T2</option>
              <option value="flair">Flair</option>
              <option value="t1ce">T1ce</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="to" className="mb-1 block text-white">
              To
            </label>
            <select
              id="to"
              name="to"
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onChange={handleToChange}
              value={to}
            >
              <option value="">Select</option>
              <option value="t1">T1</option>
              <option value="t2">T2</option>
              <option value="flair">Flair</option>
            </select>
          </div>
        </div>
        <Upload
          onFileChange={handleFileChangeWrapper}
          disabled={selectedFile}
        />
        <DemoData
          from={from}
          selectedFile={selectedFile}
          onSelect={handleSelectFileWrapper}
          isFileUploaded={isFileUploaded}
          selectedFileName={selectedFileName}
        />
        {data.error.length !== 0 && (
          <div className="dark">
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Danger alert!</span> <br />{" "}
                {data.error.message}
              </div>
            </div>
          </div>
        )}
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-primary-500 rounded hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
