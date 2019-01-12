import React, { Component } from 'react';
import './src/App.scss';
import Iame from './components/Iame';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'



class App extends Component {
  render() {
    return (
      <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <Iame />
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: 'coral',

        }}>2</FullpageSection>
        <FullpageSection style={{
          backgroundColor: 'firebrick',

        }}>3</FullpageSection>

      </FullPageSections>

    </Fullpage>
       
    );
  }
}

export default App;
