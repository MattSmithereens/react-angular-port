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
import Error404 from './Error404';
import Moment from 'moment';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterRecordList: {},
      selectedRecord: null
    };
    this.handleAddingNewRecordToList = this.handleAddingNewRecordToList.bind(this);
    this.handleChangingSelectedRecord = this.handleChangingSelectedRecord.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateRecordElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateRecordElapsedWaitTime() {
    var newMasterRecordList = Object.assign({}, this.state.masterRecordList);
    Object.keys(newMasterRecordList).forEach(recordId => {
      newMasterRecordList[recordId].formattedWaitTime = (newMasterRecordList[recordId].timeOpen).fromNow(true);
    });
    this.setState({masterRecordList: newMasterRecordList});
  }

  handleAddingNewRecordToList(newRecord){
    var newRecordId = v4();
    var newMasterRecordList = Object.assign({}, this.state.masterRecordList, {
      [newRecordId]: newRecord
    });
    newMasterRecordList[newRecordId].formattedWaitTime = newMasterRecordList[newRecordId].timeOpen.fromNow(true);
    this.setState({masterRecordList: newMasterRecordList});
  }

  handleChangingSelectedRecord(recordId){
    this.setState({selectedRecord: recordId});
  }

  render(){
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/about' component={About} />
          <Route path='/marketplace' render={()=><RecordsList recordsList={this.state.masterRecordsList} />} />
          <Route path='/admin' component={NewRecordForm} />
          <Route component={Error404} />
        </Switch>
        <AdminFooter/>
      </div>
    );
  }
}

export default App;
