import React, {Component} from 'react';
import Header from './Components/Header'
import House from './Components/House'
// import Wizards from './Components/Wizards'
import axios from 'axios'
import './App.css';

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
    
}

  updateWizard = (id, newName) =>{
    console.log(id, newName)
    axios.put(`/api/wizards/${id}`, {name: newName}) 
    .then(response => {
      this.setState({wizards: response.data})
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
        

      </div>
    )
  }
}

export default App;
