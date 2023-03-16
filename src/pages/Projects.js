import React from "react";
import ProjectBox from "../components/ProjectBox";
import "../assets/styles/Projects.css";

const projects = [
    {
        name: "Project 1",
        description: "This is the first project I worked on.",
        image: "./assets/images/project1.png",
        githubLink: "[project-1-github-link]",
        buttons: [
            {
                text: "GitHub",
                link: "[project-1-github-link]"
            },
            {
                text: "YouTube",
                link: "[project-1-youtube-link]"
            },
        ]
    },
    {
        name: "Project 2",
        description: "This is the second project I worked on.",
        image: "./assets/images/project2.jpg",
        githubLink: "[project-2-github-link]",
        buttons: [
            {
                text: "GitHub",
                link: "[project-2-github-link]"
            },
            {
                text: "Website",
                link: "[project-2-website-link]"
            }
        ]
    },
    {
        name: "Project 3",
        description: "This is the third project I worked on.",
        image: "./assets/images/project3.webp",
        githubLink: "[project-3-github-link]",
        buttons: [
            {
                text: "GitHub",
                link: "[project-3-github-link]"
            }
        ]
    },
    {
        name: "Project 4",
        description: "This is the 0th project I worked on.",
        image: "./assets/images/project2.jpg",
        githubLink: "[project-1-github-link]",
        buttons: [
            {
                text: "GitHub",
                link: "[project-1-github-link]"
            },
            {
                text: "YouTube",
                link: "[project-1-youtube-link]"
            },
            {
                text: "Website",
                link: "[project-1-website-link]"
            },
        ]
    },
];

function Projects() {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectBox key={index} project={project} buttons={project.buttons} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
