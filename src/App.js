import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import "./assets/styles/App.css";
import "./assets/styles/PageContent.css";
import "./assets/styles/Nav.css";
import ParticlesBackground from './components/ParticlesBackground';


function App() {
    return (
        <Router>
            <div className="App">
                <div className="particles-container">
                    <ParticlesBackground />
                </div>
                <nav className="nav-bar">
                    <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                    <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
                    <NavLink to="/blog" className="nav-link" activeClassName="active">Blog</NavLink>
                </nav>
                <div className="page-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
