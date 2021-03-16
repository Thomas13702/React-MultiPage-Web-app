import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import {Route, Link} from 'react-router-dom'

// exact makes it go to only the route specified 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} /> 
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
