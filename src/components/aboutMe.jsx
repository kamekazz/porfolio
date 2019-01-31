import React, { Component } from 'react'
import Slide from '@material-ui/core/Slide';
import Waypoint from 'react-waypoint';
export default class aboutMe extends Component {

    state={
        onViw:false,
        card:'foteCard',
        card2:'foteCard'
    }


    componentDidMount(){

    }

    campioCard =()=>{
        this.setState({
            card:' u'
        })
    }
    
  render() {
    const onViw = this.state.onViw
    return (
      <div id="aboutMe"  className="aboutMe" >
      <Waypoint
        onEnter={()=> this.setState({onViw:true})}
        onLeave={()=> this.setState({onViw:false})}
        />
        <Slide direction="right" in={onViw} timeout={1000} >
            <figure className={`aboutMe__shape  ${this.state.card}`}>
                <img src="ast/img/me.jpg" alt="Person on a tour" className="aboutMe__img" />
            </figure>
         </Slide> 
        <div  className={`aboutMe__shape2  ${this.state.card2}`} onMouseOut={()=> this.setState({card:'foteCard',card2:'foteCard'})} >
            <div onMouseOver={()=> this.setState({card:'ul',card2:'ul2'})}  className="aboutMe__shape2--1"></div>
            <div onMouseOver={()=> this.setState({card:'uu',card2:'uu2'})}  className="aboutMe__shape2--2"></div>
            <div onMouseOver={()=> this.setState({card:'ur',card2:'ur2'})}  className="aboutMe__shape2--3"></div>
            <div onMouseOver={()=> this.setState({card:'ll',card2:'ll2'})}  className="aboutMe__shape2--4"></div>
            <div onMouseOver={()=> this.setState({card:'oo',card2:'oo2'})}  className="aboutMe__shape2--5"></div>
            <div onMouseOver={()=> this.setState({card:'rr',card2:'rr2'})}  className="aboutMe__shape2--6"></div>
            <div onMouseOver={()=> this.setState({card:'dl',card2:'dl2'})}  className="aboutMe__shape2--7"></div>
            <div onMouseOver={()=> this.setState({card:'dd',card2:'dd2'})}  className="aboutMe__shape2--8"></div>
            <div onMouseOver={()=> this.setState({card:'dr',card2:'dr2'})}  className="aboutMe__shape2--9"></div>
        </div>
        <Slide direction="left" in={onViw} timeout={1000} >
        <div className="heder__text">
            <h3 className="heder__text--h3">About Me</h3>
            <div className ="line"/>
            <p className="heder-text--p">I consider myself a full-stack developer, and I am equally comfortable developing Node.js backends as working with JavaScript in the front-end. My technical expertise also includes React, Redux,  ES6, HTML5,CSS a bit of angular and some other frameworks.</p>
        </div>
        </Slide>
        <Slide direction="left" in={onViw} timeout={1000} >
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
        <Slide direction="left" in={onViw} timeout={1000} >
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


        <Slide direction="left" in={true} timeout={1000} >
        <div className="title-p">
            <div className="title">About Me</div>
        </div>
        </Slide>


        <Slide direction="right" in={onViw} timeout={3000} >
            <div className="s2-bg"></div>
        </Slide>
      </div>

    )
  }
}
