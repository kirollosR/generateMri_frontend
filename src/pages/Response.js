import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResponseComponent from "../components/ResponseComponent";
import apis from "../apis/apis";

const Response = () => {
  const location = useLocation();
  const { response } = location.state || {};
  const [imageUrl, setImageUrl] = useState(null);

  console.log("response:", response);
  console.log("from response:", response.from_sequence);

  const handleDownload = async () => {
    try {
      const nii = await apis.nii(response.output_folder_name);
      const url = window.URL.createObjectURL(new Blob([nii.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generatedMri_t2_from_t1.nii'); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await apis.image(response.output_folder_name);
        console.log("image:", image);
        setImageUrl(URL.createObjectURL(image.data));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchImage();
  }, []);

  

  console.log("imageUrl:", imageUrl);
  // console.log("image:",imageUrl);

  return (
    <div>
    <div>
     {/* <div className="flex justify-center items-center">
       <div className="p-8"> */}
        <ResponseComponent responseData={response} imageUrl={imageUrl} handleDownload={handleDownload} />
        
        
      </div>
    </div>
  );
};

export default Response;
