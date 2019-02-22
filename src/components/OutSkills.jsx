import React, { Component } from 'react'
import WorkIcon from '@material-ui/icons/Work';
import 'animate.css'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/KeyboardArrowRight';
import * as actions from '../store/actions'
import history from '../../src/history'
import App from '../v2/App';


 class OutSkills extends Component {
    state={
        onViw:false,
        card:'foteCard',
        card2:'foteCard'
    }

    goto=(prLocation)=>{
        this.props.acOFview(true)
        setTimeout(() => {
            history.push(prLocation)
            this.props.acOFview(false)
        }, 2000);
        setTimeout(() => {
            this.setState({open:false})
        }, 500); 
      }

  render() {
    const onViw = this.state.onViw

    return (
        <div className="OutSkills">
            <div className="mainConten">
                <div className="skills">

                    <div className="header">
                        <h4>MY MISSION IS TO</h4>
                        <h3>ENGINEER & DEVELOP THE BEST WEBSITES AROUND</h3>
                        <div className="line" />
                    </div>

                    <div className="meind">

                        <div className="exporience">
                            <WorkIcon className="icon " />
                            <h4>Experience</h4>
                            <div className="line2" />
                            <ul>
                                <li>
                                    <span>Programing Languages</span>
                                    <p >javascript typescript</p>
                                </li>
                                <li>
                                    <span>Front-End Developer</span>
                                    <p >jquery js react angular</p>
                                </li>
                                <li>
                                    <span>Back-End Developer</span>
                                    <p >node js</p>
                                </li>
                                <li>
                                    <span>Database</span>
                                    <p >mongoose mongodb</p>
                                </li>
                                <li>
                                    <span>Authentication</span>
                                    <p >jwt passport oauth</p>
                                </li>
                                <li>
                                    <span>CSS Library</span>
                                    <p>bootstrap material-design semantic-ui </p>
                                </li>
                                <li>
                                    <span>Api</span>
                                    <p >Google twilio openweathermap more...</p>
                                </li>
                            </ul>
                        </div>
                        <div className="build">
                            <i className="fas fa-tools inoc"></i>
                            <h4>what can i build ?  </h4>
                            <div className="line2" />
                            <ul>
                                <li>
                                    <span>Custom  CMD</span>
                                </li>
                                <li>
                                    <span>Mean Stack</span>
                                </li>
                                <li>
                                    <span>PWA</span>
                                </li>
                                <li>
                                    <span>Mern Stack</span>
                                </li>
                                <li>
                                    <span> Web Application</span>
                                </li>
                                <li>
                                    <span>Single Page Application</span>
                                </li>
                                <li>
                                    <span>RESTful API </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="framworks">
                    <App />
                </div>
            </div>
            <Fab onClick={()=> this.goto('/myprojects')} color="secondary" className="next" aria-label="Add" >
                <AddIcon style={{color:'white'}} />
            </Fab>
        </div>
    )
  }
}


export default connect(null, actions)(OutSkills)