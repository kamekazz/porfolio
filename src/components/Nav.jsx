import React, { Component } from 'react'


const dataNav=[{title:'About Me',},{title:'My Skills'},{title:'My Projects'},{title:'Web Clone'}]

 class Nav extends Component {

    state={
        open:false
    }

    togoleNav =()=>{
        this.setState({open:!this.state.open})
    }
  render() {
    const {open}=this.state;

    const rdNavTag =()=>(
        dataNav.map(item =>(
            <li key={item.title} className="navItem">{item.title}</li>
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
export default Nav