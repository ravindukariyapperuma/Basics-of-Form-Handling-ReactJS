import React, { Component } from 'react'
const axios = require('axios');

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

    handleSubmit = event => {
        // alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        // event.stopImmediatePropagation();
        event.preventDefault();
        console.log(this.state.username);
        this.sendData();
    }

    async sendData () {
        const data ={
            title: this.state.username,
            description: this.state.comments
        }
        try{
            const responce = await axios({
                method: 'post',
                url: 'http://localhost:4000/posts',
                data: data,
              });
              console.log(responce);
        }catch(ex){

        }
    }
    
    render() {
        const { username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                     type="text" 
                     value={username} 
                     onChange={this.handleUsernameChange} 
                     />
                </div>
                <div>
                    <lable>Comments</lable>
                    <textarea 
                    value={comments} 
                    onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <lable>Topic</lable>
                    <select 
                    value={topic} 
                    onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="anguler">Anguler</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
