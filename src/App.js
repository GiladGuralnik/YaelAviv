import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import {Grid} from './components/Grid'
import { Button} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <React.Fragment>

      <a href="mailto:some@email.com" target="_blank" class="btn btn-primary">Email Us</a>


        <div className="centered">
          <NavigationBar/>
        </div>
      
        <div className="grid">
          <Grid>asd</Grid>
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