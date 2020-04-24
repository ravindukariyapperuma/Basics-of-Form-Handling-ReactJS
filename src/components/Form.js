import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
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
                <div>
                    <lable>Topic</lable>
                    <select 
                    value={this.state.topic} 
                    onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="anguler">Anguler</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default Form
