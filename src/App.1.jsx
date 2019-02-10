import React, { Component} from 'react';
import './src/App.scss';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Iame from './components/Iame';
import AboutMe from './components/aboutMe';
import OutSkills from './components/OutSkills';
import  MyProjects  from './components/MyProjects';
import  MyProjects1  from './components/MyProjects.1';
import  Nav  from './components/Nav';
import { connect } from 'react-redux'
import * as actions from './store/actions'



class App1 extends Component {

  

  render() {
   const {offView} = this.props;
    return (
  
      <Router  history={history}>      
              <Switch>
                <Route path="/" exact component={Iame} />
                <Route path="/aboutme" exact component={AboutMe} />
                <Route path="/skills" exact component={OutSkills} />
                <Route path="/myprojects" exact component={MyProjects} />
                <Route path="/clone" exact component={MyProjects1} />
              </Switch>
      </Router>
  
    );
  }
}

const mapStateToProps = (state) => ({
  offView: state.nav.offView
})



export default connect(mapStateToProps, actions)(App1)

