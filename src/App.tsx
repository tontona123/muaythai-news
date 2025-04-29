import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Live from "./pages/Live";
import Register from "./pages/Register";
import NewsDetail from "./pages/NewsDetail.tsx";
import Footer from "./components/Footer";
import bg from "./assets/bgnew.webp";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <header className="bg-gradient-to-r from-gray-800 to-gray-600 text-center">
          <img src={bg} />
        </header>

        <Navbar />

        <main className="p-8 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/live" element={<Live />} />
            <Route path="/register" element={<Register />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
