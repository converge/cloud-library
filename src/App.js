import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Base from './components/Base'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Cloud Library</title>
        </Helmet>
        <BrowserRouter>
          <Fragment>
            <Base />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
