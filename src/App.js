import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Navigate,
} from "react-router-dom";
import "./App.css";
import FormComponent from "./components/FormComponent";
import UploadAndDownload from "./components/UploadAndDownload";
import Navbar from "./shared/Navbar";
import Home from "./components/Home";
import Footer from "./shared/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<FormComponent />} />
      <Route path="upload" element={<UploadAndDownload />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar /> */}
      <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white">
        {/* <FormComponent /> */}
        {/* <UploadAndDownload /> */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
