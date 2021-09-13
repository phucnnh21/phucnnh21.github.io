import React from "react";

import { projects } from "../utils/data/projects";

const Projects = () => {
    return (
        <section className="right-content" id="projects">
            <h3>Personal Projects</h3>
            <div className="row py-3">
                {projects.map((project) => (
                    <div
                        className="col-6 text-14 text-center"
                        key={project.name}
                    >
                        <img
                            src={project.img}
                            alt={project.name}
                            className="w-100"
                        />
                        <span className="opacity-55">
                            <b>{project.description}</b>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
