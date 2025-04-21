import "./App.css";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} /> {/* <-- this is important! */}
<Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
