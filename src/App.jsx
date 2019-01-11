import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import './src/App.scss';

class App extends Component {
  render() {
    return (
      <Fullpage>

      <FullPageSections>

        <FullpageSection style={{
          backgroundColor: 'lime',
          // padding: '1em',
        }}>
        <p>1</p>
        </FullpageSection>
        <FullpageSection style={{
          backgroundColor: 'coral',
          // padding: '1em',
        }}>2</FullpageSection>
        <FullpageSection style={{
          backgroundColor: 'firebrick',
          // padding: '1em',
        }}>3</FullpageSection>

      </FullPageSections>

    </Fullpage>
    );
  }
}

export default App;
