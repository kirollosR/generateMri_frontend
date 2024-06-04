import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import SpinnerOverlay from "../components/SpinnerOverlay";
import apis from "../apis/apis";
import { useAccess } from "../middleware/AccessProvider";

const Home = () => {
  const navigate = useNavigate();
  const { setCanAccessResult } = useAccess();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [data, setData] = useState({
    from: "",
    to: "",
    file: null,
    response: [],
    error: [],
    loading: false,
  });

  const handleFromChange = (e) => {
    setData({ ...data, from: e.target.value });
  };

  const handleToChange = (e) => {
    setData({ ...data, to: e.target.value });
  };

  const handleFileChange = (file) => {
    setData({ ...data, file, error: [] });
  };

  const handleSelectFile = async (filePath) => {
    if (!filePath) {
      setSelectedFileName(null);
      setSelectedFile(null);
      setData({ ...data, file: null, error: [] });
      console.log("No file selected");
      return;
    } else {
      setSelectedFileName(filePath);
      // const response = await fetch(process.env.PUBLIC_URL + filePath);
      const response = await fetch(filePath);
      const blob = await response.blob();
      const file = new File([blob], "BraTS-GLI-00145-000-t1n.nii.gz", { type: "application/x-gzip", path: filePath }); // You can specify the filename here or extract it from the path
      file.path = filePath;
      setSelectedFile(file);
      console.log(file);
      setData({ ...data, file: file, error: [] });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!data.file) {
      setData({
        ...data,
        error: { message: "Please upload a file before submitting the form." },
      });
      return;
    }

    if (data.from === "" || data.to === "") {
      setData({
        ...data,
        error: {
          message: "Please select the sequence before submitting the form.",
        },
      });
      return;
    }

    const formData = new FormData(); // Create a FormData object
    formData.append("file", data.file); // Append the file to the form data

    try {
      setData({ ...data, loading: true });

      const response = await apis.generate(data.from, data.to, formData);
      console.log(response.data);
      setCanAccessResult(true);
      navigate("/result", { state: { response: response.data } });
    } catch (error) {
      setData({ ...data, error: error?.response?.data });
      console.error("Error:", error);
    } finally {
      setData({ ...data, loading: false });
    }
  };

  return (
    <div>
      {data.loading && <SpinnerOverlay loading={data.loading} />}
      <div
        className={`bg-gray-800 p-8 rounded-lg shadow-lg ${
          data.loading ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <FormComponent
          from={data.from}
          to={data.to}
          handleFromChange={handleFromChange}
          handleToChange={handleToChange}
          handleFileChange={handleFileChange}
          data={data}
          handleSubmit={handleSubmit}
          selectedFile={selectedFile}
          handleSelectFile={handleSelectFile}
          selectedFileName={selectedFileName}
        />
      </div>
    </div>
  );
};

export default Home;
