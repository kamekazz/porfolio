import React, { Component } from 'react'
import Slide from '@material-ui/core/Slide';
import KeyboarIcon from '@material-ui/icons/KeyboardArrowDown';
// import { connect } from 'react-redux'

class Iame extends Component {


  render() {
    return (
      <div className="Iame">

        <Slide direction="left" in={true} timeout={690}  mountOnEnter unmountOnExit >
            <div className="react__posich" >
                <div  className="react__posich--btn btn">
                    <img className="react--icon" src="favicon.ico"  alt="sss"/>
                    powered by react.js
                </div>
            </div>
        </Slide>



        <video className="bg-video__content" autoPlay muted loop >
            <source src="ast/mp4/Aloha-Mundo.mp4" type="video/mp4" />
            <source src="ast/mp4/Aloha-Mundo.webm" type="video/webm" />
                Your browser is not supported!
        </video>
        <Slide direction="right" in={true} timeout={590}  mountOnEnter unmountOnExit >
            <div className="Iame__text">
                <h1 className="Iame__text__header">
                    <span className="Iame__text__header--top"> hello, I'm <span className="Iame__text__header--top--name">Manuel Taveras</span>.</span>
                    <span className="Iame--text--header--bot"> I'm a full-stack web developer</span>
                </h1>
            </div>
        </Slide>
        <Slide direction="right" in={true} timeout={690}  mountOnEnter unmountOnExit >
            <div className="gettouch--posich" >
                <div  className="gettouch btn">get in touch</div>
            </div>
        </Slide>

        <Slide direction="up" in={true} timeout={690}  mountOnEnter unmountOnExit >
            <div className="KeyboarIcon--posich" >
                <p className="KeyboarIcon--posich--p" >scroll down</p>
                <KeyboarIcon className="KeyboarIcon"/>
            </div>
        </Slide>
            

      </div>
    )
  }
}



export default Iame
