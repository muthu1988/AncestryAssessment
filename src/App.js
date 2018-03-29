import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './container/header';
import Footer from './container/footer';
import Home from './container/home';
import Login from './container/login';
import CommonDialog from './component/common/modalWindow';
import './App.css';
import { Row, Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Row className="show-grid">
        <Router>
          <div className="App">
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
          </div>
        </Router>
        <CommonDialog />
        </Row>
        <Footer />
      </Grid>
    );
  }
}

export default App;
