import React, { Component } from 'react'

import { connect } from 'react-redux'

import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';

import Fab from '@material-ui/core/Fab';



export class MyProjects1 extends Component {

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
    return (
      <div onScroll={ this.activet} className="MyProjects1">



        <h3 className="MyProjects__h3--1">Being inspired </h3>
        <div className="MyProjects__text">
            <p>
            To Showcase my skills I decided to  clone  this website to show my  Coding skills  And that I can't create anything that a designer throws at me .
            </p>

        </div>






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

       <Slide direction="left" in={true} timeout={1000} >
          <div className="title-p">
            <div className="title">Clones</div>
          </div>
        </Slide>

        <Slide direction="right" in={true} timeout={3000} >
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
