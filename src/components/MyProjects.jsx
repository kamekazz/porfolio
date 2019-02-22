import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/KeyboardArrowRight';
import * as actions from '../store/actions'
import history from '../../src/history'




const data = [
  {title:'FioBook APP',des:'Is the Dominican Republic most of the people use credit and pay once a month so I created this PWA app to help small business manage account instead of writing everything in aNotebook . To use and demo this app please use this password: 123456 and user account name: TAVERAS78@GMAIL.COM .',code:'',fab:[{link:'https://github.com/kamekazz/fiobook-cli',icon:'fab fa-github'},{link:'https://colbook-0818.firebaseapp.com/login',icon:'fas fa-link'}],tec:['node js','angular','material','bootstrap','mongodb','PWA'],img:'ast/img/mony.jpg'},
  {title:'Viva la Musica',des:`I created this app for a mall It gives the ability of every guess to add music to a playlist And be able to vote for the next song, This is not the original app I changed a couple things to be suitable for the web .To demo this app please use this password: demo  and user account name: demo.`,code:'',fab:[{link:'https://github.com/kamekazz/viva-cli',icon:'fab fa-github'},{link:'https://viva-la-musica.firebaseapp.com/signin',icon:'fas fa-link'}],tec:['node js','React JS','material','mongodb'],img:'ast/img/music.jpg'}
]

export class MyProjects extends Component {

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

    const rdpro =() =>(
      data.map(item=>(
        <div key={item.title} className="card">
          <div className="top">
            <figure className="MyProjects__shape--1">
              <img src={item.img} alt={item.img} className="MyProjects__img" />
              <figcaption className="MyProjects__caption">{item.title}</figcaption>
            </figure>
            <div className="sp">
              <h2>{item.title}</h2>
            </div>
            {item.fab.map(fabI => (
              <a href={fabI.link} key={fabI.icon} rel="noopener noreferrer" target="_blank"><Fab className="fab" color="primary"  >
                <i style={{fontSize:'30px'}} className={fabI.icon}></i>
              </Fab>
              </a>
            ))}
          </div>
          
          <p className="des">{item.des}</p>

          {item.tec.map(tecI => <Chip key={tecI} className="nn" color="primary" label={tecI} />)}
          
        </div>
      ))
    )
    

    return (
      <div onScroll={this.activet} className="MyProjects">
       
        <div className="mainConten">

          <div className="prolist">
            {rdpro()}
          </div>


        </div>
        <Fab onClick={() => this.goto('/clone')} color="secondary" className="next" aria-label="Add" >
          <AddIcon style={{ color: 'white' }} />
        </Fab>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})



export default connect(mapStateToProps, actions)(MyProjects)
