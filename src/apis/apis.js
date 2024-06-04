import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/generate",
});

export const generate = (from_seq, to_seq, formData) =>
  api.post(`/${from_seq}/${to_seq}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const image = (folder_name) =>
  api.get(`/png/${folder_name}`, {
    responseType: "blob",
  });

export const nii = (folder_name) =>
  api.get(`/nii/${folder_name}`, {
    responseType: "blob",
  });

  export const test = () =>
    api.get(`/test`, {
      responseType: "blob",
    });

const apis = {
  generate,
  image,
  nii,
  test,
};

export default apis;
