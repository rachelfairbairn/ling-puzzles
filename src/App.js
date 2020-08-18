import React from 'react';
import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <p>Ling Puzzles coming soon...</p>
      </Layout>
    </div>
  );
}

export default App;
