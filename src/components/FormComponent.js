import React, { useState } from "react";
import Upload from "./Upload";
import DemoData from "./DemoData";

const FormComponent = () => {
  const [fileInfo, setFileInfo] = useState(null); // State to hold the file information
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    setFileInfo(file); // Update the state with the uploaded file information
  };

  const handleSelectFile = (file) => {
    setFileInfo(file);
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!fileInfo) {
      alert("Please upload a file before submitting the form.");
      return;
    }

    const formData = new FormData(event.target); // Create a FormData object
    formData.append("file", fileInfo.file); // Append the file to the form data

    // Log the formData entries for demonstration
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Example: Perform an AJAX request with the form data
    // fetch('/submit', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <form className="p-8 space-y-6 w-full md:w-96" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="from" className="mb-1 block text-white">From</label>
            <select
              id="from"
              name="from"
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Select</option>
              <option value="t1">T1</option>
              <option value="t2">T2</option>
              <option value="flair">Flair</option>
              <option value="t1ce">T1ce</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="to" className="mb-1 block text-white">To</label>
            <select
              id="to"
              name="to"
              className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Select</option>
              <option value="t1">T1</option>
              <option value="t2">T2</option>
              <option value="flair">Flair</option>
            </select>
          </div>
        </div>
        <Upload onFileChange={handleFileChange} />
        <DemoData from={from} to={to} selectedFile={selectedFile} onSelect={handleSelectFile} />
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-primary-500 rounded hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            Submit
          </button>
        </div>
      </form>
      {fileInfo && (
        <div className="w-96 mt-4 p-4 bg-gray-700 rounded-lg text-white">
          <h3>File Information:</h3>
          <p>File Name: {fileInfo.input_filename}</p>
          <p>Output File Name: {fileInfo.output_filename}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
