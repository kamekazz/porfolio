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




class App1 extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  scrollToMyRef = () => {  
    window.scrollTo({
      top:this.myRef.current.offsetTop,  
        behavior: "smooth"   // Optional, adds animation
    })
  }


  render() {
    return (
  
      <Router  history={history}>      
            <div className="mainApp">
              <Switch>
                <Route path="/" exact component={Iame} />
                <Route path="/aboutme" exact component={AboutMe} />
                <Route path="/skills" exact component={OutSkills} />
                <Route path="/myprojects" exact component={MyProjects} />
                <Route path="/clone" exact component={MyProjects1} />
              </Switch>
            </div>
      </Router>
  
    );
  }
}

export default App1;


