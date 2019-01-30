import React, { Component} from 'react';
import './src/App.scss';
import Iame from './components/Iame';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import AboutMe from './components/aboutMe';
import OutSkills from './components/OutSkills';
import  MyProjects  from './components/MyProjects';
import  MyProjects1  from './components/MyProjects.1';




class App extends Component {
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
      <div>
        <Iame  scrollToMyRef={this.scrollToMyRef}/>
        <div ref={this.myRef}></div>
        <AboutMe  />
        <OutSkills  scrollToMyRef={this.scrollToMyRef}   />
        <MyProjects scrollToMyRef={this.scrollToMyRef} />
        <MyProjects1 scrollToMyRef={this.scrollToMyRef} />
      </div>
    );
  }
}

export default App;
