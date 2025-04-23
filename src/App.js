import React, { useState, useEffect } from "react";
import "./App.css";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Projects from "./components/Projects";
import Preloader from "./components/Preloader"; // 👈 import your preloader
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // 👈 show preloader first
      ) : (
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/my-projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<Post />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
