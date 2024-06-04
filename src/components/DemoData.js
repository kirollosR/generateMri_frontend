import React, { useEffect, useState } from "react";
import t1 from "../assets/demoData/t1/BraTS-GLI-00145-000-t1n.nii.gz";

const fileLists = {
  t1: [
    { name: "BraTS-GLI-00145-000-t1n.nii.gz", path: "/demoData\\t1\\BraTS-GLI-00145-000-t1n.nii.gz" },
    { name: "BraTS-GLI-00145-000-t1n.nii.gz", path: t1 }
  ],
  t2: [
    { name: "file1_t2.nii", path: "file1_t2.nii" },
    { name: "file2_t2.nii", path: "file2_t2.nii" }
  ],
  t1ce: [
    { name: "file1_t1ce.nii", path: "file1_t1ce.nii" },
    { name: "file2_t1ce.nii", path: "file2_t1ce.nii" }
  ],
  flair: [
    { name: "file1_flair.nii", path: "file1_flair.nii" },
    { name: "file2_flair.nii", path: "file2_flair.nii" }
  ]
};

const DemoData = ({ from = "", selectedFile, onSelect, isFileUploaded, selectedFileName }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (from) {
      setFiles(fileLists[from] || []);
    } else {
      setFiles([]);
    }
  }, [from]);

  const handleClick = (file) => {
    if (!isFileUploaded) {
      onSelect(selectedFileName === file ? null : file);
      // onSelect(selectedFile === file ? null : file);
    }
  };

  if (!from) return null;

  return (
    <div>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <span className="absolute px-3 font-medium -translate-x-1/2 bg-gray-800 left-1/2 text-white dark:bg-gray-900">
          or
        </span>
      </div>
      <div className={`bg-gray-900 text-white p-4 rounded-lg shadow-md w-full ${isFileUploaded ? "opacity-50 pointer-events-none" : ""}`}>
        <div className="text-sm mb-2 font-semibold">Demo files:</div>
        <ul className="text-sm">
          {files.map((file, index) => (
            <li
              key={index}
              className={`mb-1 cursor-pointer ${selectedFileName === file.path ? "text-secondry-400" : "text-primary-400"}`}
              onClick={() => handleClick(file.path)}
            >
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DemoData;
