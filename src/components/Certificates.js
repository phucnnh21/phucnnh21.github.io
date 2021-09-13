import React from "react";

import { certificates } from "../utils/data/certificates";

const Certificates = () => {
    return (
        <section className="right-content" id="certificates">
            <h3>Certificates</h3>
            <div className="row py-3">
                {certificates.map((certificate) => (
                    <div className="col-3 text-14">
                        <a
                            className="d-flex flex-wrap justify-content-center"
                            key={certificate.name}
                            href={certificate.src}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={certificate.img}
                                alt={certificate.name}
                                className="w-100"
                            />
                            <span className="opacity-55">
                                <b>{certificate.name}</b>
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
