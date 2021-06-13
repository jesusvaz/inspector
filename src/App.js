
import './App.css';
import Navigation from './components/navigation/navivation.component'
import HomePage from './pages/homepage/homepage.component'
import About from './pages/about/about.component'
import Contact from './pages/contact/contact.component'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
       <Navigation/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
 
    
  );
}

export default App;
