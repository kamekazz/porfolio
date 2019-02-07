import React, { Component, lazy,Suspense } from 'react';
import './src/App.scss';
import  Nav  from './components/Nav';
import Loding from './components/Loding';
// import App1 from './App.1';

const App1 = lazy(()=>  import('./App.1'))



class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
  }

  componentDidMount(){

  }



  scrollToMyRef = () => {  
    window.scrollTo({
      top:this.myRef.current.offsetTop,  
        behavior: "smooth"   // Optional, adds animation
    })
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Suspense fallback={<Loding />}>
            <App1 />
        </Suspense>
      </div>

    );
  }
}

export default App;
