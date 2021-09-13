import React from "react";

const Profile = ({ setActivePage }) => {
    return (
        <section className="right-content" id="profile">
            <h1 className="blue-600 py-2">
                <b>Phúc Ngô</b>
            </h1>
            <h4 className="heading-4 opacity-55 py-2">
                こんにちは 👋! Welcome to my website!
            </h4>
            <p className="py-2">
                This is my personal profile website. You can find out about my{" "}
                <a href="#profile" onClick={() => setActivePage("Profile")}>
                    Profile
                </a>
                ,{" "}
                <a href="#skills" onClick={() => setActivePage("Skills")}>
                    Skills
                </a>
                ,{" "}
                <a href="#projects" onClick={() => setActivePage("Projects")}>
                    Personal Projects
                </a>
                ,{" "}
                <a
                    href="#experience"
                    onClick={() => setActivePage("Experience")}
                >
                    Experience and Education
                </a>
                !
            </p>
        </section>
    );
};

export default Profile;
