import React from "react";

function ProjectBox({ project, buttons }) {
    return (
        <div className="project-box">
            <img src={project.image} alt={project.name} />
            <div className="project-details">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                {buttons.map((button, index) => (
                    <a key={index} href={button.link} target="_blank" rel="noreferrer">
                        {button.text}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectBox;
