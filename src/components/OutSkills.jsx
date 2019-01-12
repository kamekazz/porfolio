import React, { Component } from 'react'
import Slide from '@material-ui/core/Slide';
import WorkIcon from '@material-ui/icons/Work';
import TableSkills from './TableSkills';
import 'animate.css'

 class OutSkills extends Component {
  render() {
    return (
      <div className="OutSkills">
        <div className="skills">
            <div className="header">
                <h4>MY MISSION IS TO</h4>
                <h3>ENGINEER & DEVELOP THE BEST WEBSITES AROUND</h3>
                <div className="line"/>
            </div>
            <div className="exporience">
                <WorkIcon  className="icon "/>
                <h4>Experience</h4>
                <div className="line2"/>
                <ul>
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
                        <p>bootstrap material-design semantic-ui</p> 
                    </li>
                    <li>
                        <span>Api</span>
                        <p >Google twilio openweathermap more...</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="framworks">
            <TableSkills />
        </div>

        



        <Slide direction="left" in={true} timeout={1000} >
        <div className="title">OUR SKILLS</div>
        </Slide>

        <Slide direction="right" in={true} timeout={3000} >
            <div className="s2-bg"></div>
        </Slide>
      </div>
    )
  }
}

export default OutSkills