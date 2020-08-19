import React from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import Phonetics from './containers/Phonetics/Phonetics';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/phonetics" component={Phonetics} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
