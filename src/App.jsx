// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
// Styling
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <Navbar onToggleSidebar={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/item/:id" element={<ItemDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
