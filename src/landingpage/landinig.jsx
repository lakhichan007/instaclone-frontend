import React from "react";
import "./landing.css"

const LandingPage=()=>{
    return(
        <>
            <div id="main-container">
                <div id="left-content">
                    <img src={require("./images/landingpage.png")}/>
                </div>
                <div id="right-content">
                    <h1>10x Team 04</h1>
                    <a href="/PostView">Enter</a>
                </div>
            </div>
        </>
    )
}
export default LandingPage