import React, { Component } from 'react'

import { connect } from 'react-redux'

import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';

import Fab from '@material-ui/core/Fab';



export class MyProjects extends Component {

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
      <div onScroll={ this.activet} className="MyProjects">


        <figure className="MyProjects__shape--1">
            <img src="ast/img/mony.jpg" alt="Person on a tour" className="MyProjects__img" />
            <figcaption className="MyProjects__caption">FioBook APP</figcaption>
        </figure>
        <h3 className="MyProjects__h3--1">FioBook APP</h3>
        <div className="MyProjects__text">
            <p>
            Is the Dominican Republic most of the people use credit and pay once a month so I created this  PWA app to help small business manage account instead of writing everything in aNotebook .
            To use and demo this app please use this password: <span className="inportan">123456</span>  and user account name: <span className="inportan">TAVERAS78@GMAIL.COM</span> .
            </p>
        </div>
   
        <div className="MyProjects__tec">
          <Chip color="primary"label="node.js" />
          <Chip color="primary"label="angular" />
          <Chip color="primary"label="material" />
          <Chip color="primary"label="bootstrap" />
          <Chip color="primary"label="mongodb" />
          <Chip color="primary"label="PWA" />
        </div>
        
        <div className="iconlist">
          <a href="https://github.com/kamekazz/fiobook-cli"rel="noopener noreferrer" target="_blank"><Fab className="fab" color="primary"  >
              <i className="fab fa-github "></i>
            </Fab>
          </a>

          <a href="https://colbook-0818.firebaseapp.com/login"rel="noopener noreferrer" target="_blank"><Fab className="fab" color="primary"  >
          <i className="fas fa-link"></i>
            </Fab>
          </a>
        </div>

        <figure className="MyProjects__shape--2">
            <img src="ast/img/music.jpg" alt="Person on a tour" className="MyProjects__img" />
            <figcaption className="MyProjects__caption">Viva la Musica</figcaption>
        </figure>
        <h3 className="MyProjects__h3--2">Viva la Musica</h3>

        <div className="iconlist--2">
          <a href="https://github.com/kamekazz/viva-cli"rel="noopener noreferrer" target="_blank"><Fab className="fab" color="primary"  >
              <i className="fab fa-github "></i>
            </Fab>
          </a>

          <a href="https://viva-la-musica.firebaseapp.com/signin"rel="noopener noreferrer" target="_blank"><Fab className="fab" color="primary"  >
          <i className="fas fa-link"></i>
            </Fab>
          </a>
        </div>

        <div className="MyProjects__text-2">
            <p>
            I created this app for a mall It gives the ability of every guess to add music to a playlist And be able to vote for the next song, This is not the original app I changed a couple things to be suitable for the web .To demo this app please use this password: <span className="inportan">demo</span>  and user account name: <span className="inportan">demo</span> .
            </p>
        </div>

        <div className="MyProjects__tec-2">
          <Chip color="primary"label="node.js" />
          <Chip color="primary"label="React js" />
          <Chip color="primary"label="material" />
          <Chip color="primary"label="mongodb" />
        </div>



        <div className="btn--posich" >
            <div onClick={this.hp_doleClik}  className="gettouch btn">get in touch</div>
        </div>

        
          <div className="btn--posich-2" >
            <a href="https://github.com/kamekazz"rel="noopener noreferrer" target="_blank">
              <div  className="gettouch btn"><i className="fab fa-github "></i> more Projects</div>
            </a>
          </div> 
      
        <div className="btn--posich-3" >
        <a href="https://codesandbox.io/u/kamekazz"rel="noopener noreferrer" target="_blank">
            <div  className="gettouch btn"><i className="fab fa-codepen"></i> codepen</div>
        </a>
        </div> 

       <Slide direction="left" in={true} timeout={1000} >
          <div className="title-p">
            <div className="title">My Projects</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects)
