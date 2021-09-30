import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageContext } from './page-context';

import Landing from './pages/landing';
import Home from './pages/home';
import Settings from './pages/settings';
import Search from './pages/search';
import { MobileNavigation } from './components';
import React, { useEffect, useState } from 'react';

function authCheck() {
  let user = localStorage.getItem('user');
  // if(user) return true;
  // else return false;
  return true
}

function App() {

  const [ auth, setAuth ] = useState(false);

  useEffect(() => {
    console.log('DO NOT INSERT ANY JAVASCRIPT CODE TO PREVENT XSS ATTACK!');

    //authenticate
  }, []);

  return (
    <div className="App">
      <PageContext.Provider value={[auth]}>
        <Router>
          <Switch>
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={authCheck() ? Home : Landing} />
          </Switch>
          <MobileNavigation />
        </Router>
      </PageContext.Provider>
    </div>
  );
}

export default App;
