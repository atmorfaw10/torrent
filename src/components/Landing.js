import React from "react";
import landingImg from "../images/landing-img.png"
import './Landing.css'

function Landing() {
    return (
        <>
            <img src={landingImg} alt="landing" />
            <div className="landing-para">
                <h1>Feel the Music</h1>
                <h3>Stream over 82 million tracks with one click</h3>
            </div>
            <button role = 'button' className="landing-buttn">Stream Now</button>

        </>
    );
}

export default Landing;