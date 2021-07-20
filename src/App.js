import portrait from './portrait.jpg';

import "./styles.css"

function App() {
  return (
    <div className="App">
      	<h1>Hello!</h1>
        <h2>My name is Simon Johansson and this is my website! It is currently under
          construction, but if you wish to see my progress check out my github repository:
        </h2>
        <a href="https://github.com/viloz1/website" rel="noreferrer" className="github">
        Github
        </a>
        <img src={portrait} alt="portrait" className="portrait" />
    </div>
  );
}

export default App;
