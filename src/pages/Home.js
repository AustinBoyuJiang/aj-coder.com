import React from "react";
import "../assets/styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="intro">
                <h1 className="intro-heading">Hi, I'm Austin Jiang</h1>
                <p className="intro-text">
                    I am a software developer with [number of years of experience] years of experience in [list of skills]. I specialize in [your specialization].
                </p>
                <p className="intro-text">
                    You can find me on <a href="[your-github-account]">GitHub</a>, <a href="[your-discord-account]">Discord</a>, or send me an <a href="mailto:[your-email-address]">email</a>.
                </p>
            </div>
        </div>
    );
}

export default Home;
