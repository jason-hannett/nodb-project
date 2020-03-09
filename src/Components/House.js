import React, {Component} from 'react' 
import Wizards from './Wizards'

class House extends Component{

    constructor(){
        super()

        this.state = {
            houses: ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'],
            house: '',
            name: ''
            
        }
        this.firePost = this.firePost.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
    }

    firePost = () => {
        const index = Math.floor(Math.random(0) * 4);
        console.log(index)
        this.setState({house: this.state.houses[index]})
        this.props.sort({house: this.state.house, name: this.state.name})
        
    }

    inputHandler = (e) => {
       this.setState({
           [e.target.placeholder]: e.target.value
       })
    }

    
    render(){
        console.log(this.props)
        const {wizards, updateWizard, removeWizard} = this.props
        const newWizard = this.props.wizards.map((element, index) => {
            return <Wizards key={index} sorted={element} wizards={wizards} updateWizard={updateWizard} removeWizard={removeWizard}/>
            })
            // console.log(newWizard)
        return(
           
                <div className="background-image">
                    <div className='input-container'>
                    {/* <input onChange={e => this.inputHandler(e)} placeholder='house' value={this.state.house}/> */}
                    <input className='input-one' onChange={e => this.inputHandler(e)} placeholder='name' value={this.state.name}/>
                    <button className='button' src={'https://banner2.cleanpng.com/20180508/erw/kisspng-sorting-hat-download-computer-icons-5af1c2970265a7.7249628115257934310098.jpg'} 
                     onClick={this.firePost}>Sort</button>
                    </div>
                    <div className="list-container">
                    
                    {newWizard}
                    </div>
                   
                </div>
            
        )
    }
}

export default House