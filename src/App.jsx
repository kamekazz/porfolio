import React, { Component, lazy,Suspense } from 'react';
import './src/App.scss';
import  Nav  from './components/Nav';
import Loding from './components/Loding';
// import App1 from './App.1';
import { connect } from 'react-redux'
import * as actions from './store/actions'
import 'animate.css'


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
    const {offView} = this.props;
    return (
      <div>
        <Nav />
        <div className={offView ? 'app leve' : 'app bk'}>
          <Suspense fallback={<Loding />}>
            <App1 />
          </Suspense>
        </div>
        {offView && <Loding /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  offView: state.nav.offView
})



export default connect(mapStateToProps, actions)(App)
