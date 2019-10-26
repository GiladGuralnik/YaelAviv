import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import {Grid} from './components/Grid'
import {Test} from './components/Test'
class App extends Component {
  render() {
    return (
      <React.Fragment>

      {/* <a href="mailto:some@email.com" target="_blank" class="btn btn-primary">Email Us</a> */}


        <div className="centered title">
          <h1>Yael Aviv Lasry</h1>
        </div>

        <div className="centered">
          <NavigationBar/>
        </div>

        <Layout >
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    
    
    );
  }
}

export default App;