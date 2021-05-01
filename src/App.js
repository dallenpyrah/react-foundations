import './App.css';
import HomePage from './Pages/HomePage';
import LogoComponent from './Components/LogoComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/logo" exact component={LogoComponent}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
