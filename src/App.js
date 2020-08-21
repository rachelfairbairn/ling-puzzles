import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import Phonetics from './containers/Phonetics/Phonetics';
import ActivityProgress from './containers/ActivityProgress/ActivityProgress';
import AdminPage from './containers/AdminPage/AdminPage';

class App extends Component {

  render() {

    let routes = (
      <Switch>
        <Route path="/phonetics" component={Phonetics} />
        <Route path="/progress" component={ActivityProgress} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    );

    if(!this.props.isAuth){
      routes = (
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
