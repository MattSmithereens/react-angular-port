import React from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import RecordsList from './RecordsList';
import About from './About';
import AdminFooter from './AdminFooter';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import NewRecordControl from './NewRecordControl';
import NewRecordForm from './NewRecordForm';
import { v4 } from 'uuid';

function App(){

  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/about' component={About} />
        <Route path='/marketplace' component={RecordsList} />
        <Route path='/admin' component={NewRecordForm} />
      </Switch>
      <AdminFooter/>
    </div>
  );
}

export default App;
