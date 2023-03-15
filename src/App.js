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

export default App;

//About Me: A brief introduction that includes your background, skills, and areas of interest.

//Projects: Showcase your programming skills and experience by highlighting some of your best projects. Provide details on the technologies used, your role in the project, and the outcome achieved.

//Blog: Share your knowledge, expertise, and experience through blog posts related to programming, technology, and other related topics. This could also help demonstrate your communication skills.

//Resume: A downloadable version of your resume or CV can be helpful for recruiters or potential employers who may visit your website.

//Testimonials: Include quotes or testimonials from satisfied clients or colleagues to demonstrate your work ethic and expertise.

//Skills: Create a list of your programming skills, including any languages or frameworks that you have expertise in.

//Contact Information: Provide a way for visitors to reach out to you via email, social media, or a contact form.

//Awards and Achievements: If you have won any coding competitions or have been recognized for your work, this is a good place to showcase those achievements.

//Links to Other Profiles: Include links to your LinkedIn profile, GitHub profile, and any other relevant social media profiles.

//Certifications: If you have any programming-related certifications, list them on your website.