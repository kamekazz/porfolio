import React, { Component } from 'react'




 class Nav extends Component {

    state={
        open:false
    }

    togoleNav =()=>{
        this.setState({open:!this.state.open})
    }
  render() {
      const {open}=this.state;
    return (
      <div className={open ? 'Nav ':'Nav close' }>
        <div className="navBar">
            
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