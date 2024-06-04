import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UploadAndDownload from "./components/UploadAndDownload";
import Response from "./pages/Response";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import ProtectedRoute from "./middleware/ProtectedRoute";
import { AccessProvider } from "./middleware/AccessProvider";

const Layout = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="flex items-center justify-center text-white pb-4">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const ResponseLayout = () => (
  <div className="min-h-screen">
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="upload" element={<UploadAndDownload />} />
      </Route>
      <Route element={<ResponseLayout />}>
        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Response />
            </ProtectedRoute>
          }
        />
      </Route>
    </>
  )
);

function App() {
  return (
    <div className="App">
      <div className="bg-black">
        <AccessProvider>
          <RouterProvider router={router} />
        </AccessProvider>
      </div>
    </div>
  );
}

export default App;
