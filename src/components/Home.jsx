import portrait from './portrait.jpg';
import "./home.css";
import React from "react";

function Home() {
    return (
        <div className="Home">
              <h1>Hello!</h1>
            <h2>My name is Simon Johansson and this is my website! It is currently under
              construction, but if you wish to see my progress check out my <a href="https://github.com/viloz1/website" rel="noreferrer" className="github">
            github repository.
            </a>
            </h2>
            
            <img src={portrait} alt="portrait" className="portrait" />
        </div>
    )
}
/*<li className="homepage"><Link to="/home">Click here to get to the Home page</Link></li>*/
export default Home;
