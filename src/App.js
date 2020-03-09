import React, {Component} from 'react';
import Header from './Components/Header'
import House from './Components/House'
import Footer from './Components/Footer'
// import Wizards from './Components/Wizards'
import axios from 'axios'
import './App.css';
// import { response } from 'express';

class App extends Component {

  constructor(){
    super()

    this.state = {
      wizards: [],
    }
    this.sort =this.sort.bind(this)
    this.updateWizard = this.updateWizard.bind(this)
    this.removeWizard = this.removeWizard.bind(this)
    console.log(this.state.wizards)
  }

  componentDidMount(){
    axios.get('/api/wizards')
    .then(response => {
      this.setState({wizards: response.data})
    })
  }

  sort = (body) => {
    axios.post('/api/wizards', body)
    .then(response => {
        this.setState({wizards: response.data})
    })
    .catch(res => {
      res.status(500).send(console.log('error adding'))
    })
    
}

  updateWizard = (id, newName) =>{
    console.log(id, newName)
    axios.put(`/api/wizards/${id}`, {name: newName}) 
    .then(response => {
      this.setState({wizards: response.data})
    })
    .catch(res => {
      res.status(500).send(console.log('error updating'))
    })
  }

  removeWizard = (id) => {
    axios.delete(`/api/wizards/${id}`)
    .then(response => {
      this.setState({wizards: response.data})
    })
  }

  render(){

    return(
      <div>
        <Header />
       <House 
              sort={this.sort}
              wizards={this.state.wizards}
              updateWizard={this.updateWizard}
              removeWizard={this.removeWizard}/>
              <Footer/>
        

      </div>
    )
  }
}

export default App;
