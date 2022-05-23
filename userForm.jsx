import React from 'react';



class UserForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userName: 'paul',
        }

       

    } 
    formSubmitted = (event) => {
            event.preventDefault();
            alert(
                'Name:' + this.state.userName
            )
        }

        nameValueChanged = (event) => {
            this.setState({userName: event.target.value})
        }
    render(){
        return(
            <form action="submit" onSubmit={this.formSubmitted}>
                <label>
                    name:
                    <input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.nameValueChanged}/>
                </label>
                <button>submit</button>
            </form>
        )
    }
}
export default UserForm;

