import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Shopping from './components/screens/Shopping';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { UserContext, SelectedCategories, Cart } from './useContext'


function App() {
  const [user, setUser] = useState(null);
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const selectedCategoriesProvider = useMemo(() => ({ selectedCategories, setSelectedCategories }), [selectedCategories, setSelectedCategories]);
  const [cart, setCart] = useState(null);
  const cartProvider = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  return (
    <UserContext.Provider value={userProvider}>
      <SelectedCategories.Provider value={selectedCategoriesProvider}>
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
      </SelectedCategories.Provider>
    </UserContext.Provider>

  );
}

export default App;
