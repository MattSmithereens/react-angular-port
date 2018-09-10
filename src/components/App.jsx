import React from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import RecordsList from './RecordsList';
import About from './About';
import Admin from './AdminFooter';
import { Switch, Route } from 'react-router-dom';

function App(){

  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/about' component={About} />
        <Route path='/marketplace' component={RecordsList} />
      </Switch>
      <Admin/>
    </div>
  );
}

export default App;
