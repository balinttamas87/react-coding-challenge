import React from 'react';
import { mockFetch } from '../src/back-end/server';
import { snakeToCamelCase } from '../src/util/snakeToCamelCase';

import './App.css';

class App extends React.Component {

  async componentDidMount() {

    try {
      const variant = await mockFetch('/variant');

      const res = snakeToCamelCase(variant);
      console.log({res});

    } catch (error) {

    }

    try {
      const columns = await mockFetch('/columns');

      const res = snakeToCamelCase(columns);
      console.log({res});

    } catch (error) {

    }
    
  }

  render() {
    return <div className="App"/>;
  }

}

export default App;