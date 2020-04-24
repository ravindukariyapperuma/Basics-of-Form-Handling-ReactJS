import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input
                     type="text" 
                     value={this.state.username} 
                     onChange={this.handleUsernameChange} 
                     />
                </div>
                <div>
                    <lable>Comments</lable>
                    <textarea 
                    value={this.state.comments} 
                    onChange={this.handleCommentChange}></textarea>
                </div>
            </form>
        )
    }
}

export default Form
