import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./assets/css/App.css";
import "./assets/css/PageContent.css";
import "./assets/css/Nav.css";

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="nav-bar">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                </nav>
                <div className="page-content">
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} /> {/* this will match any URL that is not matched by the other routes */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App