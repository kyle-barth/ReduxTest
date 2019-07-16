import React, { Component } from 'react'
import './App.css';

import { Provider } from 'react-redux';
import store from './store'

import Posts from './components/Post';
import Postform from './components/Postform'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1>Redux Test</h1>
          </header>

          <Postform />
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default App;