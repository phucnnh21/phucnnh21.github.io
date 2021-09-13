import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Icon from "./components/Icon";
import { capitalizeFirstLetter } from "./utils/helpers";

function App() {
    const [settingNav, setSettingNav] = useState("");

    const showNav = () => {
        return settingNav ? setSettingNav("") : setSettingNav("show");
    };

    const [activePage, setActivePage] = useState(
        window.location.href.split("#")[1]
            ? capitalizeFirstLetter(window.location.href.split("#")[1])
            : "Profile"
    );

    return (
        <div className="app d-flex flex-row flex-wrap">
            {/* Left content (Navbar) */}
            <Navbar
                className={settingNav}
                activePage={activePage}
                setActivePage={setActivePage}
            />

            {/* Hamburger button on mobile to show nav */}
            <button onClick={showNav} className="menu-btn btn btn-dark">
                {settingNav === "" ? (
                    <Icon icon={["fas", "bars"]} color="white" />
                ) : (
                    <Icon icon={["fas", "times"]} color="white" />
                )}
            </button>

            {/* Right content */}
            <div
                className="right"
                onClick={() => settingNav && setSettingNav("")}
            >
                <Profile setActivePage={setActivePage} />
                <Experience />
                <Skills />
                <Projects />
                <Certificates />
            </div>
        </div>
    );
}

export default App;
