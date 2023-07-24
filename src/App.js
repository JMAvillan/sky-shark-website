import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Shopping from './components/screens/Shopping';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { UserContext, Categories, Cart } from './useContext'


function App() {
  const [user, setUser] = useState({});
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [categories, setCategories] = useState({});
  const categoriesProvider = useMemo(() => ({ categories, setCategories }), [categories, setCategories]);
  const [cart, setCart] = useState({});
  const cartProvider = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  return (
    <UserContext.Provider value={userProvider}>
      <Categories.Provider value={categoriesProvider}>
        <Cart.Provider value={cartProvider}>
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
        </Cart.Provider>
      </Categories.Provider>
    </UserContext.Provider>

  );
}

export default App;
