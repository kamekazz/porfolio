import React, { Component } from 'react';
import './src/App.scss';
import Iame from './components/Iame';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import AboutMe from './components/aboutMe';



class App extends Component {
  render() {
    return (
      <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <Iame />
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: '#374B4A',

        }}>
          <AboutMe />
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: 'firebrick',

        }}>3</FullpageSection>

      </FullPageSections>

    </Fullpage>
       
    );
  }
}

export default App;
