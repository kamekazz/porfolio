import React, { Component } from 'react'
import history from '../../src/history'
import { connect } from 'react-redux'
import * as actions from '../store/actions'



const dataNav=[{title:'About Me',location:'/aboutme'},{title:'My Skills',location:'/skills'},{title:'My Projects',location:'/myprojects'},{title:'Web Clone',location:'/clone'}]

 class Nav extends Component {

    state={
        open:false
    }

    togoleNav =()=>{
        this.setState({open:!this.state.open})
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
    onClose=()=>{
        this.setState({open:false})
    }

  render() {
    const {open}=this.state;

    


    const rdNavTag =()=>(
        dataNav.map(item =>(
            <li key={item.title} onClick={()=> this.goto(item.location)} className="navItem">{item.title}</li>
        ))
    )


    return (
      <div className={open ? 'Nav ':'Nav close' }>

        <div className="navBar">

            <div className="contaner menu">
                <h2 className="h2">Menu</h2>
            </div>
            <ul className={open ? 'contaner':'contaner close'}>
                {rdNavTag()}
            </ul>
            <div className="contaner">
                <a href="https://codepen.io/kamekazz/pens/popular/"rel="noopener noreferrer" target="_blank">
                    <div  className="gettouch btn">     
                        <div>
                            codepen
                        </div> 
                    </div>
                </a>
                <a href="https://github.com/kamekazz"rel="noopener noreferrer" target="_blank">
                    <div  className="gettouch btn">     
                        <div>
                            more Projects
                        </div> 
                    </div>
                </a>
                <a href="https://codesandbox.io/u/kamekazz"rel="noopener noreferrer" target="_blank">
                    <div  className="gettouch btn">     
                        <div>
                            codesandbox
                        </div> 
                    </div>
                </a>
            </div>
            
            
        </div>
        <div onClick={this.togoleNav} className="small">
            <div className={open ? 'top openT':'top closeT' } />
            <div className={open ? 'medio medioO':'medio medioC' } />
            <div className={open ? 'botn openB':'botn closeB' } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    offView: state.nav.offView
})



export default connect(mapStateToProps, actions)(Nav)

