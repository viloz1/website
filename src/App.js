import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {Route, Link, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  let title = "Simon Johansson"
  return (
    <Router>
      
      
      <Navbar title={title}/>

      <div className="App">

        <Switch>

          <Route exact path ="/" component={Home} />
          <Route exact path ="/projects" component={Projects} />
          <Route exact path ="/contact" component={Contact} />

        </Switch>

    </div>
    
    <Footer/>
    </Router>

  );
}

export default App;
