import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
// import FirstRoute from './components/FirstRoute';
// import SecondRoute from './components/SecondRoute';
// import ThirdRoute from './components/ThirdRoute';
import './App.css';

// Car Stuff Colors
import Colors from './components/Colors';
import Results from './components/Results';


class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Colors} />
            {/* A : after the path signifies a parameter for some data the user clicks */}
            <Route path='/results/:color' component={Results} />

                   {/* '/' is always the home root page */}
            {/* <Route exact path='/' component={FirstRoute} /> */}
            {/* <Route path='/second' component={SecondRoute} /> */}
                {/* instead of component you can use render={()=> <FirstRoute />} /> after path */}
            {/* <Route path='/third' render={() => <ThirdRoute />} /> */}
            </Switch>
        </HashRouter>
    );
  }
}

export default App;
