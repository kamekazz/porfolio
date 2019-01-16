import React, { Component } from 'react'
import Slide from '@material-ui/core/Slide';
import KeyboarIcon from '@material-ui/icons/KeyboardArrowDown';



export default class aboutMe extends Component {

    state={
        onViw:true
    }




    
  render() {

    const onViw = this.state.onViw
    return (
  
      <div id="aboutMe" className="aboutMe" >
        <Slide direction="right" in={onViw} timeout={1000} >
            <figure className="aboutMe__shape">
                <img src="ast/img/me.jpg" alt="Person on a tour" className="aboutMe__img" />
                <figcaption className="aboutMe__caption">Mary Smith</figcaption>
            </figure>
        </Slide>
        <Slide direction="left" in={onViw} timeout={1000} >
        <div className="heder__text">
            <h3 className="heder__text--h3">About Me</h3>
            <div className ="line"/>
            <p className="heder-text--p">I consider myself a full-stack developer, and I am equally comfortable developing Node.js backends as working with JavaScript in the front-end. My technical expertise also includes React, Redux,  ES6, HTML5,CSS a bit of angular and some other frameworks.</p>
        </div>
        </Slide>
        <Slide direction="up" in={onViw} timeout={1000} >
            <div className="a-contanar">
            <h4>Personal Info</h4>
            <ul>
                <li>Name : Manuel Taveras</li>
                <li>Age : 34</li>
                <li>Address : New York, USA</li>
                <li>Phone :  978 706-3407</li>
                <li>Email : Taveras78@gmail.com</li>
            </ul>
        </div>
        </Slide>
        <Slide direction="up" in={onViw} timeout={1000} >
        <div className="b-contanar">
            <h4>My Resume</h4>
            <p>I can't wait to be part of your team</p> 
        </div>
        </Slide>
        <div className="Donwload__position">
        <a href="https://docs.google.com/document/d/18T-h-v1xDOcscdzE0l0d0c9IShlWbbZaAYtLo12iLTE/edit?usp=sharing"rel="noopener noreferrer" target="_blank">
        <div className="btn" >Download PDF</div>
        </a>
        </div>

        <div className ="line2"/>
        <Slide direction="left" in={onViw} timeout={1000} >
        <div className="title">About Me</div>
        </Slide>
        <Slide direction="right" in={onViw} timeout={3000} >
            <div className="s2-bg"></div>
        </Slide>
        <Slide direction="up" in={true} timeout={1000}  mountOnEnter unmountOnExit >
            <div className="aboutMe--posich" >
                <p className="aboutMe--posich--p" >scroll down</p>
                <KeyboarIcon className="KeyboarIcon"/>
            </div>
        </Slide>
      </div>

    )
  }
}
