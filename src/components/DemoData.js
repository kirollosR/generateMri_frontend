import React from "react";

const DemoData = ({ from = "", to = "", selectedFile, onSelect }) => {
  if (from === "") return null;

  const fileInfo = {
    status: "success",
    From_Sequence: from,
    to_sequence: to,
    input_filename: `${from}.nii`,
    output_filename: `processed_${to}.nii`,
    output_path: `path/to/${to}.nii`,
  };

  const handleClick = () => {
    onSelect(
      selectedFile && selectedFile.input_filename === fileInfo.input_filename
        ? null
        : fileInfo
    );
  };

  return (
    <div>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <span class="absolute px-3 font-medium  -translate-x-1/2 bg-gray-800 left-1/2 text-white dark:bg-gray-900">
          or
        </span>
      </div>
      <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md w-full sm:w-64">
        <div className="text-sm mb-2 font-semibold">Demo files:</div>
        <ul className="text-sm">
          {[fileInfo].map((file, index) => (
            <li
              key={index}
              className={`mb-1 cursor-pointer ${
                selectedFile &&
                selectedFile.input_filename === file.input_filename
                  ? "text-secondry-400"
                  : "text-primary-400"
              }`}
              onClick={handleClick}
            >
              {file.input_filename}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

//   return (
//     <div>
//   <div class="inline-flex items-center justify-center w-full">
//     <hr class="w-80 h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
//     <span class="absolute px-3 font-medium  -translate-x-1/2 bg-gray-800 left-1/2 text-white dark:bg-gray-900">
//       or
//     </span>
//   </div>
//       <div className="bg-gray-900 text-white p-4 rounded-lg w-full mt-3 shadow-md">
//         <div className="text-base mb-2 font-semibold">Demo files:</div>
//         <ul className="text-sm">
//           <li className="mb-1 text-base text-primary-400 hover:underline cursor-pointer">
//             {from}
//           </li>
//           {/* <li className="text-blue-400 hover:underline cursor-pointer">{to}</li> */}
//         </ul>
//       </div>
//     </div>
//   );
// };

export default DemoData;
