import React from "react";

import Icon from "./Icon";
import { pageList, links } from "../utils/data/index";

const Navbar = ({ className, activePage, setActivePage }) => {
    return (
        <nav
            className={`navbar navbar-expand left bg-dark d-flex flex-column justify-content-between px-2 py-4 ${className}`}
        >
            <div className="w-100 text-center">
                <img
                    src="/img/cat.jpg"
                    alt="Avatar"
                    className="rounded-circle border border-light"
                    style={{ width: 120, height: 120 }}
                />
                <div className="d-flex flex-column justify-content-center px-2 mt-5">
                    {pageList.map((item) => (
                        <a
                            key={item.name}
                            className={`btn d-flex flex-row justify-content-between align-items-center my-1 ${
                                item.name === activePage
                                    ? "btn-light"
                                    : "text-light"
                            }`}
                            onClick={() => setActivePage(item.name)}
                            href={`#${item.name.toLowerCase()}`}
                        >
                            <Icon icon={item.icon} />
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="w-100 d-flex flex-row justify-content-evenly py-2">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="d-flex flex-wrap"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon={["fab", link.name]} color={link.color} />
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
