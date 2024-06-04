import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Upload = ({ onFileChange, disabled }) => {
  const [uploadStatus, setUploadStatus] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      setUploadStatus("error");
      onFileChange(null);
      setPreview(null);
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      if (!file.name.endsWith(".nii") && !file.name.endsWith(".nii.gz")) {
        setUploadStatus("error");
        onFileChange(null);
        setPreview(null);
        return;
      }

      console.log('file::', file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      onFileChange(file); // Call the parent handler with the file information
      setUploadStatus("success");
    }
  };

  const isNiftiFile = (fileName) => {
    return /\.nii(\.gz)?$/.test(fileName);
  };

  return (
    <div className={`upload-container ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <Dropzone
        onDrop={handleDrop}
        maxFiles={1}
        accept=".nii,.nii.gz"
        onDropRejected={() => setUploadStatus("error")}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <div
            {...getRootProps()}
            className={`w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center mb-4 transition-colors duration-200 relative cursor-pointer ${
              isDragActive
                ? "border-primary-600 bg-gray-700"
                : "border-primary-400 hover:bg-gray-700"
            } ${
              isDragReject || uploadStatus === "error" ? "border-red-500" : ""
            } ${uploadStatus === "success" ? "border-green-500" : ""}`}
          >
            <input {...getInputProps()} />
            {preview && uploadStatus === "success" ? (
              isNiftiFile(preview) ? (
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <FaFileAlt className="text-gray-500 text-4xl" />
                  <AiOutlineCheckCircle className="text-green-500 text-2xl absolute top-1 right-1" />
                </div>
              ) : (
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <FaFileAlt className="text-gray-500 text-4xl" />
                  <AiOutlineCheckCircle className="text-green-500 text-2xl absolute top-1 right-1" />
                </div>
              )
            ) : uploadStatus === "error" ? (
              <div className="relative w-28 h-20 flex items-center justify-center">
                <AiOutlineCloseCircle className="text-red-500 text-2xl absolute top-1 right-1" />
                <p className="text-red-500">Invalid file type</p>
              </div>
            ) : (
              <div className="text-primary-600 text-center mx-4">
                <div className="flex items-center justify-center w-full">
                  <svg
                    className="w-10 h-10 text-primary-400 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">
                  <span className="text-primary-500">Upload a file</span> or
                  drag and drop
                </p>
                <p className="text-gray-400">NIFTI files (.nii, .nii.gz) up to 10MB</p>
              </div>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default Upload;
