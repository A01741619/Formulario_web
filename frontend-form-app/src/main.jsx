import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/mainPages/HomePage";
import Dashboard from "./pages/mainPages/Dashboard";
import NotFound from "./pages/mainPages/NotFound";
import Navbar from "./pages/navbar/Navbar";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navbar />
    <div style={{ paddingTop: "90px" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);