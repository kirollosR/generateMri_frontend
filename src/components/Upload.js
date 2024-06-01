import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Upload = ({ onFileChange }) => {
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
      if (file.type !== "image/png") {
        setUploadStatus("error");
        onFileChange(null);
        setPreview(null);
        return;
      }

      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      const fileInfo = {
        status: "success",
        From_Sequence: "t1",
        to_sequence: "flair",
        input_filename: file.name,
        output_filename: `processed_${file.name}`,
        output_path: previewUrl,
      };
      onFileChange(fileInfo); // Call the parent handler with the file information
      setUploadStatus("success");
    }
  };

  const isImageFile = (fileName) => {
    return /\.(jpg|jpeg|png|gif|bmp)$/.test(fileName);
  };

  return (
    <div>
      <Dropzone
        onDrop={handleDrop}
        maxFiles={1}
        accept="image/png"
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
              isImageFile(preview) ? (
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
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
                <p className="text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default Upload;
