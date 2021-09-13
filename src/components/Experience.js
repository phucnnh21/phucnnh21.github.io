import React from "react";

import { experienceData } from "../utils/data/experience";

const Experience = () => {
    return (
        <section className="right-content" id="experience">
            {experienceData.map((element) => (
                <div className="py-1" key={element.title}>
                    <h4 className="opacity-55">{element.title}</h4>
                    <div className="row p-2">
                        {element.list.map((item) => (
                            <div
                                className="col-6 col-md-3 card text-14"
                                key={item.name}
                            >
                                <img
                                    src={item.img}
                                    className="card-img-top"
                                    alt={item.name}
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <b>{item.name}</b>
                                        <br />
                                        <span className="opacity-55">
                                            {item.time}
                                        </span>
                                        <br />
                                        <span>{item.description}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
