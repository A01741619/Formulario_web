import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/navbar/Navbar";

import HomePage from "./pages/mainpages/HomePage";
import Dashboard from "./pages/mainpages/Dashboard";
import NotFound from "./pages/mainpages/NotFound";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </Router>
  );
}

export default App;