import React, {Component} from 'react' 

class Wizards extends Component{

    constructor(){
        super()

        this.state ={
            isEditing: false,
            updateName: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.editHandler = this.editHandler.bind(this)
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    editHandler = () => {
        let {id} = this.props.sorted;
        let {updateName } = this.state;
        this.props.updateWizard(id, updateName)
        this.toggleEdit()
     }

     inputHandler = (e) => {
         console.log(this.state.updateName)
        this.setState({
            updateName: e.target.value
        })
     }



    render(){
        console.log(this.props)
        
        const {updateWizard, removeWizard} = this.props
        return(
            <div>
                <div className='edit-inputs'> 
                    {this.state.isEditing
                    ?
                    (
                    <div>
                        <input onChange={e => this.inputHandler(e)} placeholder="name" value={this.props.name}/>
                        <button className="button" onClick={() => {
                            this.editHandler()
                        }}>Save</button> 
                    </div>
                    )
                    :
                    (
                    <div className='sorted-style'>
                        <h3 onClick={this.toggleEdit}>{this.props.sorted.house}</h3> 
                        <p onClick={this.toggleEdit}>{this.props.sorted.name}</p> 
                    </div>
                    )} 
                    <button className="button" onClick={e => removeWizard(this.props.sorted.id)}>Remove</button>

                    {/* {this.props.sorted} */}
                </div>
            </div>
        )
    }
}

export default Wizards