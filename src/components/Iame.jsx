import React, { Component } from 'react'
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux'
import Waypoint from 'react-waypoint';
import history from '../../src/history'
import * as actions from '../store/actions'



class Iame extends Component {

    state={
        onViw:false,
    
    }

    componentDidMount(){
        setTimeout(() => {
            this.goto()
        }, 5000);  
    }

    goto=()=>{
        this.props.acOFview(true)
        setTimeout(() => {
            history.push('/aboutme')
            this.props.acOFview(false)
        }, 2000);
        setTimeout(() => {
            this.setState({open:false})
        }, 500); 
    }


  render() {
    const onViw = this.state.onViw
    return (
      <div className="Iame">

        <Slide direction="left" in={onViw} timeout={1000}  mountOnEnter unmountOnExit >
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
        <Slide direction="right" in={onViw} timeout={1000}  mountOnEnter unmountOnExit >
            <div className="Iame__text">
                <h1 className="Iame__text__header">
                    <span className="Iame__text__header--top"> hello, I'm <span className="Iame__text__header--top--name">Manuel</span>.</span>
                    <span className="Iame--text--header--bot"> I'm a full-stack web developer</span>
                </h1>
            </div>
        </Slide>
        <Waypoint
        onEnter={()=> this.setState({onViw:true})}
        onLeave={()=> this.setState({onViw:false})}
        />
        <Slide direction="right" in={onViw} timeout={1000}  mountOnEnter unmountOnExit >
            <div className="gettouch--posich" >
                <div onClick={this.props.goto}  className="gettouch btn">get in touch</div>
            </div>
        </Slide>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
    offView: state.nav.offView
})



export default connect(mapStateToProps, actions)(Iame)