import React, { Component } from 'react';
import './src/App.scss';
import Iame from './components/Iame';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import AboutMe from './components/aboutMe';
import OutSkills from './components/OutSkills';
import  MyProjects  from './components/MyProjects';



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
      <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <Iame  scrollToMyRef={this.scrollToMyRef}   />
          <div ref={this.myRef}></div>
        </FullpageSection >
        <FullpageSection style={{
          backgroundColor: '#374B4A',
        }}>
          <AboutMe  />
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: '#374B4A',
        }}>
        <OutSkills  scrollToMyRef={this.scrollToMyRef}   />
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: '#374B4A',
        }}>
          <MyProjects scrollToMyRef={this.scrollToMyRef} />
        </FullpageSection>
      </FullPageSections>

    </Fullpage>
       
    );
  }
}

export default App;
