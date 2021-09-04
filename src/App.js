import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Shopping from './components/screens/Shopping';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/productos'>
            <Shopping />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
