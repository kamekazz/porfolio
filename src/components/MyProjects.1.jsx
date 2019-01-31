import React, { Component } from 'react'

import { connect } from 'react-redux'
import Waypoint from 'react-waypoint';
import Slide from '@material-ui/core/Slide';





export class MyProjects1 extends Component {

  state={
    onViw:false,
    card:'foteCard',
    card2:'foteCard'
}

  hp_doleClik = () =>{
    this.props.scrollToMyRef()
    setTimeout(() => {
      this.props.scrollToMyRef()
    }, 1500);
  }

  activet =()=>{
    console.log('goo2');
  }


  render() {
    const onViw = this.state.onViw
    return (
      <div onScroll={ this.activet} className="MyProjects1">
        <Waypoint
        onEnter={()=> this.setState({onViw:true})}
        onLeave={()=> this.setState({onViw:false})}
        />


        <h3 className="MyProjects__h3">Being inspired </h3>
        
        <p className="MyProjects__text">
        To Showcase my skills I decided to  clone  this website to show my  Coding skills  And that I can't create anything that a designer throws at me .
        </p>
        <a href="https://yelp-clone-ffc27.firebaseapp.com/" className="clone">
          <img src="https://www.yext.com/wp-content/uploads/2016/08/yelp.png" alt="Person on a tour" className="clone2" />
        </a>





        <div className="btn--posich" >
        <a href="https://codepen.io/kamekazz/pens/popular/"rel="noopener noreferrer" target="_blank">
            <div  className="gettouch btn"><i className="fab fa-codepen"></i> codepen</div>
        </a>
        </div>

        
          <div className="btn--posich-2" >
            <a href="https://github.com/kamekazz"rel="noopener noreferrer" target="_blank">
              <div  className="gettouch btn"><i className="fab fa-github "></i> more Projects</div>
            </a>
          </div> 
      
        <div className="btn--posich-3" >
        <a href="https://codesandbox.io/u/kamekazz"rel="noopener noreferrer" target="_blank">
            <div  className="gettouch btn"><i className="fab fa-codepen"></i> codesandbox</div>
        </a>
        </div> 

       <Slide direction="left" in={onViw} timeout={1000} >
          <div className="title-p">
            <div className="title">Clones</div>
          </div>
        </Slide>

        <Slide direction="right" in={onViw} timeout={3000} >
            <div className="s2-bg"></div>
        </Slide>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects1)
