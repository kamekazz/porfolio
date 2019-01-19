import React, { Component, lazy,Suspense } from 'react';
import './src/App.scss';

import Loding from './components/Loding';

const App1 = lazy(()=>  import('./App.1'))



class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount(){
    this.timer()
  }

  timer=()=>{
    setTimeout(() => {
      console.log('object')
    }, 5000);
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
        <Loding />
        <Suspense fallback={<Loding />}>
            <App1 />
        </Suspense>
      </div>
    );
  }
}

export default App;
