import React from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import RecordsList from './RecordsList';
import About from './About';
import AdminFooter from './AdminFooter';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import NewRecordControl from './NewRecordControl';
import Error404 from './Error404';
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

  // componentDidMount() {
  //   this.waitTimeUpdateTimer = setInterval(() =>
  //     this.updateRecordElapsedWaitTime(),
  //   60000
  //   );
  // }

  // componentWillUnmount(){
  //   clearInterval(this.waitTimeUpdateTimer);
  // }

  // updateRecordElapsedWaitTime() {
  //   var newMasterRecordList = Object.assign({}, this.state.masterRecordList);
  //   Object.keys(newMasterRecordList).forEach(recordId => {
  //     newMasterRecordList[recordId].formattedWaitTime = (newMasterRecordList[recordId].timeOpen).fromNow(true);
  //   });
  //   this.setState({masterRecordList: newMasterRecordList});
  // }

  handleAddingNewRecordToList(newRecord){
    var newRecordId = v4();
    var newMasterRecordList = Object.assign({}, this.state.masterRecordList, {
      [newRecordId]: newRecord
    });
    newMasterRecordList[newRecordId].formattedWaitTime = newMasterRecordList[newRecordId];
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
          <Route exact path='/marketplace' render={()=><RecordsList recordsList={this.state.masterRecordList} />} />
          <Route path='/admin' render={()=><NewRecordControl onNewRecordCreation={this.handleAddingNewRecordToList} />} />
          <Route path='/addnew' render={(props)=><Admin recordsList={this.state.masterRecordList} currentRouterPath={props.location.pathname} onRecordSelection={this.handleChangingSelectedRecord} selectedRecord={this.state.selectedRecord}/>} />
          <Route component={Error404} />
        </Switch>
        <AdminFooter/>
      </div>
    );
  }
}

export default App;
