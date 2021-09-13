import React from "react";

import { skilsRender } from "../utils/data/skills";

const Skills = () => {
    return (
        <section className="right-content" id="skills">
            <h3>Skills</h3>
            {skilsRender.map((element) => (
                <div className="mt-2" key={element.title}>
                    <h5 className="opacity-55">{element.title}</h5>
                    <div className="d-flex flex-row flex-wrap">
                        {element.list.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="d-flex flex-wrap me-3 mb-3 me-md-4 mb-md-4"
                            >
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.src}`}
                                    alt={item.name}
                                    className="img-icon-size"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
